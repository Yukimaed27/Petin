import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

/**
 * PÁGINA 404 PERSONALIZADA
 * 
 * Componente que se muestra cuando el usuario intenta acceder a una ruta que no existe.
 * Proporciona una experiencia visual atractiva y opciones de navegación clara.
 * 
 * CARACTERÍSTICAS:
 * - Diseño visualmente consistente con el tema de Pettin
 * - Animación suave del icono de error
 * - Botones de navegación intuitivos
 * - Responsive en mobile y desktop
 * - Mensajes claros y amigables
 */
function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center px-6">
      {/* CONTENEDOR PRINCIPAL - Centra contenido y limita ancho */}
      <div className="max-w-2xl w-full text-center">
        
        {/* ICONO DE ERROR ANIMADO - Captura atención con animación suave */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="bg-red-100 rounded-full p-8">
            <AlertCircle size={80} className="text-red-600" />
          </div>
        </div>

        {/* CÓDIGO DE ERROR GRANDE - Identifica el tipo de error */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
          404
        </h1>

        {/* TÍTULO DESCRIPTIVO - Explica el problema de forma clara */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Página No Encontrada
        </h2>

        {/* DESCRIPCIÓN AMIGABLE - Mensaje motivador y empático */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Parece que tu mascota se perdió en el camino 🐾
          <br />
          La página que buscas no existe o ha sido movida.
        </p>

        {/* SUGERENCIAS - Ayuda al usuario a entender qué pasó */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 mb-8 border border-purple-200">
          <p className="text-gray-600 mb-4 font-medium">
            Cosas que puedes intentar:
          </p>
          <ul className="text-left text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">→</span>
              Verifica que la URL sea correcta
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">→</span>
              Usa el navegador o los botones abajo para volver
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">→</span>
              Contacta con soporte si el problema persiste
            </li>
          </ul>
        </div>

        {/* BOTONES DE NAVEGACIÓN - Opciones claras para el usuario */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* BOTÓN VOLVER ATRÁS - Navega a la página anterior */}
          <button
            onClick={() => navigate(-1)}
            className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={24} />
            Ir Atrás
          </button>

          {/* BOTÓN HOME - Navega a la página principal */}
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home size={24} />
            Ir al Inicio
          </button>
        </div>

        {/* FOOTER DECORATIVO - Elemento visual adicional */}
        <div className="mt-12">
          <p className="text-gray-600 text-sm mb-4">
            Mascotas disponibles en Pettin: 🐶 🐱 🐹 🐰 🦎
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
