import { Connector } from "wagmi";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";

interface TConnectProps {
  connector: Connector;
  onClick: () => void;
  loading: boolean;
  index: number;
}

const ConnectorButton = ({ connector, onClick, loading, index }: TConnectProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  return (
    <>
      <Button disabled={!ready} onClick={onClick} loading={loading} variant={index ? "light" : "filled"}>
        {connector.name}
      </Button>
    </>
  );
};

export default ConnectorButton;
