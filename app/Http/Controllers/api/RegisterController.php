<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Hash;
use Illuminate\Http\Request;

/**
 * @OA\Info(
 *     title="Registro",
 *     version="1.0.0",
 *     description="Endpoint de registro da API"
 * )
 */
class RegisterController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/register",
     *     tags={"Registrar"},
     *     summary="Insere o usuario no banco de dados",
     *     @OA\Response(
     *         response=200,
     *         description="Mensagem de confirmacao",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="message",
     *                 type="string",
     *                 example="Success!"
     *             )
     *         )
     *     )
     * )
     */
    public function index(Request $req)
    {

        $req->validate([
            'is_empresa' => 'required|boolean',
        ]);

        return !$req->is_empresa ? $this->create_user_account($req) : $this->create_empresa_account($req);
    }

    public function create_user_account(Request $req)
    {
        $validated = $req->validate([
            'name' => ['required', 'string', 'max:255'],
            'tel' => ['required', 'string', 'unique:mongodb.users'],
            'cpf' => ['required', 'string', 'max:11', 'unique:mongodb.users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:mongodb.users'],
            'password' => ['required', 'confirmed', 'min:8'],
            'address' => ['required', 'string', 'max:150'],
        ], [
            '*.unique' => 'Usuário ja existe.'
        ]);

        $validated['password'] = Hash::make($validated['password']);

        $user = User::create([
            'name' => $validated['name'],
            'tel' => $validated['tel'],
            'cpf' => $validated['cpf'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'address' => $validated['address'],
            'role' => 'student', // Definindo o papel padrão como estudante
        ]);

        Auth::login($user);

        return redirect()->route('home')->with('success', 'Usuário registrado e logado com sucesso!');
    }
    public function create_empresa_account(Request $req)
    {
        dd($req);
    }
}
