import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";

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
      ></div>
    </div>
  );
}

export default App;
