import { useState } from "react";
import { X, Heart, PawPrint } from "lucide-react";

function SwipeCard({ pet, onSwipe }) {
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (e) => {
    setIsDragging(true);

    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;

    setStartX(clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;

    const currentX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;

    setMoveX(currentX - startX);
  };

  const handleEnd = () => {
    setIsDragging(false);

    if (moveX > 120) {
      onSwipe("like", pet);
    } else if (moveX < -120) {
      onSwipe("nope", pet);
    }

    setTimeout(() => {
      setMoveX(0);
    }, 50);
  };

  return (
    <div
      className="absolute w-full max-w-[420px] bg-white rounded-[36px] shadow-2xl shadow-black/10 overflow-hidden cursor-grab active:cursor-grabbing select-none border border-gray-100"
      style={{
        transform: `translateX(${moveX}px) rotate(${moveX * 0.08}deg)`,
        transition: isDragging ? "none" : "transform 0.3s ease",
      }}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
    >
   
      <div className="relative">
        <img
          src={pet.image || "/default.jpg"}
          alt={pet.name}
          className="w-full h-[500px] object-cover"
        />


        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="text-3xl font-bold drop-shadow-lg">
            {pet.name}, {pet.age}
          </h2>
        </div>

   
        {moveX > 80 && (
          <div className="absolute top-10 left-10 border-4 border-green-400 text-green-400 px-5 py-2 rounded-xl text-4xl font-extrabold rotate-[-20deg] bg-white/10 backdrop-blur-sm">
            LIKE
          </div>
        )}


        {moveX < -80 && (
          <div className="absolute top-10 right-10 border-4 border-red-400 text-red-400 px-5 py-2 rounded-xl text-4xl font-extrabold rotate-[20deg] bg-white/10 backdrop-blur-sm">
            NOPE
          </div>
        )}
      </div>


      <div className="p-5">
        <p className="text-gray-600 leading-relaxed">{pet.description}</p>
      </div>


      <div className="flex justify-center gap-6 pb-6">
        <button
          onClick={() => onSwipe("nope", pet)}
          className="w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
        >
          <X className="text-red-500" />
        </button>

        <button
          onClick={() => onSwipe("super", pet)}
          className="w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300"
        >
          <PawPrint className="text-amber-500" />
        </button>

        <button
          onClick={() => onSwipe("like", pet)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-purple-300 transition-all duration-300"
        >
          <Heart className="text-white fill-white" />
        </button>
      </div>
    </div>
  );
}

export default SwipeCard;
