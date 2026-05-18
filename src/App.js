import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="min-h-screen">
      {token && <Navbar onLogout={() => setToken(null)} />}

      <Routes>
      
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/explore" replace />
            ) : (
              <Login onLogin={setToken} />
            )
          }
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={token ? <Navigate to="/explore" replace /> : <Register />}
        />

        {/* EXPLORE */}
        <Route
          path="/explore"
          element={token ? <Explore /> : <Navigate to="/login" replace />}
        />

        {/* AGREGAR RUTAS DE LAS PAGINAS */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
