// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

//@detective-sokka Below HEre is My code I added for the Rainbow Kit Wallet Functionality. I commented out the orginal code from forked repo

import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
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
import "./components/WalletConnectPage";

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
      <RainbowKitProvider chains={chains}>
        <App />
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
