import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { formatBalance, notifyError } from "@/shared/lib/helpers";
import classes from "./ERC20.module.css";

const ERC20_ABI = ["function balanceOf(address owner) view returns (uint256)", "function decimals() view returns (uint8)"];

function TokenBalance() {
  const { address, isConnected } = useAccount();
  const [provider, setProvider] = useState<any>(null);
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenBalance, setTokenBalance] = useState("0.0000");
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  useEffect(() => {
    if (window.ethereum && isConnected) {
      try {
        const providerInstance = new ethers.BrowserProvider(window.ethereum);
        setProvider(providerInstance);
      } catch (err: any) {
        notifyError(`Failed to initialize provider. ${err?.message}`);
      }
    }
  }, [isConnected]);

  const fetchTokenBalance = async () => {
    if (!provider) {
      notifyError("Wallet not connected");
      return;
    }
    try {
      setIsLoadingBalance(true);
      if (!ethers.isAddress(tokenAddress)) {
        notifyError("Invalid contract address");
        return;
      }
      const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const code = await provider.getCode(tokenAddress);
      if (code === "0x") {
        notifyError("The provided address is not a valid contract");
        return;
      }
      const balance = await tokenContract.balanceOf(address);
      const decimals = await tokenContract.decimals();
      const formattedBalance = ethers.formatUnits(balance, decimals);

      setTokenBalance(formatBalance(formattedBalance, "Tokens"));
    } catch (err: any) {
      notifyError(err?.message || "There was an error getting the balance");
    } finally {
      setIsLoadingBalance(false);
    }
  };

  return (
    <Box>
      {isConnected ? (
        <Stack className={classes.WAccountBalanceContainer}>
          <TextInput
            mb={15}
            placeholder="Enter ERC20 Token Address"
            defaultValue="0x6B175474E89094C44Da98b954EedeAC495271d0F"
            value={tokenAddress}
            onChange={e => setTokenAddress(e.target.value)}
          />
          <Title className={classes.WAccountBalanceTitle}>Balance</Title>
          <Title className={classes.WAccountBalance}>{tokenBalance} </Title>
          <Button variant="light" color="teal" onClick={fetchTokenBalance} className={classes.WCheckBalance} loading={isLoadingBalance}>
            Check Balance
          </Button>
        </Stack>
      ) : (
        <Title className={classes.WConnectWagmiTitle}>Connect to wallet to check ERC20 Token balance</Title>
      )}
    </Box>
  );
}

export default TokenBalance;
