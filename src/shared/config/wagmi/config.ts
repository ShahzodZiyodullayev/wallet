import { http, createConfig, Config } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { walletConnect, metaMask } from "wagmi/connectors";

const projectId = "4441a65332b395105b706af70e6f8a19";

export const config: Config = createConfig({
  chains: [mainnet, base],
  connectors: [walletConnect({ projectId }), metaMask()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
