import React, { useState } from "react";
import { User, Edit2, Check, X, Camera } from "lucide-react";
import Footer from "../components/Footer";

function Profile() {
  // ESTADO DE EDICIÓN - Controla si el usuario está editando su perfil
  const [isEditing, setIsEditing] = useState(false);

  // ESTADO DEL FORMULARIO - Almacena información del usuario y su mascota
  const [formData, setFormData] = useState({
    ownerName: "Carlos Rodríguez",
    ownerEmail: "carlos@example.com",
    petName: "Luna",
    petSpecies: "Perro",
    petBreed: "Golden Retriever",
    petAge: 3,
    petBio: "Luna es una perrita amigable que adora jugar en el parque y hacer nuevos amigos. Disfruta de los paseos largos y es muy cariñosa con todos.",
  });

  // ESTADO DE CAMBIOS - Almacena los datos mientras se editan
  const [editData, setEditData] = useState(formData);

  // FUNCIÓN PARA INICIAR EDICIÓN - Prepara el formulario para editar
  const handleEdit = () => {
    setEditData(formData); // Copia datos actuales
    setIsEditing(true); // Activa modo edición
  };

  // FUNCIÓN PARA GUARDAR CAMBIOS - Valida y persiste los datos editados
  const handleSave = () => {
    // Validación simple - Verifica que los campos obligatorios estén completos
    if (
      editData.ownerName &&
      editData.petName &&
      editData.petBreed &&
      editData.petAge
    ) {
      setFormData(editData); // Actualiza datos principales
      setIsEditing(false); // Desactiva modo edición
      alert("¡Perfil actualizado correctamente!"); // Feedback visual
    } else {
      alert("Por favor, completa todos los campos obligatorios");
    }
  };

  // FUNCIÓN PARA CANCELAR EDICIÓN - Descarta cambios sin guardar
  const handleCancel = () => {
    setEditData(formData); // Restaura datos originales
    setIsEditing(false); // Desactiva modo edición
  };

  // FUNCIÓN PARA ACTUALIZAR CAMPOS - Sincroniza cambios en tiempo real
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value, // Actualiza solo el campo modificado
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12">
      {/* CONTENEDOR PRINCIPAL - Limita ancho máximo y aplica padding */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* ENCABEZADO DE PÁGINA - Introduce la sección de perfil */}
        <div className="text-center mb-12">
          {/* ICONO PRINCIPAL - Usuario prominente */}
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-full">
              <User size={40} />
            </div>
          </div>

          {/* TÍTULO PRINCIPAL - Grande y atractivo */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Mi Perfil
          </h1>

          {/* DESCRIPCIÓN - Contexto de la página */}
          <p className="text-xl text-gray-600">
            Edita la información de tu perfil y de tu mascota
          </p>
        </div>

        {/* CONTENEDOR PRINCIPAL DE TARJETAS - Layout flexible para perfil del usuario y mascota */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* SECCIÓN DE FOTO Y BOTÓN EDITAR - Tarjeta lateral con acciones principales */}
          <div className="lg:col-span-1">
            {/* TARJETA DE FOTO DE PERFIL - Contenedor visual principal */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* ÁREA DE FOTO - Espacio para imagen de perfil */}
              <div className="relative h-64 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                {/* ICONO O IMAGEN DE PERFIL - Placeholder visual */}
                <div className="text-6xl">🐾</div>

                {/* BOTÓN DE CARGAR FOTO - Permite cambiar foto de perfil */}
                <button className="absolute bottom-4 right-4 bg-white text-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300">
                  <Camera size={24} />
                </button>
              </div>

              {/* CONTENIDO DE LA TARJETA - Información resumida */}
              <div className="p-6">
                {/* NOMBRE DEL DUEÑO - Información principal */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {formData.ownerName}
                </h2>

                {/* EMAIL - Información de contacto */}
                <p className="text-gray-600 text-sm mb-6">{formData.ownerEmail}</p>

                {/* ESTADO DE EDICIÓN - Muestra botones según el modo */}
                {!isEditing ? (
                  /* BOTÓN EDITAR - Activa el modo de edición */
                  <button
                    onClick={handleEdit}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-bold hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    <Edit2 size={20} />
                    Editar Perfil
                  </button>
                ) : (
                  /* BOTONES DE GUARDAR/CANCELAR - Acciones durante edición */
                  <div className="space-y-3">
                    {/* BOTÓN GUARDAR - Persiste los cambios */}
                    <button
                      onClick={handleSave}
                      className="w-full bg-green-500 text-white py-3 rounded-full font-bold hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <Check size={20} />
                      Guardar Cambios
                    </button>

                    {/* BOTÓN CANCELAR - Descarta cambios sin guardar */}
                    <button
                      onClick={handleCancel}
                      className="w-full bg-gray-300 text-gray-800 py-3 rounded-full font-bold hover:bg-gray-400 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <X size={20} />
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SECCIÓN DE FORMULARIO - Tarjeta principal con campos editables */}
          <div className="lg:col-span-2">
            {/* TARJETA DE FORMULARIO - Contenedor del formulario completo */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {/* TÍTULO DE SECCIÓN - Introduce el formulario */}
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Información del Perfil</h3>

              {/* FORMULARIO COMPLETO - Estructura de inputs organizados */}
              <form className="space-y-6">
                
                {/* SECCIÓN DE INFORMACIÓN DEL DUEÑO - Agrupa datos del usuario */}
                <div>
                  {/* TÍTULO DE SUBSECCIÓN - Categoriza los campos */}
                  <h4 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-purple-200">
                    Tu Información
                  </h4>

                  {/* CAMPO NOMBRE DUEÑO - Input para nombre del usuario */}
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={isEditing ? editData.ownerName : formData.ownerName}
                      onChange={handleInputChange}
                      disabled={!isEditing} // Solo editable en modo edición
                      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                        isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                      }`}
                    />
                  </div>

                  {/* CAMPO EMAIL - Input para correo electrónico */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="ownerEmail"
                      value={isEditing ? editData.ownerEmail : formData.ownerEmail}
                      onChange={handleInputChange}
                      disabled={!isEditing} // Solo editable en modo edición
                      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                        isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                      }`}
                    />
                  </div>
                </div>

                {/* SECCIÓN DE INFORMACIÓN DE LA MASCOTA - Agrupa datos del animal */}
                <div>
                  {/* TÍTULO DE SUBSECCIÓN - Categoriza los campos de mascota */}
                  <h4 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-pink-200">
                    Información de tu Mascota
                  </h4>

                  {/* CAMPO NOMBRE MASCOTA - Input para nombre del animal */}
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nombre de la Mascota
                    </label>
                    <input
                      type="text"
                      name="petName"
                      value={isEditing ? editData.petName : formData.petName}
                      onChange={handleInputChange}
                      disabled={!isEditing} // Solo editable en modo edición
                      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                        isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                      }`}
                    />
                  </div>

                  {/* GRID DE DOS COLUMNAS - Agrupa campos de species y breed */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* CAMPO ESPECIE - Tipo de animal */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Especie
                      </label>
                      <input
                        type="text"
                        name="petSpecies"
                        value={isEditing ? editData.petSpecies : formData.petSpecies}
                        onChange={handleInputChange}
                        disabled={!isEditing} // Solo editable en modo edición
                        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                          isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                        }`}
                      />
                    </div>

                    {/* CAMPO EDAD - Número de años */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Edad (años)
                      </label>
                      <input
                        type="number"
                        name="petAge"
                        value={isEditing ? editData.petAge : formData.petAge}
                        onChange={handleInputChange}
                        disabled={!isEditing} // Solo editable en modo edición
                        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                          isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                        }`}
                      />
                    </div>
                  </div>

                  {/* CAMPO RAZA - Línea completa para raza del animal */}
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Raza
                    </label>
                    <input
                      type="text"
                      name="petBreed"
                      value={isEditing ? editData.petBreed : formData.petBreed}
                      onChange={handleInputChange}
                      disabled={!isEditing} // Solo editable en modo edición
                      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition ${
                        isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                      }`}
                    />
                  </div>

                  {/* CAMPO BIOGRAFÍA - Textarea para descripción largo de la mascota */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Biografía (máx. 200 caracteres)
                    </label>
                    <textarea
                      name="petBio"
                      value={isEditing ? editData.petBio : formData.petBio}
                      onChange={handleInputChange}
                      disabled={!isEditing} // Solo editable en modo edición
                      maxLength={200} // Limita caracteres
                      rows={4} // Altura de textarea
                      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition resize-none ${
                        isEditing ? "bg-white cursor-text" : "bg-gray-50 cursor-not-allowed"
                      }`}
                      placeholder="Cuéntanos sobre tu mascota..."
                    />
                    {/* CONTADOR DE CARACTERES - Muestra caracteres usados vs máximo */}
                    <p className="text-xs text-gray-500 mt-1">
                      {isEditing ? editData.petBio.length : formData.petBio.length}/200 caracteres
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE ESTADÍSTICAS - Muestra resumen de actividad del usuario */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* TARJETA ESTADÍSTICA 1 - Número de matches */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            {/* NÚMERO GRANDE - Estadística principal */}
            <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
            {/* ETIQUETA - Descripción de la estadística */}
            <p className="text-gray-600 font-semibold">Matches Totales</p>
            {/* DESCRIPCIÓN - Contexto adicional */}
            <p className="text-gray-500 text-sm mt-1">¡Tu mascota es popular!</p>
          </div>

          {/* TARJETA ESTADÍSTICA 2 - Días en la plataforma */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            {/* NÚMERO GRANDE - Estadística principal */}
            <div className="text-4xl font-bold text-pink-600 mb-2">45</div>
            {/* ETIQUETA - Descripción de la estadística */}
            <p className="text-gray-600 font-semibold">Días en Pettin</p>
            {/* DESCRIPCIÓN - Contexto adicional */}
            <p className="text-gray-500 text-sm mt-1">¡Sigue explorando!</p>
          </div>

          {/* TARJETA ESTADÍSTICA 3 - Mensajes enviados */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            {/* NÚMERO GRANDE - Estadística principal */}
            <div className="text-4xl font-bold text-indigo-600 mb-2">8</div>
            {/* ETIQUETA - Descripción de la estadística */}
            <p className="text-gray-600 font-semibold">Conversaciones</p>
            {/* DESCRIPCIÓN - Contexto adicional */}
            <p className="text-gray-500 text-sm mt-1">Amistades en construcción</p>
          </div>
        </div>
      </div>

      {/* COMPONENTE FOOTER - Pie de página con links y redes sociales */}
      <Footer />
    </div>
  );
}

export default Profile;
