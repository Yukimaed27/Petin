import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  // ESTADO DEL TOKEN - Almacena la autenticación del usuario
  // Se carga desde localStorage al inicializar la app
  const [token, setToken] = useState(() => {
    // Obtiene el token guardado en localStorage (si existe)
    const savedToken = localStorage.getItem("pettin_auth_token");
    return savedToken || null;
  });

  // EFECTO DE SINCRONIZACIÓN - Guarda el token en localStorage cada vez que cambia
  useEffect(() => {
    if (token) {
      // Si hay token, lo guarda en localStorage para persistencia
      localStorage.setItem("pettin_auth_token", token);
    } else {
      // Si no hay token (logout), elimina del localStorage
      localStorage.removeItem("pettin_auth_token");
    }
  }, [token]);

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

          {/* RUTA COMODÍN - Captura cualquier otra ruta y muestra página 404 personalizada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
