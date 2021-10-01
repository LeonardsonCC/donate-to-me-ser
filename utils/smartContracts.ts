import { InjectedConnector } from "@web3-react/injected-connector";

const chainId = process.env.DEV ? 31337 : 250;

export const injected = new InjectedConnector({
  supportedChainIds: [chainId],
});
