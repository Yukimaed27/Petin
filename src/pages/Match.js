import React, { useState } from "react";
import { Heart, MessageCircle, X, MapPin } from "lucide-react";
import Footer from "../components/Footer";

function Match() {
  // ESTADO DE MATCHES - Almacena datos de mascotas con las que se hizo match
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: "Rocky",
      species: "Perro",
      breed: "Golden Retriever",
      age: 3,
      image: "https://images.unsplash.com/photo-1633722715463-d30628519cfa?auto=format&fit=crop&q=80",
      distance: "2 km",
      matchDate: "Hace 2 días",
      owner: "Carlos M.",
    },
    {
      id: 2,
      name: "Miso",
      species: "Gato",
      breed: "Persa",
      age: 2,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80",
      distance: "1.5 km",
      matchDate: "Hace 1 día",
      owner: "Ana L.",
    },
    {
      id: 3,
      name: "Buddy",
      species: "Perro",
      breed: "Labrador",
      age: 4,
      image: "https://images.unsplash.com/photo-1633722715463-d30628519cfa?auto=format&fit=crop&q=80",
      distance: "3 km",
      matchDate: "Hace 5 días",
      owner: "Juan P.",
    },
  ]);

  // FUNCIÓN PARA ELIMINAR UN MATCH - Remueve un match de la lista local
  const handleRemoveMatch = (id) => {
    setMatches(matches.filter((match) => match.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12">
      {/* CONTENEDOR PRINCIPAL - Limita ancho máximo y aplica padding */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO DE PÁGINA - Introduce la sección de matches */}
        <div className="text-center mb-16">
          {/* ICONO PRINCIPAL - Corazón prominente */}
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-4 rounded-full">
              <Heart size={40} fill="white" />
            </div>
          </div>

          {/* TÍTULO PRINCIPAL - Grande y atractivo */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Mis Matches ❤️
          </h1>

          {/* DESCRIPCIÓN - Contexto de la página */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aquí están todas las mascotas con las que tu compañero ha hecho match. ¡Qué emoción!
          </p>

          {/* CONTADOR DE MATCHES - Muestra total de conexiones */}
          <div className="mt-6 inline-block bg-white px-6 py-3 rounded-full shadow-md">
            <p className="text-lg font-bold text-purple-900">
              {matches.length} Match{matches.length !== 1 ? "es" : ""} Activos
            </p>
          </div>
        </div>

        {/* VERIFICACIÓN DE MATCHES - Muestra mensaje si no hay matches */}
        {matches.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            {/* ICONO DE ESTADO VACÍO - Comunica que no hay matches */}
            <div className="flex justify-center mb-4">
              <div className="text-6xl">😢</div>
            </div>
            {/* TÍTULO - Explica la situación */}
            <h2 className="text-3xl font-bold text-gray-700 mb-3">
              Aún no hay matches
            </h2>
            {/* DESCRIPCIÓN - Invita a explorar */}
            <p className="text-gray-500 text-lg">
              Comienza a explorar y desliza para encontrar nuevos amigos para tu mascota.
            </p>
          </div>
        ) : (
          /* GRID DE TARJETAS DE MATCHES - Muestra todas las conexiones en formato grid responsivo */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matches.map((match) => (
              /* TARJETA INDIVIDUAL DE MATCH - Contenedor principal para cada conexión */
              <div
                key={match.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* CONTENEDOR DE IMAGEN - Área visual principal con superposiciones */}
                <div className="relative h-80 overflow-hidden">
                  {/* IMAGEN DE MASCOTA - Fondo visual atractivo */}
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY GRADIENTE - Crea efecto de profundidad en la esquina inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* BADGE DE DISTANCIA - Ubicación de la mascota en esquina superior */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                    <MapPin size={16} className="text-purple-600" />
                    <span className="font-bold text-gray-800">{match.distance}</span>
                  </div>

                  {/* BADGE DE SPECIES - Tipo de mascota en esquina superior derecha */}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    {match.species}
                  </div>

                  {/* INFORMACIÓN EN OVERLAY - Nombre y detalles sobre la imagen */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-3xl font-bold drop-shadow-lg">{match.name}</h3>
                    <p className="text-sm drop-shadow-lg mt-1">{match.breed} • {match.age} años</p>
                  </div>
                </div>

                {/* CONTENIDO DE LA TARJETA - Información textual y acciones */}
                <div className="p-6">
                  {/* INFORMACIÓN DEL DUEÑO - Nombre y fecha de match */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Dueño</p>
                    <h4 className="font-bold text-gray-900 mb-3">{match.owner}</h4>
                    <p className="text-xs text-gray-500 flex items-center">
                      💕 Match hace {match.matchDate.toLowerCase()}
                    </p>
                  </div>

                  {/* BOTONES DE ACCIÓN - Interacciones con el match */}
                  <div className="flex gap-3">
                    {/* BOTÓN MENSAJE - Simula enviar mensaje al dueño */}
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold hover:shadow-lg transition duration-300 flex items-center justify-center gap-2">
                      <MessageCircle size={20} />
                      Mensaje
                    </button>

                    {/* BOTÓN ELIMINAR MATCH - Remueve la conexión de la lista */}
                    <button
                      onClick={() => handleRemoveMatch(match.id)}
                      className="flex-1 bg-gray-200 hover:bg-red-200 text-gray-700 hover:text-red-700 py-3 rounded-full font-bold transition duration-300 flex items-center justify-center"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SECCIÓN INFORMATIVA - Consejos o información adicional */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* CONTENEDOR DE TIPS - Estructura las recomendaciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TIP 1 - Qué son los matches */}
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">¿Qué es un Match?</h3>
              <p className="text-gray-600 text-sm">
                Es cuando dos mascotas se gustan mutuamente. ¡Una conexión perfecta!
              </p>
            </div>

            {/* TIP 2 - Próximos pasos */}
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Contacta al Dueño</h3>
              <p className="text-gray-600 text-sm">
                Usa los botones de mensaje para coordinar encuentros seguros.
              </p>
            </div>

            {/* TIP 3 - Seguridad */}
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Seguridad Primero</h3>
              <p className="text-gray-600 text-sm">
                Siempre verifica la identidad y elige lugares públicos para el primer encuentro.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPONENTE FOOTER - Pie de página con links y redes sociales */}
      <Footer />
    </div>
  );
}

export default Match;
