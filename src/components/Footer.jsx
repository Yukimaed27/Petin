import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="px-5 py-10 shadow-inner shadow-gray-200">
                <div className="grid grid-cols-3 items-center gap-x-16">
                    <div className="flex justify-start">
                        <div className="flex items-center text-gray-900 no-underline">
                            <Link className="text-1xl font-bold text-purple-700">Pettin</Link>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 text-sm">
                        <Link>Acerca de</Link>
                        <Link>Ayuda</Link>
                        <Link>Privacidad</Link>
                        <Link>Términos</Link>
                    </div>
                    <div className="justify-end">
                        <p className="text-1xl">&copy; 2024 Pettin Inc. Hecho con amor a los pets</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default React.memo(Footer);