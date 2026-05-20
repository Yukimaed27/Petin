import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import SwipeCard from "../components/Swipecard";
import { loadPets, saveMatch } from "../services/api";

/**
 * PÁGINA EXPLORE
 * 
 * Componente principal donde los usuarios pueden explorar mascotas disponibles.
 * Utiliza useEffect para cargar datos desde el JSON al montar el componente.
 * Implementa lógica de swipe con persistencia de matches.
 * 
 * CARACTERÍSTICAS:
 * - Carga dinámica de mascotas desde pets.json
 * - SwipeCard interactivo con drag & drop
 * - Guardar matches en localStorage
 * - Manejo de errores y estados de carga
 */
function Explore() {
  // ESTADO DE MASCOTAS - Almacena la lista de mascotas a explorar
  const [pets, setPets] = useState([]);
  
  // ESTADO DE CARGA - Indica si se están trayendo datos
  const [loading, setLoading] = useState(true);
  
  // ESTADO DE ERROR - Almacena mensajes de error
  const [error, setError] = useState(null);

  /**
   * EFECTO DE CARGA - Se ejecuta una sola vez al montar el componente
   * 
   * useEffect con dependencias vacías [] garantiza que solo se ejecute una vez.
   * Simula la llamada a una API para obtener mascotas.
   * Maneja estados de carga y error apropiadamente.
   */
  useEffect(() => {
    // Función asincrónica para cargar datos
    const fetchPets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Llamada al servicio que obtiene mascotas del JSON
        const petsData = await loadPets();
        
        // Actualiza el estado con los datos cargados
        setPets(petsData);
      } catch (err) {
        // Si hay error, lo almacena en el estado
        setError(err.message);
        
        // Fallback: usa datos de prueba si falla la carga
        setPets([
          {
            id: 1,
            name: "Luna",
            age: 2,
            distance: "2 km de distancia",
            match: "95%",
            image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
            description: "Perrita amigable y juguetona que ama caminar y recibir cariño.",
          },
        ]);
      } finally {
        // Finaliza el estado de carga independientemente del resultado
        setLoading(false);
      }
    };

    // Ejecuta la función de carga
    fetchPets();
  }, []); // Dependencias vacías: solo se ejecuta al montar

  /**
   * MANEJADOR DE SWIPE - Se ejecuta cuando el usuario hace swipe
   * 
   * @param {string} action - Tipo de swipe (like, nope, super)
   * @param {object} pet - Objeto mascota sobre la que se hizo swipe
   */
  const handleSwipe = async (action, pet) => {
    try {
      // Guarda el match en localStorage mediante el servicio
      await saveMatch(pet, action);
      
      // Remueve la mascota de la lista de exploración
      setPets((prevPets) => prevPets.filter((item) => item.id !== pet.id));
    } catch (err) {
      console.error("Error al guardar match:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 px-6 py-10">
      {/* TITULO */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Encuentra tu Match 🐾
        </h1>

        <p className="text-gray-600 text-lg">
          Descubre nuevas mascotas cerca de ti
        </p>
      </div>

      {/* INDICADOR DE CARGA - Se muestra mientras se cargan datos */}
      {loading && (
        <div className="flex justify-center items-center mb-20 min-h-[650px]">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-700">
              Buscando mascotas... 🐶
            </h2>
            <p className="text-gray-500 mt-2">Por favor espera mientras cargamos datos</p>
          </div>
        </div>
      )}

      {/* INDICADOR DE ERROR - Se muestra si hay problema cargando datos */}
      {error && !loading && (
        <div className="flex justify-center items-center mb-20 min-h-[650px]">
          <div className="bg-red-50 border-2 border-red-300 p-10 rounded-3xl shadow-xl text-center max-w-md">
            <h2 className="text-2xl font-bold text-red-700 mb-3">⚠️ Error</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-red-500 text-sm">Mostrando datos de prueba. Intenta recargar la página.</p>
          </div>
        </div>
      )}

      {/* SWIPE CARD - Se muestra cuando hay datos y no está cargando */}
      {!loading && (
        <div className="flex justify-center items-center mb-20 min-h-[650px] relative">
          {pets.length > 0 ? (
            <SwipeCard pet={pets[0]} onSwipe={handleSwipe} />
          ) : (
            <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
              <h2 className="text-3xl font-bold text-gray-700 mb-3">
                No hay más mascotas 🐶
              </h2>

              <p className="text-gray-500">
                Vuelve más tarde para descubrir nuevos amigos.
              </p>
            </div>
          )}
        </div>
      )}

      {/* CARDS NORMALES */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Mascotas destacadas
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {pets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
