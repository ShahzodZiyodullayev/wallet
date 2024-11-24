import { WagmiProvider } from "wagmi";

import { config } from "@/shared/config";
import { ConnectWallet } from "@/features/connect-wallet";

/**
 * Renders the App component.
 *
 * This function returns a React component that wraps the `ConnectWallet` component with
 * the `WagmiProvider` configured with the provided `config`.
 *
 * @return {JSX.Element} The rendered App component.
 */
export default function App() {
  return (
    <WagmiProvider config={config}>
      <ConnectWallet />
    </WagmiProvider>
  );
}
