import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

export default function Dashboard({ auth, courses }) {
    const [selected, setSelected] = useState("dashboard");


    const user = auth.user;

    const logout = () => {
        router.post("/logout");
    };

    const MenuItem = ({ id, label }) => (
        <button
            onClick={() => setSelected(id)}
            className={`w-full text-left px-4 py-2 rounded transition ${selected === id
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
                        <h2 className="text-2xl font-bold mb-2">Painel Geral</h2>
                        <p className="text-gray-600">Bem-vindo, {user.name}!</p>
                    </div>
                );
            case "perfil":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Perfil</h2>
                        <p>Nome: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <a
                            href="/perfil"
                            className="text-blue-600 underline mt-2 inline-block"
                        >
                            Editar perfil
                        </a>
                    </div>
                );
            case "cursos":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Meus Cursos</h2>

                        {/* 3. Verificação para ver se o usuário tem cursos */}
                        {courses && courses.length > 0 ? (
                            <ul className="space-y-4">
                                {/* 4. Usamos .map() para iterar sobre a lista de cursos */}
                                {courses.map((course) => (
                                    <li key={course._id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <h3 className="font-bold text-lg">{course.titulo}</h3>
                                        <p className="text-gray-600 mt-1">{course.descricao}</p>
                                        <div className="text-sm text-gray-500 mt-2">
                                            <span>Duração: {course.duracao}</span> | <span>Nível: {course.nivel}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            // 5. Mensagem para quando não há cursos
                            <p className="text-gray-600">Você ainda não está inscrito em nenhum curso.</p>
                        )}
                    </div>
                );
            case "certificados":
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Certificados</h2>
                        <p className="text-gray-600">Seus certificados estarão aqui.</p>
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

            <main className="flex-1 p-8">
                {renderContent()}
            </main>
        </div>
    );
}
