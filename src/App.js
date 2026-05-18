import './index.css';
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Match = lazy(() => import("./pages/Match"));
const Messages = lazy(() => import("./pages/Messages"));
const Profile = lazy(() => import("./pages/Profile"));
const Notifications = lazy(() => import("./pages/Notifications"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Suspense fallback={<div>Cargando...</div>}> <Home/> </Suspense>}/>
            <Route path="/explore" element={<Suspense fallback={<div>Cargando...</div>}> <Explore/> </Suspense>}/>
            <Route path="/messages" element={<Suspense fallback={<div>Cargando...</div>}> <Messages/> </Suspense>}/>
            <Route path="/matches" element={<Suspense fallback={<div>Cargando...</div>}> <Match/> </Suspense>}/>
            <Route path="/profile" element={<Suspense fallback={<div>Cargando...</div>}> <Profile/> </Suspense>}/>
            <Route path="/notifications" element={<Suspense fallback={<div>Cargando...</div>}> <Notifications/> </Suspense>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
