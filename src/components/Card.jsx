// src/components/Card.jsx

import { X, PawPrint, Heart, Star, MapPin } from "lucide-react";

function Card({ pet }) {
  return (
    <div className="w-full max-w-[470px] bg-white rounded-[36px] shadow-2xl shadow-black/10 overflow-hidden border border-gray-100">

      <div className="relative">

        <img
          src={pet.image || "/default.jpg"}
          alt={pet.name}
          className="w-full h-[520px] object-cover"
        />

        {/* Distance */}
        <div className="absolute top-5 left-5">
          <div className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-white/50 text-sm font-medium text-gray-700 flex items-center gap-2">
            <MapPin size={16} className="text-purple-500" />
            {pet.distance}
          </div>
        </div>

        {/* Match */}
        <div className="absolute top-5 right-5">
          <div className="bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-medium flex items-center gap-2">
            <Star size={16} className="text-yellow-300 fill-yellow-300" />
            {pet.match}
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-6 left-6 text-white">

          <h2 className="text-3xl font-bold drop-shadow-lg">
            {pet.name}, {pet.age}
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">

            <span className="text-xs px-3 py-1 rounded-full bg-black/30 backdrop-blur-md">
              Playful
            </span>

            <span className="text-xs px-3 py-1 rounded-full bg-black/30 backdrop-blur-md">
              Friendly
            </span>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">
          {pet.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 pb-8">

        <button className="w-16 h-16 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300">
          <X size={28} className="text-red-500" />
        </button>

        <button className="w-16 h-16 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300">
          <PawPrint size={28} className="text-amber-500" />
        </button>

        <button className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-purple-300 transition-all duration-300">
          <Heart size={28} className="text-white fill-white" />
        </button>

      </div>

    </div>
  );
}

export default Card;