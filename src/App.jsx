import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Logged from "./pages/Loged";

// commit prueba

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/logado" element={<Logged />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
