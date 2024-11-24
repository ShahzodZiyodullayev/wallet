import { useAccount, useDisconnect, useWalletClient } from "wagmi";
import { Badge, Box, Flex, Stack, Title, CopyButton, Button } from "@mantine/core";
import { IconCopyPlusFilled, IconPlug } from "@tabler/icons-react";
import { formatAddress, formatBalance, notifyError } from "@/shared/lib/helpers";
import { useState } from "react";
import { ethers } from "ethers";
import classes from "./Account.module.css";

export default function Account() {
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  const { address, connector, status } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: walletClient } = useWalletClient();
  const formattedAddress = formatAddress(address);
  const formattedBalance = formatBalance(balance, "ETH");

  const handleDisconnect = () => {
    disconnect();
  };

  const fetchBalance = async () => {
    if (!address) return;

    setIsLoadingBalance(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balanceInWei = await provider.getBalance(address);
      const formattedBalance = Number(ethers.formatEther(balanceInWei)).toFixed(4);
      setBalance(formattedBalance);
    } catch (err: any) {
      notifyError(err.message || "There was an error getting the balance");
    } finally {
      setIsLoadingBalance(false);
    }
  };

  return (
    <Box>
      <Flex className={classes.WAccountHeader}>
        <Badge>{walletClient?.chain?.name}</Badge>
        <Stack className={classes.WAccountDetail}>
          <Title className={classes.WAccountEnsName}>{connector?.name}</Title>
          {address ? (
            <CopyButton value={address}>
              {({ copied, copy }) => (
                <Button
                  className={classes.WAccountAddressButton}
                  variant="transparent"
                  color={copied ? "teal" : "blue"}
                  onClick={copy}
                  rightSection={<IconCopyPlusFilled size={16} />}>
                  {copied ? "Copied address" : formattedAddress}
                </Button>
              )}
            </CopyButton>
          ) : (
            "Not Connected"
          )}
        </Stack>
      </Flex>
      <Stack className={classes.WAccountBalanceContainer}>
        <Title className={classes.WAccountBalanceTitle}>Balance</Title>
        <Title className={classes.WAccountBalance}>{formattedBalance}</Title>
        <Button variant="light" color="teal" mt={20} onClick={fetchBalance} loading={isLoadingBalance}>
          Check Balance
        </Button>
        <Badge color={status === "connected" ? "green" : "red"} my={20}>
          {status}
        </Badge>
        <Button variant="light" color="red" rightSection={<IconPlug size={16} />} onClick={handleDisconnect}>
          Disconnect Wallet
        </Button>
      </Stack>
    </Box>
  );
}
