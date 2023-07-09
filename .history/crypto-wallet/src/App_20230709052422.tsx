import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="wrapper">
      <WelcomePage />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 12,
        }}
      >
        <h2>OR Connect With Web3 Wallet</h2>

        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
