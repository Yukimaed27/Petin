import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cuenta creada ✔");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 font-sans">
      <div className="hidden lg:flex lg:w-1/2 relative bg-purple-900">
        <img
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80"
          alt="Mascotas"
          className="object-cover w-full h-full opacity-90"
        />

        <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-md p-6 rounded-2xl text-white border border-white/10">
          <p className="text-lg font-medium">
            “Encontrar amigos para tu mascota nunca fue tan fácil”
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-md">

          <div className="flex items-center gap-2 text-[#3b0764] font-bold text-2xl mb-8">
            <div className="bg-[#3b0764] text-white p-2 rounded-xl text-sm">
              🐾
            </div>
            Pettin
          </div>

          <h2 className="text-3xl font-bold text-gray-900">Crear cuenta</h2>

          <p className="text-gray-500 mb-6">
            Únete y encuentra nuevos amigos para tu mascota
          </p>


          <button className="w-full border p-3 rounded-full mb-3 hover:bg-gray-100 transition">
            Registrarse con Google
          </button>

          <button className="w-full bg-black text-white p-3 rounded-full mb-6 hover:bg-gray-800 transition">
            Registrarse con Apple
          </button>

          <div className="flex items-center gap-2 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-xs text-gray-400">
              o regístrate con correo
            </span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Nombre completo"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-300 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#3b0764] text-white p-3 rounded-full font-semibold hover:bg-[#2e054e] transition"
            >
              Crear cuenta
            </button>
          </form>

  
          <p className="text-center text-sm text-gray-600 mt-6">
            ¿Ya tienes cuenta?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#3b0764] font-bold cursor-pointer hover:underline"
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
