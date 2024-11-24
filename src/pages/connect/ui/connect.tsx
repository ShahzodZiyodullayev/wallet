import { Connector, useChainId, useConnect } from "wagmi";
import { useState } from "react";
import { Box, Center, Stack, Title } from "@mantine/core";
import { notify, notifyError } from "@/shared/lib/helpers";
import { ConnectorButton } from "@/features/connector-button";
import classes from "./Connect.module.css";

/**
 * Connect component manages the wallet connection process. It displays a list of available connectors
 * and allows the user to connect to one of them. The connection status is indicated by loading states
 * and notifications for success or error events.
 *
 * @return {JSX.Element} The rendered Connect component containing the UI for wallet connection.
 */
export default function Connect() {
  const chainId: number = useChainId();
  const { connectors, connectAsync } = useConnect();
  const [loadingStates, setLoadingStates] = useState<boolean[]>([]);

  const handleConnect = async (connector: Connector, index: number) => {
    setLoadingStates(prev => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });

    try {
      await connectAsync({ connector, chainId });
      notify("Wallet connected", "teal");
    } catch (error: any) {
      notifyError(error.message);
    } finally {
      setLoadingStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }
  };

  return (
    <Box mb="lg">
      <Title className={classes.WConnectTitle}>No wallet is connected</Title>
      <Center className={classes.WConnectCenter}>
        <Stack>
          {connectors.map((connector: Connector, idx: number) => (
            <ConnectorButton
              key={connector.uid}
              connector={connector}
              onClick={() => handleConnect(connector, idx)}
              loading={loadingStates[idx] || false}
              index={idx}
            />
          ))}
        </Stack>
      </Center>
    </Box>
  );
}
