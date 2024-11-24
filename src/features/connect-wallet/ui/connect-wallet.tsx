import { useAccount } from "wagmi";
import { Card, Center, Container, Title, Divider } from "@mantine/core";
import { Account } from "@/pages/account";
import { Connect } from "@/pages/connect";
import { TestWallet } from "@/pages/ERC20";
import classes from "./Connect-wallet.module.css";

export default function ConnectWallet() {
  const { isConnected } = useAccount();

  return (
    <Container fluid className={classes.WConnectWallet}>
      <Center className={classes.WCenterComponent}>
        <Title className={classes.WTitle}>Wallet</Title>
        <Card className={classes.WCenterCard}>
          {isConnected ? <Account /> : <Connect />}
          <Divider my="lg" />
          <TestWallet />
        </Card>
      </Center>
    </Container>
  );
}
