import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans text-gray-900">
      {/* IZQUIERDA (solo desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-purple-900">
        <img
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80"
          alt="Mascotas"
          className="object-cover w-full h-full opacity-90"
        />

        <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-md p-6 rounded-2xl text-white border border-white/20">
          <p className="text-lg font-medium">
            "Encuentra el mejor amigo para tu mascota"
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 md:px-16 py-10">
        <div className="w-full max-w-md">
          {/* LOGO */}
          <div className="flex items-center gap-2 text-[#3b0764] font-bold text-2xl mb-8">
            <div className="bg-[#3b0764] text-white p-2 rounded-xl">🐾</div>
            Pettin
          </div>

          <h2 className="text-3xl font-bold mb-2">Bienvenido</h2>

          <p className="text-gray-500 mb-6 text-sm">
            Inicia sesión para continuar
          </p>

       
          <button className="w-full border border-gray-300 py-3 rounded-full mb-3 font-medium hover:bg-gray-50 transition">
            Continuar con Google
          </button>

          <button className="w-full bg-black text-white py-3 rounded-full mb-6 font-medium hover:bg-gray-800 transition">
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
              <label className="text-sm text-[#3b0764] font-medium">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@pettin.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label className="text-sm text-[#3b0764] font-medium">
                Contraseña
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3b0764] text-white py-3 rounded-full font-semibold hover:bg-[#2e054e] transition"
            >
              Iniciar sesión
            </button>
          </form>

          {/* REGISTRO */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ¿No tienes cuenta?{" "}
            <span
              className="text-[#3b0764] font-bold cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Crear cuenta
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;
