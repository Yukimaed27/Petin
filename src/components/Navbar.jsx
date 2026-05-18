import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Heart, User, LogOut } from "lucide-react";

function Navbar({ onLogout }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();       // borra token
    navigate("/login");
  };

  return (
    /* NAVBAR CONTENEDOR - Barra de navegación fija con sombra profesional y sticky top */
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md border-b-2 border-purple-100">

      {/* LOGO PRINCIPAL - Marca y nombre de la app clickeable */}
      <button 
        onClick={() => navigate("/explore")}
        className="flex items-center gap-2 text-purple-900 font-bold text-2xl hover:text-purple-700 transition duration-300"
      >
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-2 rounded-lg">
          🐾
        </div>
        Pettin
      </button>

      {/* MENÚ DE NAVEGACIÓN - Links principales del navbar */}
      <div className="flex gap-8 items-center">

        {/* BOTÓN HOME - Navega a explore */}
        <button 
          onClick={() => navigate("/explore")}
          className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <Home size={20} />
          Explorar
        </button>

        {/* BOTÓN MATCHES - Navega a matches */}
        <button 
          onClick={() => navigate("/match")}
          className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <Heart size={20} />
          Matches
        </button>

        {/* BOTÓN PERFIL - Navega a perfil del usuario */}
        <button 
          onClick={() => navigate("/profile")}
          className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <User size={20} />
          Perfil
        </button>

        {/* BOTÓN LOGOUT - Cierra sesión y redirige a login */}
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center gap-2"
        >
          <LogOut size={18} />
          Salir
        </button>

      </div>

    </nav>
  );
}

export default Navbar;