import { useAuth } from "../../hooks/useAuth";

function Logged() {
  const { logout } = useAuth();
  return (
    <div className="card">
      <button onClick={() => logout()}>Desloguearse</button>
      <p>Des pataaaataaaaaaaa</p>
    </div>
  );
}

export default Logged;
