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
        <h1>Welcome to my app!</h1>

        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
