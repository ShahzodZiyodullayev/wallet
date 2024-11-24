import { useState, useEffect } from "react";
import { WCopyButton } from "@/shared/ui/copy-button";
import { Box, Button, Stack, TextInput, Title } from "@mantine/core";
import { ethers } from "ethers";
import classes from "./ERC20.module.css";
import { useAccount } from "wagmi";
import { formatAddress, formatBalance, notifyError } from "@/shared/lib/helpers";
import { ERC20_ABI, ERC20_ADDRESS } from "@/shared/lib/constants";

/**
 * TokenBalance component fetches and displays the ERC20 token balance of a connected wallet address.
 *
 * @return {JSX.Element} The rendered component which includes an input field for ERC20 token address,
 * a button to fetch the token balance, and displays the resulting balance.
 */
function TokenBalance() {
  const { address, isConnected } = useAccount();
  const [provider, setProvider] = useState<any>(null);
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenBalance, setTokenBalance] = useState("0.0000");
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  const formattedAddress = formatAddress(ERC20_ADDRESS);

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
          <TextInput mb={15} placeholder="Enter ERC20 Token Address" value={tokenAddress} onChange={e => setTokenAddress(e.target.value)} />
          <WCopyButton value={ERC20_ADDRESS} shortValue={formattedAddress} />
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
