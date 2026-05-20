import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home, Heart, User, LogOut } from "lucide-react";
import { ClipboardPlus, ClipboardList } from "lucide-react";

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // borra token
    navigate("/login");
  };

  return (
    /* NAVBAR CONTENEDOR - Barra de navegación fija con sombra profesional y sticky top */
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-lg shadow-purple-300 border-b-2 border-purple-100">
      <div className="flex justify-start">
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
      </div>

      {/* MENÚ DE NAVEGACIÓN - Links principales del navbar */}
      <div className="flex justify-center flex-1 gap-8 items-center sm:gap-8 mx-2">
        {/* BOTÓN HOME - Navega a explore */}
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 transition duration-300 flex items-center gap-2 cursor-pointer"
              : "text-gray-700 hover:text-purple-700 transition duration-300 flex items-center font-medium gap-2 cursor-pointer"
          }
          // className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <Home size={22} />
          <span className="hidden md:inline">Explorar</span>
        </NavLink>

        {/* BOTÓN MATCHES - Navega a matches */}
        <NavLink
          to="/match"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 transition duration-300 flex items-center gap-2 cursor-pointer"
              : "text-gray-700 hover:text-purple-700 transition duration-300 flex items-center font-medium gap-2 cursor-pointer"
          }
          // className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <Heart size={22} />
          <span className="hidden md:inline">Matches</span>
        </NavLink>

        {/* BOTÓN PERFIL - Navega a perfil del usuario */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 transition duration-300 flex items-center gap-2 cursor-pointer"
              : "text-gray-700 hover:text-purple-700 transition duration-300 flex items-center font-medium gap-2 cursor-pointer"
          }
          // className="text-gray-700 hover:text-purple-900 transition duration-300 font-medium flex items-center gap-2"
        >
          <User size={22} />
          <span className="hidden md:inline">Perfil</span>
        </NavLink>

        <NavLink
          to="/register-pet"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-purple-700 transition duration-300 flex items-center gap-2 cursor-pointer"
              : "text-gray-700 hover:text-purple-700 transition duration-300 flex items-center font-medium gap-2 cursor-pointer"
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <ClipboardPlus size={22} />
              ) : (
                <ClipboardList size={22} />
              )}
              <span className="hidden md:inline">Registro</span>
            </>
          )}
        </NavLink>
      </div>

      <div className="flex justify-end">
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

export default React.memo(Navbar);
