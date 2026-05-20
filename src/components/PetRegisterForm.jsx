import React, { useState } from "react";
import { PawPrint } from "lucide-react";

function PetRegisterForm({ onSuccess, successMessage = "Pet registered successfully.", showHeader = true }) {
  const [form, setForm] = useState({
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    petBio: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (form.petName.trim().length < 3) {
      newErrors.petName = "Name must be at least 3 characters";
    }

    if (!form.petType) {
      newErrors.petType = "Select a type";
    }

    if (form.petBreed.trim().length < 3) {
      newErrors.petBreed = "Breed must be at least 3 characters";
    }

    if (Number(form.petAge) <= 0) {
      newErrors.petAge = "Age must be greater than 0";
    }

    if (form.petBio.length > 200) {
      newErrors.petBio = "Max 200 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem("pettin_pet", JSON.stringify(form));
    setSubmitted(true);

    if (onSuccess) {
      onSuccess(form);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 w-full">
      {showHeader && (
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full text-white">
              <PawPrint size={40} />
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900">Register Pet</h2>

          <p className="text-gray-600 mt-2">Complete your pet information</p>
        </div>
      )}

      {submitted && (
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="font-semibold text-gray-700">Pet name</label>

          <input
            type="text"
            name="petName"
            value={form.petName}
            onChange={handleChange}
            placeholder="Example: Luna"
            className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
          />

          {errors.petName && (
            <p className="text-red-500 text-sm mt-1">{errors.petName}</p>
          )}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Pet type</label>

          <select
            name="petType"
            value={form.petType}
            onChange={handleChange}
            className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
          >
            <option value="">Select</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
          </select>

          {errors.petType && (
            <p className="text-red-500 text-sm mt-1">{errors.petType}</p>
          )}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Breed</label>

          <input
            type="text"
            name="petBreed"
            value={form.petBreed}
            onChange={handleChange}
            placeholder="Golden Retriever"
            className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
          />

          {errors.petBreed && (
            <p className="text-red-500 text-sm mt-1">{errors.petBreed}</p>
          )}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Age</label>

          <input
            type="number"
            name="petAge"
            value={form.petAge}
            onChange={handleChange}
            placeholder="3"
            className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
          />

          {errors.petAge && (
            <p className="text-red-500 text-sm mt-1">{errors.petAge}</p>
          )}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Bio</label>

          <textarea
            name="petBio"
            value={form.petBio}
            onChange={handleChange}
            rows={4}
            maxLength={200}
            placeholder="Tell us about your pet..."
            className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-500"
          />

          <div className="flex justify-between mt-1">
            {errors.petBio ? (
              <p className="text-red-500 text-sm">{errors.petBio}</p>
            ) : (
              <span></span>
            )}

            <p className="text-gray-400 text-sm">{form.petBio.length}/200</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition"
        >
          Register Pet
        </button>
      </form>
    </div>
  );
}

export default PetRegisterForm;
