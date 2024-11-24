import { Connector } from "wagmi";

export type TConnectProps = {
  connector: Connector;
  onClick: () => void;
  loading: boolean;
  index: number;
};
