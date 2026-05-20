import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PawPrint, ArrowLeft } from "lucide-react";

function RegisterPet() {
  const navigate = useNavigate();

  // ESTADO DEL FORMULARIO
  const [form, setForm] = useState({
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    petBio: "",
  });

  // ESTADO DE ERRORES
  const [errors, setErrors] = useState({});

  // MANEJAR CAMBIOS
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDACIONES DINÁMICAS
  const validate = () => {
    let newErrors = {};

    // Nombre
    if (form.petName.trim().length < 3) {
      newErrors.petName =
        "El nombre debe tener mínimo 3 caracteres";
    }

    // Tipo
    if (!form.petType) {
      newErrors.petType = "Selecciona un tipo";
    }

    // Raza
    if (form.petBreed.trim().length < 3) {
      newErrors.petBreed =
        "La raza debe tener mínimo 3 caracteres";
    }

    // Edad
    if (form.petAge <= 0) {
      newErrors.petAge =
        "La edad debe ser mayor a 0";
    }

    // Biografía
    if (form.petBio.length > 200) {
      newErrors.petBio =
        "Máximo 200 caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ENVIAR FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDAR
    if (!validate()) return;

    // GUARDAR EN LOCALSTORAGE
    localStorage.setItem(
      "pettin_pet",
      JSON.stringify(form)
    );

    alert("¡Mascota registrada exitosamente! 🐾");

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

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full text-white">
              <PawPrint size={40} />
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900">
            Registrar Mascota
          </h1>

          <p className="text-gray-600 mt-2">
            Completa la información de tu mascota
          </p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NOMBRE */}
          <div>
            <label className="font-semibold text-gray-700">
              Nombre de la mascota
            </label>

            <input
              type="text"
              name="petName"
              value={form.petName}
              onChange={handleChange}
              placeholder="Ejemplo: Luna"
              className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
            />

            {errors.petName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.petName}
              </p>
            )}
          </div>

          {/* TIPO */}
          <div>
            <label className="font-semibold text-gray-700">
              Tipo de mascota
            </label>

            <select
              name="petType"
              value={form.petType}
              onChange={handleChange}
              className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
            >
              <option value="">Selecciona</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Ave">Ave</option>
            </select>

            {errors.petType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.petType}
              </p>
            )}
          </div>

          {/* RAZA */}
          <div>
            <label className="font-semibold text-gray-700">
              Raza
            </label>

            <input
              type="text"
              name="petBreed"
              value={form.petBreed}
              onChange={handleChange}
              placeholder="Golden Retriever"
              className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
            />

            {errors.petBreed && (
              <p className="text-red-500 text-sm mt-1">
                {errors.petBreed}
              </p>
            )}
          </div>

          {/* EDAD */}
          <div>
            <label className="font-semibold text-gray-700">
              Edad
            </label>

            <input
              type="number"
              name="petAge"
              value={form.petAge}
              onChange={handleChange}
              placeholder="3"
              className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
            />

            {errors.petAge && (
              <p className="text-red-500 text-sm mt-1">
                {errors.petAge}
              </p>
            )}
          </div>

          {/* BIO */}
          <div>
            <label className="font-semibold text-gray-700">
              Biografía
            </label>

            <textarea
              name="petBio"
              value={form.petBio}
              onChange={handleChange}
              rows={4}
              maxLength={200}
              placeholder="Cuéntanos sobre tu mascota..."
              className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-500"
            />

            <div className="flex justify-between mt-1">
              {errors.petBio ? (
                <p className="text-red-500 text-sm">
                  {errors.petBio}
                </p>
              ) : (
                <span></span>
              )}

              <p className="text-gray-400 text-sm">
                {form.petBio.length}/200
              </p>
            </div>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition"
          >
            Registrar Mascota
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPet;