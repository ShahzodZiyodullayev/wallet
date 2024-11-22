import { useAccount } from "wagmi";
import { Account } from "@/features/account";
import { Connect } from "@/features/connect";

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  return <div className="container">{isConnected ? <Account /> : <Connect />}</div>;
}
