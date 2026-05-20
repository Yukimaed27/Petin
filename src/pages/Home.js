import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Shield, Zap } from "lucide-react";
import Footer from "../components/Footer";
import PetRegisterForm from "../components/PetRegisterForm";
import { useAuth } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handlePetRegisterSuccess = () => {
    if (auth) {
      navigate("/profile");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SECCIÓN HERO - Landing page principal con impacto visual máximo */}
      <section className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center px-6 py-20">
        {/* CONTENEDOR DEL CONTENIDO - Centra y limita el ancho máximo */}
        <div className="max-w-4xl w-full text-center">
          
          {/* LOGO PRINCIPAL - Elemento visual prominente de marca */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-3xl text-6xl shadow-2xl">
              🐾
            </div>
          </div>

          {/* TÍTULO PRINCIPAL - Texto grande y bold que capta atención */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Conecta con mascotas increíbles
          </h1>

          {/* SUBTÍTULO DESCRIPTIVO - Explica la propuesta de valor de manera clara */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
            Pettin es la red social donde tu mascota encuentra nuevos amigos. Explora, match y ¡crea conexiones!
          </p>

          {/* DESCRIPCIÓN CORTA - Detalle adicional que invita a la acción */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Únete a miles de dueños y mascotas que ya están disfrutando de encuentros únicos y memorables.
          </p>

          {/* BOTONES DE LLAMADO A LA ACCIÓN - Dos opciones: registrarse o explorar */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/* BOTÓN PRIMARIO - Registro para nuevos usuarios */}
            <button
              onClick={() => navigate("/register")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Crear Cuenta
            </button>

            {/* BOTÓN SECUNDARIO - Para usuarios que ya tienen cuenta */}
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-purple-900 px-12 py-4 rounded-full font-bold text-lg border-2 border-purple-900 hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              Inicia Sesión
            </button>
          </div>

          {/* INDICADOR DE SCROLL - Sugiere contenido debajo (icono animado) */}
          <div className="flex justify-center animate-bounce">
            <div className="text-gray-600 text-3xl">↓</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Register your pet
            </h2>
            <p className="text-lg text-gray-600">
              Make your pet visible on the platform in minutes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <PetRegisterForm
              onSuccess={handlePetRegisterSuccess}
              successMessage={
                auth
                  ? "Pet registered successfully."
                  : "Pet registered successfully. Please log in to continue."
              }
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS - Muestra ventajas principales de la plataforma */}
      <section className="py-20 px-6 bg-white">
        {/* CONTENEDOR PRINCIPAL - Limita ancho y centra contenido */}
        <div className="max-w-6xl mx-auto">
          
          {/* ENCABEZADO DE SECCIÓN - Introduce el contenido de características */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            {/* Subtítulo descriptivo - Contexto breve */}
            <p className="text-xl text-gray-600">
              Pettin ofrece las mejores características para que tu mascota disfrute
            </p>
          </div>

          {/* GRID DE 4 CARACTERÍSTICAS - Sistema responsivo que se adapta a móvil y desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* TARJETA DE CARACTERÍSTICA 1 - Interfaz amigable */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300">
              {/* Icono principal - Corazón con color distintivo */}
              <div className="flex justify-center mb-4">
                <div className="bg-pink-500 text-white p-4 rounded-full">
                  <Heart size={32} />
                </div>
              </div>
              {/* Título de característica - Descripción breve del beneficio */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interfaz Amigable</h3>
              {/* Descripción detallada - Explica qué ofrece esta característica */}
              <p className="text-gray-700">
                Diseño intuitivo que cualquiera puede usar sin dificultad
              </p>
            </div>

            {/* TARJETA DE CARACTERÍSTICA 2 - Comunidad segura */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300">
              {/* Icono principal - Escudo con color distintivo */}
              <div className="flex justify-center mb-4">
                <div className="bg-purple-500 text-white p-4 rounded-full">
                  <Shield size={32} />
                </div>
              </div>
              {/* Título de característica - Seguridad garantizada */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad Segura</h3>
              {/* Descripción detallada - Privacidad y seguridad de datos */}
              <p className="text-gray-700">
                Tus datos y los de tu mascota están protegidos
              </p>
            </div>

            {/* TARJETA DE CARACTERÍSTICA 3 - Matches rápidos */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300">
              {/* Icono principal - Rayo con color distintivo */}
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-500 text-white p-4 rounded-full">
                  <Zap size={32} />
                </div>
              </div>
              {/* Título de característica - Velocidad de matching */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Matches Rápidos</h3>
              {/* Descripción detallada - Algoritmo inteligente */}
              <p className="text-gray-700">
                Encuentra amigos compatibles en segundos
              </p>
            </div>

            {/* TARJETA DE CARACTERÍSTICA 4 - Comunidad global */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300">
              {/* Icono principal - Usuarios con color distintivo */}
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500 text-white p-4 rounded-full">
                  <Users size={32} />
                </div>
              </div>
              {/* Título de característica - Comunidad grande */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad Global</h3>
              {/* Descripción detallada - Alcance internacional */}
              <p className="text-gray-700">
                Únete a miles de mascotas en todo el mundo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE LLAMADO SECUNDARIO - Refuerza la invitación a unirse */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 to-indigo-900">
        {/* CONTENEDOR CENTRADO - Limita ancho y centra el contenido */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* TÍTULO SECUNDARIO - Refuerza el valor de la plataforma */}
          <h2 className="text-5xl font-extrabold text-white mb-6">
            ¿Listo para conectar?
          </h2>

          {/* DESCRIPCIÓN FINAL - Último impulso antes de CTA final */}
          <p className="text-xl text-purple-100 mb-10">
            No esperes más. Tu mascota está esperando encontrar a su mejor amigo.
          </p>

          {/* BOTÓN CTA FINAL - Llamada a la acción final con diseño destacado */}
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-14 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Comenzar Ahora 🚀
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">¿Necesitas ayuda?</h2>
            <p className="text-white/90 text-lg">Nuestro equipo responde rapido a tus dudas.</p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contactar ahora
          </button>
        </div>
      </section>

      {/* COMPONENTE FOOTER - Pie de página con links y redes sociales */}
      <Footer />
    </div>
  );
}

export default Home;
