import React, { useState } from "react";

const Sidebar = ({ selected, setSelected, logout, renderContent }) => {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: "bi-house" },
        { id: "perfil", label: "Perfil", icon: "bi-person" },
        { id: "cursos", label: "Meus Cursos", icon: "bi-journal-bookmark" },
        { id: "certificados", label: "Certificados", icon: "bi-award" },
        { id: "mensagens", label: "Mensagens", icon: "bi-chat-dots" },
    ];

    const MenuItem = ({ id, label, icon }) => (
        <button
            onClick={() => setSelected(id)}
            title={!isOpen ? label : ""}
            className={`flex items-center ${
                isOpen ? "justify-start" : "justify-center"
            } gap-3 w-full px-4 py-3 rounded transition ${
                selected === id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
            }`}
        >
            <i className={`bi ${icon} text-xl`} />
            {isOpen && <span className="whitespace-nowrap">{label}</span>}
        </button>
    );

    return (
        <div className="min-h-screen flex bg-gray-100">
            <aside
                className={`${
                    isOpen ? "w-64 p-4" : "w-20"
                } bg-white shadow-md space-y-4 transition-all duration-300`}
            >
                <div
                    className={`${
                        isOpen ? "flex items-center justify-between" : ""
                    } mb-6`}
                >
                    {isOpen && (
                        <h1 className="text-xl font-bold text-blue-600">
                            BEEEDU
                        </h1>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        title={isOpen ? "Fechar menu" : "Abrir menu"}
                        className={`text-blue-600 text-2xl rounded hover:bg-gray-100 ${
                            isOpen ? "p-2" : "flex items-center justify-center gap-3 mt-4 w-full px-4 py-2"
                        }`}
                    >
                        <i className="bi bi-list text-xl" />
                    </button>
                </div>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </nav>

                <hr />

                <button
                    onClick={logout}
                    className={`flex items-center ${
                        isOpen ? "justify-start" : "justify-center"
                    } gap-3 text-red-500 hover:underline mt-4 w-full px-4 py-2`}
                    title="Sair"
                >
                    <i className="bi bi-box-arrow-right text-xl" />
                    {isOpen && <span>Sair</span>}
                </button>
            </aside>

            <main className="flex-1 p-8">{renderContent}</main>
        </div>
    );
};

export default Sidebar;
