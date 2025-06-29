import { useState } from "react";
import { router } from "@inertiajs/react";
import MeusCursos from "../Components/Cursos/MeusCursos";
import PerfilUsuario from "../Components/Perfil/Index";
import Index from "../Components/Dashboard/Index";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function Dashboard({ auth, courses }) {
    const [selected, setSelected] = useState("dashboard");

    const user = auth.user;

    const logout = () => {
        router.post("/logout");
    };

    const renderContent = () => {
        switch (selected) {
            case "dashboard":
                return <Index user={user} />;
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
        <Sidebar
            selected={selected}
            setSelected={setSelected}
            logout={logout}
            renderContent={renderContent()}
        />
    );
}
