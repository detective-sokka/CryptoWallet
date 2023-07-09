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

const customChains: Chain[] = [
  {
    name: "My Custom Chain",
    chainId: 12345,
    networkId: 12345,
    rpcUrls: ["https://my.custom.chain/rpc"],
    blockExplorerUrls: ["https://my.custom.chain/explorer"],
    nativeCurrency: {
      name: "My Custom Token",
      symbol: "MCT",
      decimals: 18,
    },
    iconUrl: "https://example.com/icons/my-custom-icon.png", // Add your custom icon URL here
  },
];

const { chains, publicClient } = configureChains(customChains, [
  publicProvider(),
]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
