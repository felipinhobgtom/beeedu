import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
  const [isEmpresa, setIsEmpresa] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    is_empresa: false,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tel: "",
    cpf: "",
    address: "",
    organization: "",
    cnpj: "",
    area_atuacao: "",
  });

  const handleAccountTypeChange = (type) => {
    setIsEmpresa(type);
    setData("is_empresa", type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/api/register", {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Criar uma nova conta
        </h1>

        {/* Botões para selecionar tipo de conta */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              !isEmpresa
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleAccountTypeChange(false)}
          >
            Conta de Aluno
          </button>
          <button
            type="button"
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              isEmpresa
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleAccountTypeChange(true)}
          >
            Conta de Empresa
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos comuns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Nome</label>
              <input
                type="text"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
              />
              {errors.name && (
                <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Senha</label>
              <input
                type="password"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
              {errors.password && (
                <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Confirmar Senha</label>
              <input
                type="password"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                value={data.password_confirmation}
                onChange={(e) => setData("password_confirmation", e.target.value)}
              />
            </div>
          </div>

          {/* Campos específicos para Aluno */}
          {!isEmpresa && (
            <>
              <h2 className="text-xl font-semibold mb-4">Dados do Aluno</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Telefone</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.tel}
                    onChange={(e) => setData("tel", e.target.value)}
                  />
                  {errors.tel && (
                    <p className="mt-1 text-red-600 text-sm">{errors.tel}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium">CPF</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.cpf}
                    onChange={(e) => setData("cpf", e.target.value)}
                  />
                  {errors.cpf && (
                    <p className="mt-1 text-red-600 text-sm">{errors.cpf}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium">Endereço</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                  />
                  {errors.address && (
                    <p className="mt-1 text-red-600 text-sm">{errors.address}</p>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Campos específicos para Empresa */}
          {isEmpresa && (
            <>
              <h2 className="text-xl font-semibold mb-4">Dados da Empresa</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Nome da Organização</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.organization}
                    onChange={(e) => setData("organization", e.target.value)}
                  />
                  {errors.organization && (
                    <p className="mt-1 text-red-600 text-sm">{errors.organization}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium">CNPJ</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.cnpj}
                    onChange={(e) => setData("cnpj", e.target.value)}
                  />
                  {errors.cnpj && (
                    <p className="mt-1 text-red-600 text-sm">{errors.cnpj}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium">Área de Atuação</label>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    value={data.area_atuacao}
                    onChange={(e) => setData("area_atuacao", e.target.value)}
                  />
                  {errors.area_atuacao && (
                    <p className="mt-1 text-red-600 text-sm">{errors.area_atuacao}</p>
                  )}
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
          >
            {processing ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
