import { useState } from "react";
import reactLogo from "./assets/react.svg";
// Styles
import "./styles/app.scss";
// Pages
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
