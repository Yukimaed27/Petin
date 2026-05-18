import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin("token-demo");
      navigate("/explore");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* BOTÓN VOLVER A HOME - Acceso rápido a la landing page */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 bg-white text-purple-900 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-10 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline font-medium">Volver</span>
      </button>

      {/* IZQUIERDA (solo desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-purple-900 to-indigo-900">
        <img
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80"
          alt="Mascotas"
          className="object-cover w-full h-full opacity-80"
        />

        {/* OVERLAY OSCURO - Mejora legibilidad del texto */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-md p-6 rounded-2xl text-white border border-white/30">
          <p className="text-lg font-medium">
            "Encuentra el mejor amigo para tu mascota"
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 md:px-16 py-10">
        <div className="w-full max-w-md">
          {/* LOGO CLICKEABLE - Navegable a Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-900 font-bold text-2xl mb-8 hover:text-purple-700 transition duration-300"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-2 rounded-xl">🐾</div>
            Pettin
          </button>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Bienvenido</h2>

          <p className="text-gray-600 mb-8 text-base">
            Inicia sesión para continuar explorando
          </p>

          {/* BOTONES DE REDES SOCIALES - Mejorados con nuevos estilos */}
          <button className="w-full border-2 border-gray-300 hover:border-purple-400 py-3 rounded-full mb-3 font-medium hover:bg-purple-50 transition duration-300">
            <FontAwesomeIcon 
              icon={faGoogle}
              alt="Google"
              className="w-4 h-4 inline mr-2 filter brightness-0"
            />
            Continuar con Google
          </button>

          <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full mb-6 font-medium transition duration-300">
            <FontAwesomeIcon 
              icon={faApple}
              alt="Apple"
              className="w-5 h-5 inline mr-2 filter brightness-0 invert"
            />
            Continuar con Apple
          </button>

          {/* DIVISOR */}
          <div className="flex items-center gap-2 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">o</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-purple-900 font-bold">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@pettin.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                required
              />
            </div>

            <div>
              <label className="text-sm text-purple-900 font-bold">
                Contraseña
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 mt-6"
            >
              Iniciar sesión
            </button>
          </form>

          {/* REGISTRO */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ¿No tienes cuenta?{" "}
            <span
              className="text-purple-900 font-bold cursor-pointer hover:text-purple-700 transition"
              onClick={() => navigate("/register")}
            >
              Crear cuenta
            </span>
          </p>

          {/* LINK A HOME */}
          <p className="text-center text-xs text-gray-500 mt-4">
            <span
              className="text-purple-600 font-semibold cursor-pointer hover:text-purple-800 transition"
              onClick={() => navigate("/")}
            >
              ← Volver a la página de inicio
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
