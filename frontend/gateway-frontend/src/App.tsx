// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TwoFactorAuth from "./pages/TwoFactorAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth/twoFactorAuth" element={<TwoFactorAuth />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
