import { http, createConfig, Config } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { walletConnect, metaMask } from "wagmi/connectors";
import { WAGMI_PROJECT_ID } from "@/shared/lib/constants";

/**
 * The `config` variable holds the configuration settings for connecting to blockchain networks.
 *
 * - `chains`: Specifies the blockchain networks to connect, in this case `mainnet` and `base`.
 * - `connectors`: Lists the wallet connectors to be used (`walletConnect` and `metaMask`).
 * - `transports`: Defines the transport mechanisms for the specified chains, using HTTP for both `mainnet` and `base`.
 *
 * @type {Config}
 */
export const config: Config = createConfig({
  chains: [mainnet, base],
  connectors: [walletConnect({ projectId: WAGMI_PROJECT_ID }), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
