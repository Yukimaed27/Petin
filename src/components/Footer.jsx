import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white mt-20 shadow-inner shadow-gray-200">
      {/* CONTENEDOR PRINCIPAL - Fondo oscuro con padding generoso para separación visual */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* GRID DE TRES COLUMNAS RESPONSIVO - Distribuye el contenido en 3 columnas en desktop y 1 en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMNA 1: MARCA Y DESCRIPCIÓN - Presenta la identidad visual de Pettin con logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo con fondo púrpura personalizado - Mantiene coherencia con branding principal */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-lg">
                🐾
              </div>
              {/* Texto del logo - Fuerte y visible */}
              <h3 className="font-bold text-2xl">Pettin</h3>
            </div>
            {/* Descripción breve - Explica la misión de la app */}
            <p className="text-gray-400 leading-relaxed text-sm">
              Conectando mascotas y sus humanos en una comunidad segura y divertida. Encuentra amigos para tu compañero peludo.
            </p>
          </div>

          {/* COLUMNA 2: ENLACES DE NAVEGACIÓN - Links internos para facilitar acceso rápido a secciones clave */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navegación</h4>
            {/* Lista vertical de botones simulados que naveguen a diferentes secciones */}
            <ul className="space-y-3">
              {/* Botón Inicio - Lleva a home */}
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                >
                  Inicio
                </button>
              </li>
              {/* Botón Explorar - Acceso directo a mascotas */}
              <li>
                <button
                  onClick={() => navigate("/explore")}
                  className="text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                >
                  Explorar
                </button>
              </li>
              {/* Botón Perfil - Acceso a datos del usuario */}
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                >
                  Mi Perfil
                </button>
              </li>
              {/* Botón Matches - Ver conexiones realizadas */}
              <li>
                <button
                  onClick={() => navigate("/match")}
                  className="text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                >
                  Mis Matches
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-400 hover:text-purple-400 transition duration-300 text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: REDES SOCIALES Y CONTACTO - Mantiene la presencia en redes sociales */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            {/* Contenedor flex para iconos - Distribuye los botones de redes horizontalmente */}
            <div className="flex gap-4 mb-6">
              {/* Botón Facebook - Icono interactivo con efecto hover */}
              <button className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition duration-300">
                <FontAwesomeIcon
                  icon={faFacebook}
                  alt="Facebook"
                  className="w-6 h-5 filter brightness-0 invert"
                />
              </button>
              {/* Botón X (Twitter) - Icono interactivo con efecto hover */}
              <button className="bg-gray-800 hover:bg-black p-3 rounded-full transition duration-300">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  alt="X"
                  className="w-6 h-5 filter brightness-0 invert"
                />
              </button>
              {/* Botón Instagram - Icono interactivo con efecto hover */}
              <button className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition duration-300">
                <FontAwesomeIcon 
                  icon={faInstagram}
                  alt="Instagram"
                  className="w-6 h-5 filter brightness-0 invert"
                />
              </button>
            </div>
            {/* Sección de contacto - Email para soporte */}
            <p className="text-gray-400 text-sm">
              📧 hola@pettin.com
            </p>
          </div>
        </div>

        {/* LÍNEA DIVISORA - Separa el contenido principal del copyright */}
        <div className="border-t border-gray-700 pt-8">
          {/* SECCIÓN DE COPYRIGHT Y ENLACES LEGALES - Información legal centrada */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Texto de derechos de autor - Identifica la propiedad */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Pettin. Todos los derechos reservados.
            </p>
            {/* Enlaces legales - Privacidad y términos */}
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-purple-400 transition duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-purple-400 transition duration-300">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT - Línea decorativa en la parte superior del footer */}
      <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
    </footer>
  );
}

export default React.memo(Footer);
