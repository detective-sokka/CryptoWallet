import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import WalletConnectPage from "./components/WalletConnectPage";

function App() {
  return (
    <div className="wrapper">
      <WelcomePage />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/wallet-connect">Connect to Wallet</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/wallet-connect">
              <WalletConnectPage />
            </Route>
            <Route path="/">
              <h1>Welcome to my app!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
