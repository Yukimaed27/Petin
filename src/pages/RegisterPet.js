import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PetRegisterForm from "../components/PetRegisterForm";

function RegisterPet() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert("Pet registered successfully.");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center px-6 py-10">

      {/* BOTÓN VOLVER */}
      <button
        onClick={() => navigate("/explore")}
        className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ArrowLeft />
      </button>

      <div className="w-full max-w-2xl">
        <PetRegisterForm
          onSuccess={handleSuccess}
          successMessage="Pet registered successfully. Redirecting to profile."
        />
      </div>
    </div>
  );
}

export default RegisterPet;