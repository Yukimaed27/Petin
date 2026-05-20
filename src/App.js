import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Match from "./pages/Match";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
const { token, logout } = useAuth();



  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR - Solo se muestra cuando el usuario está autenticado */}
     {token && <Navbar onLogout={logout} />}

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
                <Login/>
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
            element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }
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
