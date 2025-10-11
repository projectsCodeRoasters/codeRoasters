import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import appLogo from "../../../public/favicon.svg";
import PWABadge from "../../PWABadge";
import "./index.css";
import { useAuth } from "../../hooks/useAuth";

function Dashboard() {
  const [count, setCount] = useState(0);
  const { login } = useAuth();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="codeRoaster logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Code Roasters</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => login("patata")}>Loguearse</button>
        <p>pataaaataaaaaaaa</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  );
}

export default Dashboard;
