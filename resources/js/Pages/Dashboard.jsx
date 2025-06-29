import { useState } from "react";
import { router } from "@inertiajs/react";
import MeusCursos from "../Components/Cursos/MeusCursos";
import PerfilUsuario from "../Components/Perfil/Index";

export default function Dashboard({ auth, courses }) {
    const [selected, setSelected] = useState("dashboard");

    const user = auth.user;

    const logout = () => {
        router.post("/logout");
    };

    const MenuItem = ({ id, label }) => (
        <button
            onClick={() => setSelected(id)}
            className={`w-full text-left px-4 py-2 rounded transition ${
                selected === id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
            }`}
        >
            {label}
        </button>
    );

    const renderContent = () => {
        switch (selected) {
            case "dashboard":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Painel Geral
                        </h2>
                        <p className="text-gray-600">Bem-vindo, {user.name}!</p>
                    </div>
                );
            case "perfil":
                return <PerfilUsuario user={user} />;
            case "cursos":
                return <MeusCursos courses={courses} />;
            case "certificados":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Certificados
                        </h2>
                        <p className="text-gray-600">
                            Seus certificados estarão aqui.
                        </p>
                    </div>
                );
            case "mensagens":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Mensagens</h2>
                        <p className="text-gray-600">Nenhuma mensagem nova.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <aside className="w-64 bg-white shadow-md p-6 space-y-4">
                <h1 className="text-xl font-bold mb-4 text-blue-600">BEEEDU</h1>
                <MenuItem id="dashboard" label="Dashboard" />
                <MenuItem id="perfil" label="Perfil" />
                <MenuItem id="cursos" label="Meus Cursos" />
                <MenuItem id="certificados" label="Certificados" />
                <MenuItem id="mensagens" label="Mensagens" />

                <hr />

                <button
                    onClick={logout}
                    className="text-red-500 hover:underline mt-4"
                >
                    Sair
                </button>
            </aside>

            <main className="flex-1 p-8">{renderContent()}</main>
        </div>
    );
}
