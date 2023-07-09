// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

//@detective-sokka Below HEre is My code I added for the Rainbow Kit Wallet Functionality. I commented out the orginal code from forked repo

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  Chain,
  mainnet,
  polygon,
  optimism,
  arbitrum,
  moonbeam,
  avalanche,
  fantom,
  zora,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, moonbeam, avalanche, fantom, zora],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "CryptoWallet",
  projectId: "0502da39e5bb78df630a0d6240a67a58",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          borderRadius: "medium",
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

const defaultChains: Chain[fantom, iconUrl] = [
  {
    ...mainnet,
    iconUrl: "https://example.com/icons/ethereum.png",
  },
  {
    ...fantom,
    iconUrl: "https://example.com/icons/optimism.png",
  },
];

const { chains } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
  publicProvider(),
]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
