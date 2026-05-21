# Pettin - Red Social de Mascotas

Un frontend moderno, interactivo y totalmente responsive diseñado para conectar mascotas y dueños en una plataforma de estilo "matchmaking". Desarrollado con **React**, **Tailwind CSS** y **React Router DOM**, cumpliendo con altos estándares de arquitectura limpia y patrones de diseño modernos.

---

## Características Clave (Features)

* **Autenticación Persistente:** Sistema de Login y Registro funcional con persistencia de sesión a través de `localStorage` y control de ciclo de vida con el hook `useEffect`.
* **Rutas Protegidas:** Sistema de enrutamiento seguro que impide el acceso a las vistas de la aplicación (`/explore`, `/match`, `/profile`) si no existe una sesión activa.
* **Consumo de Datos Dinámico:** Carga e interacción de perfiles de mascotas de forma reactiva simulando peticiones asíncronas (`Fetch API`) desde un origen de datos JSON externo (`pets.json`).
* **Componentes Reutilizables:** Interfaz modularizada eficientemente en componentes independientes como `Navbar`, `Footer`, `Card` y `SwipeCard`.
* **Diseño Excepcional y Responsive:** Estética moderna basada en gradientes pastel y morados, adaptada al 100% para dispositivos móviles, tablets y escritorio mediante los breakpoints nativos de `Tailwind CSS`.
* **Manejo de Errores UX:** Página 404 personalizada integrada para capturar y redireccionar de forma amigable cualquier ruta inválida.

---

## Tecnologías Utilizadas

* **Framework:** React (Vite / Create React App)
* **Enrutamiento:** React Router DOM
* **Estilos:** Tailwind CSS & Autoprefixer
* **Iconos:** Lucide React
* **Gestión de Estado:** Hooks nativos (`useState`, `useEffect`)

---

## Usuarios de prueba

**Admin**
- Email: admin@gmail.com
- Password: admin123

**Usuario**
- Crea un usuario en la pantalla de registro (se guarda en localStorage)
- Luego inicia sesion con ese correo y password

---

## Despliegue

- Vercel: https://petin-omega.vercel.app/
- Render: agrega aqui el link cuando publiques

---

## 📁 Estructura del Proyecto Principal

```text
src/
├── components/          # Componentes globales reutilizables (Navbar, Footer, Cards)
├── pages/               # Vistas de la aplicación (Home, Login, Explore, Match, Profile, NotFound)
├── services/            # Lógica de simulación de API y persistencia de datos
└── index.css            # Configuración e inyección de directivas de Tailwind CSS



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
