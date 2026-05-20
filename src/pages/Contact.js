import React, { useState } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Nombre minimo 3 caracteres";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Correo invalido";
    }

    if (!form.topic) {
      newErrors.topic = "Selecciona un tema";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Mensaje minimo 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const payload = {
      ...form,
      createdAt: new Date().toISOString(),
    };

    const messages = JSON.parse(localStorage.getItem("pettin_contact")) || [];
    messages.push(payload);
    localStorage.setItem("pettin_contact", JSON.stringify(messages));

    setSent(true);
    setForm({ name: "", email: "", topic: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Contacto</h1>
          <p className="text-gray-600 mt-3">Estamos listos para ayudarte a conectar mascotas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex items-center gap-3 text-purple-700 font-semibold">
                <Mail size={20} />
                hola@pettin.com
              </div>
              <div className="flex items-center gap-3 text-gray-600 mt-4">
                <Phone size={20} />
                +51 999 888 777
              </div>
              <div className="flex items-center gap-3 text-gray-600 mt-4">
                <MapPin size={20} />
                Lima, Peru
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">Horarios</h2>
              <p className="text-gray-600 text-sm">Lunes a Sabado: 9:00 - 18:00</p>
              <p className="text-gray-600 text-sm">Domingo: Cerrado</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envianos un mensaje</h2>

            {sent && (
              <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
                Mensaje enviado correctamente. Te responderemos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-gray-700">Nombre</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-semibold text-gray-700">Correo</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700">Tema</label>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                >
                  <option value="">Selecciona</option>
                  <option value="Soporte">Soporte</option>
                  <option value="Alianzas">Alianzas</option>
                  <option value="Prensa">Prensa</option>
                  <option value="Otros">Otros</option>
                </select>
                {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic}</p>}
              </div>

              <div>
                <label className="font-semibold text-gray-700">Mensaje</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full mt-2 p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
                  placeholder="Cuentanos en que podemos ayudarte..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
