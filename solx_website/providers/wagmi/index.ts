// import { Prisma, PrismaClient } from "@prisma/client";
// import { goerli, mainnet, polygonMumbai } from "viem/chains";
// import {
//   createConfig,
//   configureChains,
//   createStorage,
//   Storage as ClientStorage,
// } from "wagmi";
// // import {} from "wagmi/"
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// // import {WalletConnectConnector} from "wagmi/connectors/walletConnect"
// import { publicProvider } from "wagmi/providers/public";

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [polygonMumbai, goerli, mainnet],
//   [
//     jsonRpcProvider({
//       rpc: (chain) => ({
//         http: `http://127.0.0.1:7545`,
//       }),
//     }),
//     publicProvider(),
//   ],
// );

// export const connectorMetaMask = new MetaMaskConnector({
//   chains: [goerli],
// });

// // const myCustomStorage: ClientStorage = {
// //   getItem(key, defaultState) {

// //   },
// // };

// const config = createConfig({
//   autoConnect: true,
//   connectors: [new InjectedConnector({ chains }), connectorMetaMask],
//   publicClient,
//   webSocketPublicClient,
//   // storage: createStorage({ storage: new PrismaClient() }),
// });

// // config.store

// export default config;
