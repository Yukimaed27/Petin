import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //estado de errores
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // validaciones dinámicas
    let newErrors = { ...errors };

    if (name === "name") {
      if (value.trim().length < 3) {
        newErrors.name = "Mínimo 3 caracteres";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!value.includes("@")) {
        newErrors.email = "Correo inválido";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        newErrors.password = "Mínimo 6 caracteres";
      } else {
        delete newErrors.password;
      }
    }

    if (name === "confirmPassword") {
      if (value !== form.password) {
        newErrors.confirmPassword = "Las contraseñas no coinciden";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  //validaciones
  const validate = () => {
    let newErrors = {};

    // nombre
    if (form.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener mínimo 3 caracteres";
    }

    // email
    if (!form.email.includes("@")) {
      newErrors.email = "Correo inválido";
    }

    // password
    if (form.password.length < 6) {
      newErrors.password = "La contraseña debe tener mínimo 6 caracteres";
    }

    // confirmar contraseña
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ejecutar validaciones
    if (!validate()) return;

    // guardar usuario
    localStorage.setItem("pettin_user", JSON.stringify(form));

    alert("¡Cuenta creada exitosamente! ✔");

    navigate("/login");
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
            “Encontrar amigos para tu mascota nunca fue tan fácil”
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 py-10">
        <div className="w-full max-w-md">
          {/* LOGO CLICKEABLE - Navegable a Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-900 font-bold text-2xl mb-8 hover:text-purple-700 transition duration-300"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-2 rounded-xl">
              🐾
            </div>
            Pettin
          </button>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Crear cuenta
          </h2>

          <p className="text-gray-600 mb-8 text-base">
            Únete a nuestra comunidad y encuentra amigos para tu mascota
          </p>

          {/* BOTONES DE REDES SOCIALES - Mejorados con nuevos estilos */}
          <button className="w-full border-2 border-gray-300 hover:border-purple-400 py-3 rounded-full mb-3 font-medium hover:bg-purple-50 transition duration-300">
            <FontAwesomeIcon
              icon={faGoogle}
              alt="Google"
              className="w-4 h-4 inline mr-2 filter brightness-0"
            />
            Registrarse con Google
          </button>

          <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full mb-6 font-medium transition duration-300">
            <FontAwesomeIcon
              icon={faApple}
              alt="Apple"
              className="w-5 h-5 inline mr-2 filter brightness-0 invert"
            />
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
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}

            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <input
              name="password"
              type="password"
              placeholder="Contraseña (mín. 6 caracteres)"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition"
              required
              minLength={6}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
              required
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 mt-6"
            >
              Crear cuenta
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-sm text-gray-600 mt-6">
            ¿Ya tienes cuenta?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-900 font-bold cursor-pointer hover:text-purple-700 transition"
            >
              Inicia sesión
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

export default Register;
