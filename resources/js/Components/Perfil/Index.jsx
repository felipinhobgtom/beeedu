import React, { useState } from "react";

const PerfilUsuario = ({ user }) => {
    const [form, setForm] = useState({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        cpf: user.cpf || "",
        address: user.address || "",
        tel: user.tel || "",
    });

    return (
        <section id="perfil" className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Perfil</h2>
                    <p className="text-gray-500">Meu Perfil</p>
                </div>

                <div className="rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center space-x-4 mb-6">
                        <img
                            src={
                                user.profile_photo || "https://placehold.co/100"
                            }
                            alt="Foto de perfil"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{user.name}</h2>
                            <p className="text-gray-600">
                                {user.role || "Cargo não definido"}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 text-gray-700">
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Empresa:</strong> {user.tel || "-"}
                        </p>
                        <p>
                            <strong>Endereço:</strong> {user.address || "-"}
                        </p>
                        <p>
                            <strong>Telefone:</strong> {user.cpf || "-"}
                        </p>
                        <p>
                            <strong>Sobre:</strong> {user.about || "-"}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfilUsuario;
