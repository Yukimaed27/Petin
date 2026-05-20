/**
 * SERVICIO DE AUTENTICACIÓN
 * 
 * Simula login con validación de credenciales y genera token.
 * Demuestra patrón profesional de consumo de API con Promises.
 * 
 * Credenciales válidas:
 * - Email: petin@gmail.com
 * - Password: 123
 * 
 * @param {string} email - Correo del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} Resuelve con token o rechaza con error
 */
export function login(email, password) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      // =========================
      // ADMIN
      // =========================
      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {

        resolve({
          token: `admin-token-${Date.now()}`,
          user: {
            email,
            name: "Administrador",
            role: "admin",
          },
        });

        return;
      }

      // =========================
      // USUARIO REGISTRADO
      // =========================
      const savedUser = JSON.parse(
        localStorage.getItem("pettin_user")
      );

      if (!savedUser) {
        reject(new Error("No existe ningún usuario registrado"));
        return;
      }

      // validar usuario
      if (
        email === savedUser.email &&
        password === savedUser.password
      ) {

        resolve({
          token: `user-token-${Date.now()}`,
          user: {
            ...savedUser,
            role: "user",
          },
        });

      } else {

        reject(new Error("Correo o contraseña incorrectos"));

      }

    }, 1500);
  });
}
/**
 * CARGAR MASCOTAS
 * 
 * Obtiene la lista de mascotas desde el archivo JSON almacenado en public/data/
 * Simula una llamada a API con delay de red.
 * Demuestra uso de fetch para consumo de datos.
 * 
 * @returns {Promise} Resuelve con array de mascotas o rechaza con error
 */
export function loadPets() {
  return new Promise((resolve, reject) => {
    // Simula latencia de red (0.8 segundos)
    setTimeout(() => {
      // Fetch obtiene el JSON desde la carpeta public
      fetch("/data/pets.json")
        .then((response) => {
          // Valida que la respuesta sea exitosa
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          // Convierte la respuesta a JSON
          return response.json();
        })
        .then((data) => {
          // Retorna el array de mascotas
          resolve(data.pets);
        })
        .catch((error) => {
          // Si hay error, rechaza la promise
          reject(new Error(`No se pudieron cargar las mascotas: ${error.message}`));
        });
    }, 800);
  });
}

/**
 * GUARDAR MATCH
 * 
 * Simula guardado de un "match" (conexión entre dos mascotas).
 * Demuestra cómo persistir datos en estado local o API.
 * 
 * @param {object} pet - Objeto mascota con la que se hizo match
 * @param {string} action - Tipo de acción (like, nope, super)
 * @returns {Promise} Resuelve cuando el match se guarda
 */
export function saveMatch(pet, action) {
  return new Promise((resolve) => {
    // Simula guardado en servidor
    setTimeout(() => {
      // Aquí en producción se enviaría a una API
      const matchData = {
        petId: pet.id,
        petName: pet.name,
        action: action,
        timestamp: new Date().toISOString()
      };
      
      // Guarda en localStorage para demostración
      const matches = JSON.parse(localStorage.getItem("pettin_matches")) || [];
      matches.push(matchData);
      localStorage.setItem("pettin_matches", JSON.stringify(matches));
      
      resolve(matchData);
    }, 500);
  });
}

/**
 * CARGAR IMAGENES PUBLICAS
 *
 * Consume una API publica sin clave para mostrar imagenes en el dashboard.
 * Usa Dog CEO API para evitar autenticar.
 *
 * @param {number} count - Cantidad de imagenes
 * @returns {Promise<string[]>} URLs de imagenes
 */
export function fetchPublicPets(count = 6) {
  return fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data.message);
}

