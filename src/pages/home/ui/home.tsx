import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { config } from "@/shared/config";
import { ConnectWallet } from "@/features/connect-wallet";

/**
 * Represents an instance of QueryClient.
 * QueryClient is responsible for managing cache, queries, and mutations in an application.
 * It provides methods and utilities to fetch and synchronize data.
 */
const queryClient = new QueryClient();

/**
 * The App component is responsible for providing the context and configuration
 * required for the application using the WagmiProvider and QueryClientProvider.
 * It sets up the necessary providers for managing the application's state and
 * connections.
 *
 * @return The App component returns a JSX element that includes the
 *         WagmiProvider and QueryClientProvider wrapping the ConnectWallet
 *         component. This ensures that the necessary configurations and context
 *         are available throughout the application.
 */
export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
