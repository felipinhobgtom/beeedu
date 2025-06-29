import React from 'react';

const Index = ({ user }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">Painel Geral</h2>
             <p className="text-gray-600">Bem-vindo, {user.name}!</p>
        </div>
    );
}

export default Index;
