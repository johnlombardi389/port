import { useState } from "react";
import reactLogo from "./assets/react.svg";
// Styles
import "./styles/app.scss";
// Component
import Nav from "./components/Nav";
// Pages
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
