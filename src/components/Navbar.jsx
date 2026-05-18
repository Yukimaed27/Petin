import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ onLogout }) {

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();       // borra token
    navigate("/login");
  };

  return (
    <nav className="flex justify-between p-4 bg-white shadow">

      <h1 className="font-bold text-purple-900">Pettin 🐾</h1>

      <div className="flex gap-4">

        <button onClick={() => navigate("/explore")}>
          Explore
        </button>

        <button onClick={() => navigate("/register")}>
          Register
        </button>

        <button
          onClick={handleLogout}
          className="bg-purple-600 text-white px-4 py-1 rounded"
        >
          Salir
        </button>

      </div>

    </nav>
  );
}

export default Navbar;