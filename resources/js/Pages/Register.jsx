import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const [isEmpresa, setIsEmpresa] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        is_empresa: false,
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        // Campos comuns acima, campos específicos abaixo

        // Campos específicos para User (aluno)
        tel: '',
        cpf: '',
        address: '',

        // Campos específicos para Empresa
        organization: '',
        cnpj: '',
        area_atuacao: '',
    });

    const handleAccountTypeChange = (type) => {
        setIsEmpresa(type);
        setData('is_empresa', type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/api/register', {
            onSuccess: () => {
                reset();
                // Você pode adicionar um redirecionamento ou mensagem de sucesso aqui
            },
        });
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Criar uma nova conta</h1>

                {/* Seleção de tipo de conta */}
                <div className="mb-6">
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded ${isEmpresa ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => handleAccountTypeChange(false)}
                        >
                            Conta de Aluno
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded ${!isEmpresa ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => handleAccountTypeChange(true)}
                        >
                            Conta de Empresa
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Campos comuns para ambos os tipos */}
                    <div className="mb-4">
                        <label className="block mb-1">Nome</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Senha</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Confirmar Senha</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                        />
                    </div>

                    {/* Campos específicos para Aluno */}
                    {!isEmpresa && (
                        <>
                            <div className="mb-4">
                                <label className="block mb-1">Telefone</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.tel}
                                    onChange={e => setData('tel', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">CPF</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.cpf}
                                    onChange={e => setData('cpf', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Endereço</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.address}
                                    onChange={e => setData('address', e.target.value)}
                                />
                            </div>
                        </>
                    )}

                    {/* Campos específicos para Empresa */}
                    {isEmpresa && (
                        <>
                            <div className="mb-4">
                                <label className="block mb-1">Nome da Organização</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.organization}
                                    onChange={e => setData('organization', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">CNPJ</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.cnpj}
                                    onChange={e => setData('cnpj', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">Área de Atuação</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={data.area_atuacao}
                                    onChange={e => setData('area_atuacao', e.target.value)}
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        disabled={processing}
                    >
                        {processing ? 'Registrando...' : 'Registrar'}
                    </button>
                    {Object.values(errors).map(error =>
                        typeof error === 'string' ? error : (
                            Array.isArray(error) ? error[0] : JSON.stringify(error)
                        )
                    )[0]}
                </form>
            </div>
        </>
    );
}
