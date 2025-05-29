import { router } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <div className="container mt-5">
            <h1>Bem-vindo ao Painel</h1>
            <p>Você está autenticado!</p>
            <button type="submit" onClick={ () => {
                router.post('/logout');
            } }>desloga</button>
        </div>
    );
}
