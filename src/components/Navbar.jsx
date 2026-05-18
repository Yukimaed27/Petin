import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

function Navbar() {

    return (
        <div>
            <nav className="px-6 py-6 shadow-lg shadow-purple-200">
                <div className="grid grid-cols-3 items-center">
                    <div className="flex justify-start">
                        <div className="flex items-center text-gray-900 no-underline">
                            <Link className="text-2xl font-bold text-purple-700" to="/home">Pettin</Link>
                        </div>
                    </div>
                    <div className="flex justify-center gap-8">
                        <NavLink className={({ isActive }) => isActive ? "font-bold text-purple-700" : "text-black hover:text-purple-700"} to="/explore">Explorar</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "font-bold text-purple-700" : "text-black hover:text-purple-700"} to="/messages">Mensajes</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "font-bold text-purple-700" : "text-black hover:text-purple-700"} to="/matches">Matches</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "font-bold text-purple-700" : "text-black hover:text-purple-700"} to="/profile">Perfil</NavLink>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/notifications" className="hidden md:block">
                            <IoNotifications
                                size={28}
                                className="text-gray-600"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default React.memo(Navbar);