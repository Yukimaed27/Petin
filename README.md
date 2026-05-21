# Pettin - Tinder para Mascotas

Pettin es una aplicación web responsiva diseñada para ayudar a los dueños de mascotas a encontrar el compañero de juegos perfecto para sus amigos peludos.
El proyecto simula la interfaz y la experiencia de usuario de una plataforma de "Matchmaking" para mascotas, incluyendo navegación por perfiles, mensajería, gestión de perfiles y matches.

## Características Principales

- **Autenticación Simulada Global:** Implementación avanzada usando `AuthContext` para el manejo del estado global de la sesión.
- **Rutas Protegidas:** Uso de `ProtectedRoute` y `react-router-dom` para proteger vistas privadas (Dashboard, Explore, Match, Profile, etc.) evitando el acceso sin autorización.
- **Diseño Moderno y Responsivo:** Maquetación estilizada con **Tailwind CSS** (v3.4), adaptable a dispositivos móviles y pantallas grandes.
- **UI/UX Enriquecida:** Uso de iconografía escalable combinando **Lucide React** y **FontAwesome**.

## Usuarios de Prueba (Test Users)

Actualmente, el proyecto simula la conexión al backend mediante el servicio `api.js`. Para evaluar la plataforma y acceder a las rutas privadas, utiliza las siguientes credenciales en la pantalla de **Login**:

- **Correo Electrónico:** `admin@gmail.com`
- **Contraseña:** `admin123`

*(Nota: Ingresar datos distintos demostrará el manejo de errores en el formulario).*

## Tecnologías y Dependencias

Según nuestra configuración en `package.json`, el proyecto utiliza:

- **Core:** React, React DOM
- **Enrutamiento:** React Router DOM 
- **Estilos:** Tailwind CSS , PostCSS, Autoprefixer
- **Iconografía:** Lucide React, FontAwesome (SVG Core, Solid, Brands)
- **Testing:** React Testing Library

## Estructura del Proyecto

El proyecto sigue una arquitectura modular y escalable:

```text
PETIN/
├── public/
└── src/
    ├── components/         # Componentes reutilizables de UI
    │   ├── Card.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── PetRegisterForm.jsx
    │   └── Swipecard.jsx
    ├── context/            # Manejo de estados globales
    │   └── AuthContext.js  # Contexto de sesión de usuario
    ├── pages/              # Vistas principales de la aplicación
    │   ├── Contact.js, Dashboard.js, Explore.js, Home.js
    │   ├── Login.js, Match.js, NotFound.js, Profile.js
    │   └── Register.js, RegisterPet.js
    ├── routes/             # Lógica de protección de rutas
    │   └── ProtectedRoute.jsx
    ├── services/           # Lógica simulada de base de datos/API
    │   └── api.js
    ├── App.js / App.css    # Contenedor principal de rutas y estilos base
    └── index.js            # Punto de entrada de React
 Instalación y Ejecución
El proyecto está configurado para ejecutarse localmente. Nota: El proyecto soporta tanto npm como pnpm.
Clona el repositorio y abre una terminal en la carpeta raíz.
Si deseas correr este proyecto de manera local, sigue estos pasos:

1. Clona este repositorio o descarga los archivos.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias ejecutando:
   ```bash
   npm install
   npm install react-router-dom lucide-react
Inicia el servidor de desarrollo:
Abre http://localhost:3000 para ver la aplicación en tu navegador.

Desarrollado para los amantes de las mascotas,

Instala las dependencias:
Inicia el servidor de desarrollo:
Abre http://localhost:3000 en tu navegador para ver la aplicación.
