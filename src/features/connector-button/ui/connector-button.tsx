import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { TConnectProps } from "@/shared/types";

/**
 * ConnectorButton is a component that renders a button for a given connector.
 * It manages the readiness state of the connector and appropriately handles
 * user interactions based on the connector's state.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.connector - The connector object to be used.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} props.loading - Indicates if the button should display a loading state.
 * @param {number} props.index - The index of the connector, used to determine the button variant.
 *
 * @returns {JSX.Element} A button component for the given connector.
 */
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
