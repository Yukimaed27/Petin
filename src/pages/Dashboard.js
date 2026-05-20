import React, { useEffect, useMemo, useState } from "react";
import { PawPrint, Users, TrendingUp, ShieldCheck, Search } from "lucide-react";
import { loadPets } from "../services/api";
import { fetchPublicPets } from "../services/api";

function Dashboard() {
    const [pets, setPets] = useState([]);
    const [loadingPets, setLoadingPets] = useState(true);
    const [publicImages, setPublicImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("all");

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoadingPets(true);
                const petsData = await loadPets();
                const savedPet = JSON.parse(localStorage.getItem("pettin_pet"));
                const normalizedSavedPet = savedPet
                    ? {
                            id: "local-1",
                            name: savedPet.petName,
                            age: Number(savedPet.petAge || 0),
                            distance: "Local",
                            match: "-",
                            image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
                            description: savedPet.petBio || "",
                            species: savedPet.petType || "",
                            breed: savedPet.petBreed || "",
                            owner: "Registro local",
                        }
                    : null;

                const mergedPets = normalizedSavedPet
                    ? [normalizedSavedPet, ...petsData]
                    : petsData;

                setPets(mergedPets);
            } catch (error) {
                console.error("Error loading pets:", error);
                setPets([]);
            } finally {
                setLoadingPets(false);
            }
        };

        const loadPublicImages = async () => {
            try {
                const images = await fetchPublicPets(6);
                setPublicImages(images);
            } catch (error) {
                console.error("Error loading public images:", error);
                setPublicImages([]);
            }
        };

        loadData();
        loadPublicImages();
    }, []);

    const matches = useMemo(() => {
        const stored = JSON.parse(localStorage.getItem("pettin_matches")) || [];
        return stored;
    }, []);

    const usersCount = useMemo(() => {
        const storedUser = JSON.parse(localStorage.getItem("pettin_user"));
        return storedUser ? 1 : 0;
    }, []);

    const filteredPets = useMemo(() => {
        return pets.filter((pet) => {
            const matchesSearch = pet.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesSpecies = speciesFilter === "all" || pet.species === speciesFilter;
            return matchesSearch && matchesSpecies;
        });
    }, [pets, searchTerm, speciesFilter]);

    const speciesOptions = useMemo(() => {
        const options = new Set(pets.map((pet) => pet.species).filter(Boolean));
        return ["all", ...Array.from(options)];
    }, [pets]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Dashboard Admin</h1>
                    <p className="text-gray-600 mt-3">Gestiona usuarios, mascotas y actividad en tiempo real.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <aside className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 h-fit sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Menu</h2>
                        <nav className="space-y-3">
                            <a href="#stats" className="block text-gray-700 hover:text-purple-700 font-medium">Resumen</a>
                            <a href="#pets" className="block text-gray-700 hover:text-purple-700 font-medium">Mascotas</a>
                            <a href="#matches" className="block text-gray-700 hover:text-purple-700 font-medium">Matches</a>
                            <a href="#public" className="block text-gray-700 hover:text-purple-700 font-medium">API Publica</a>
                        </nav>
                    </aside>

                    <div className="lg:col-span-9 space-y-10">
                        <section id="stats" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Mascotas registradas</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-2">{pets.length}</h3>
                                    </div>
                                    <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
                                        <PawPrint size={28} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Usuarios activos</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-2">{usersCount}</h3>
                                    </div>
                                    <div className="bg-pink-100 p-3 rounded-2xl text-pink-600">
                                        <Users size={28} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Matches guardados</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-2">{matches.length}</h3>
                                    </div>
                                    <div className="bg-indigo-100 p-3 rounded-2xl text-indigo-600">
                                        <TrendingUp size={28} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-xl p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Estado del sistema</p>
                                        <h3 className="text-3xl font-bold text-gray-900 mt-2">OK</h3>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                                        <ShieldCheck size={28} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pets" className="bg-white rounded-3xl shadow-xl p-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Listado de mascotas</h2>
                                    <p className="text-gray-600">Administra registros y aplica filtros.</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative">
                                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(event) => setSearchTerm(event.target.value)}
                                            placeholder="Buscar por nombre"
                                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-purple-500"
                                        />
                                    </div>

                                    <select
                                        value={speciesFilter}
                                        onChange={(event) => setSpeciesFilter(event.target.value)}
                                        className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-purple-500"
                                    >
                                        {speciesOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option === "all" ? "Todas" : option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {loadingPets ? (
                                <div className="py-10 text-center text-gray-500">Cargando mascotas...</div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-gray-500 text-sm border-b">
                                                <th className="py-3">Nombre</th>
                                                <th className="py-3">Especie</th>
                                                <th className="py-3">Raza</th>
                                                <th className="py-3">Edad</th>
                                                <th className="py-3">Dueño</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredPets.map((pet) => (
                                                <tr key={pet.id} className="border-b last:border-b-0 text-gray-700">
                                                    <td className="py-3 font-semibold">{pet.name}</td>
                                                    <td className="py-3">{pet.species}</td>
                                                    <td className="py-3">{pet.breed}</td>
                                                    <td className="py-3">{pet.age}</td>
                                                    <td className="py-3">{pet.owner}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>

                        <section id="matches" className="bg-white rounded-3xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Matches recientes</h2>
                            <div className="space-y-4">
                                {matches.length === 0 ? (
                                    <p className="text-gray-500">No hay matches registrados.</p>
                                ) : (
                                    matches.slice(0, 5).map((match, index) => (
                                        <div key={`${match.petId}-${index}`} className="flex items-center justify-between bg-slate-50 px-4 py-3 rounded-2xl">
                                            <div>
                                                <p className="font-semibold text-gray-800">{match.petName}</p>
                                                <p className="text-sm text-gray-500">Accion: {match.action}</p>
                                            </div>
                                            <span className="text-xs text-gray-400">{new Date(match.timestamp).toLocaleString()}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </section>

                        <section id="public" className="bg-white rounded-3xl shadow-xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Galeria API publica</h2>
                                    <p className="text-gray-600">Imagenes obtenidas desde Dog CEO API.</p>
                                </div>
                            </div>
                            {publicImages.length === 0 ? (
                                <p className="text-gray-500">No se pudieron cargar imagenes.</p>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {publicImages.map((image) => (
                                        <div key={image} className="rounded-2xl overflow-hidden shadow-md">
                                            <img src={image} alt="Mascota" className="w-full h-40 object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;