import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Dashboard from "./components/Dashboard/Dashboard"

const Routing = () => {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
    </Routes>
  );
}

function App() {
  return (
   <BrowserRouter>
    <Routing />
   </BrowserRouter>
  );
}

export default App;
