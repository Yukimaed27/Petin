import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR - Solo se muestra cuando el usuario está autenticado */}
      {token && <Navbar onLogout={() => setToken(null)} />}

      {/* CONTENEDOR DE RUTAS - Crece para llenar el espacio disponible */}
      <div className="flex-grow">
        <Routes>
          {/* HOME - Landing page sin autenticación */}
          <Route path="/" element={<Home />} />

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

          {/* EXPLORE - Requiere autenticación */}
          <Route
            path="/explore"
            element={token ? <Explore /> : <Navigate to="/login" replace />}
          />

          {/* MATCH - Requiere autenticación, muestra matches del usuario */}
          <Route
            path="/match"
            element={token ? <Match /> : <Navigate to="/login" replace />}
          />

          {/* PROFILE - Requiere autenticación, perfil del usuario y mascota */}
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" replace />}
          />

          {/* RUTA COMODÍN - Redirige cualquier otra ruta a home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
