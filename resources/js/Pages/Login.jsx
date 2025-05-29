import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !senha) {
            setErro("Preencha todos os campos.");
            return;
        }

        router.post(
            "/api/login",
            {
                email,
                password: senha,
            },
            {
                onError: (errors) => {
                    const firstError =
                        errors.email?.[0] ||
                        errors.password?.[0] ||
                        Object.values(errors)[0]?.[0] ||
                        "Erro ao fazer login.";
                    setErro(firstError);
                },
            }
        );
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div
                className="card p-4 shadow"
                style={{ maxWidth: "400px", width: "100%" }}
            >
                <h2 className="mb-4 text-center">Entrar</h2>

                {erro && <div className="alert alert-danger">{erro}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">
                            Senha
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Entrar
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <p>
                        Não tem uma conta? <a href="/register">Registrar</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
