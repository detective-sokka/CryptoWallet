import { configureChains, createConfig, WagmiConfig, Chain } from "wagmi";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

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
