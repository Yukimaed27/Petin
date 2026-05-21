# Pettin - Red Social de Mascotas

Pettin es una aplicación web responsiva diseñada para ayudar a los dueños de mascotas a encontrar el compañero de juegos perfecto para sus amigos peludos. El proyecto simula la interfaz y la experiencia de usuario de una plataforma de "matchmaking" para mascotas, incluyendo navegación por perfiles, gestión de perfiles y matches.

## Características Principales

- **Autenticación Simulada Global:** Implementación usando `AuthContext` para el manejo del estado global de la sesión.
- **Rutas Protegidas:** Uso de `ProtectedRoute` y `react-router-dom` para proteger vistas privadas (Dashboard, Explore, Match, Profile, etc.) evitando el acceso sin autorización.
- **Consumo de Datos Dinámico:** Carga de mascotas desde `public/data/pets.json` y consumo de API publica para imagenes.
- **Diseño Moderno y Responsivo:** Maquetación estilizada con **Tailwind CSS** adaptable a mobile, tablet y desktop.
- **UI/UX Enriquecida:** Uso de iconografia combinando **Lucide React** y **FontAwesome**.

## Usuarios de Prueba

Actualmente, el proyecto simula la conexión al backend mediante el servicio `api.js`. Para evaluar la plataforma y acceder a las rutas privadas, utiliza las siguientes credenciales en la pantalla de **Login**:

- **Correo Electronico:** `admin@gmail.com`
- **Contrasena:** `admin123`

**Usuario**
- Crea un usuario en la pantalla de registro (se guarda en localStorage)
- Luego inicia sesion con ese correo y password

## Tecnologias y Dependencias

Según nuestra configuración en `package.json`, el proyecto utiliza:

- **Core:** React, React DOM
- **Enrutamiento:** React Router DOM
- **Estilos:** Tailwind CSS, PostCSS, Autoprefixer
- **Iconografia:** Lucide React, FontAwesome (SVG Core, Solid, Brands)
- **Testing:** React Testing Library

## Despliegue

- Vercel: https://petin-omega.vercel.app/
- Render: agrega aqui el link cuando publiques

## Estructura del Proyecto

El proyecto sigue una arquitectura modular y escalable:

```text
src/
├── components/         # Componentes reutilizables de UI
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PetRegisterForm.jsx
│   └── Swipecard.jsx
├── context/            # Manejo de estados globales
│   └── AuthContext.js  # Contexto de sesion de usuario
├── pages/              # Vistas principales de la aplicacion
│   ├── Contact.js, Dashboard.js, Explore.js, Home.js
│   ├── Login.js, Match.js, NotFound.js, Profile.js
│   └── Register.js, RegisterPet.js
├── routes/             # Logica de proteccion de rutas
│   └── ProtectedRoute.jsx
├── services/           # Logica simulada de base de datos/API
│   └── api.js
├── App.js / App.css    # Contenedor principal de rutas y estilos base
└── index.js            # Punto de entrada de React
```

## Instalación y Ejecución

El proyecto está configurado para ejecutarse localmente y soporta tanto `npm` como `pnpm`.

### 1. Clonar el repositorio
```bash
git clone https://github.com/Yukimaed27/Petin.git 
```
### 2. Ingresar a la carpeta del proyecto
```bash
cd PETTIN
```
### 3. Instalar dependencias
```bash
npm install
```
### 4. Ejecutar el servidor de desarrollo
Si usas Vite:
```bash
npm run dev
```
Si usas Create React App:
```bash
npm start
```
### 5. Abrir en el navegador
```txt
http://localhost:3000
```

Desarrollado para los amantes de las mascotas,

Inicia el servidor de desarrollo:
Abre http://localhost:3000 en tu navegador para ver la aplicación.
