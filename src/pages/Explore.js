import React, { useState } from "react";

import Card from "../components/Card";
import SwipeCard from "../components/Swipecard";

function Explore() {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Luna",
      age: 2,
      distance: "2 km de distancia",
      match: "95%",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      description:
        "Perrita amigable y juguetona que ama caminar y recibir cariño.",
    },

    {
      id: 2,
      name: "Max",
      age: 3,
      distance: "4 km de distancia",
      match: "90%",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
      description: "Perro energético que disfruta aventuras al aire libre.",
    },

    {
      id: 3,
      name: "Bella",
      age: 1,
      distance: "1 km de distancia",
      match: "98%",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
      description: "Cachorrita tierna que ama la atención y los premios.",
    },
  ]);

  const handleSwipe = (action, pet) => {
    console.log(action, pet.name);

    setPets((prevPets) => prevPets.filter((item) => item.id !== pet.id));
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

      {/* SWIPE CARD */}
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
