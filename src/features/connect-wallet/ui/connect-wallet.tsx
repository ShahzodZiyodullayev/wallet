import { useAccount, useDisconnect } from "wagmi";
import { Card, Center, Container, Title, Divider, ActionIcon, Flex } from "@mantine/core";
import { Account } from "@/pages/account";
import { Connect } from "@/pages/connect";
import { TestWallet } from "@/pages/ERC20";
import { IconHome } from "@tabler/icons-react";
import classes from "./Connect-wallet.module.css";

/**
 * ConnectWallet component renders the interface for connecting a user's wallet.
 * It displays the wallet connection status and provides access to the wallet account or a connect option.
 *
 * @return {JSX.Element} The rendered component, showing the wallet connection UI.
 */
export default function ConnectWallet() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <Container fluid className={classes.WConnectWallet}>
      <Center className={classes.WCenterComponent}>
        <Flex justify={isConnected ? "space-between" : "center"} className={classes.WTitleSection}>
          {isConnected && (
            <ActionIcon variant="light" size="xl" onClick={() => disconnect()}>
              <IconHome size={30} />
            </ActionIcon>
          )}
          <Title className={classes.WTitle}>Wallet</Title>
        </Flex>
        <Card className={classes.WCenterCard}>
          {isConnected ? <Account /> : <Connect />}
          <Divider my="lg" />
          <TestWallet />
        </Card>
      </Center>
    </Container>
  );
}
