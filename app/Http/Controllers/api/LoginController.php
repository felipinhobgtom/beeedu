<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/login",
     *     tags={"Login"},
     *     summary="Autentica o usuário e retorna os dados",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"email", "password"},
     *             @OA\Property(property="email", type="string", example="usuario@email.com"),
     *             @OA\Property(property="password", type="string", example="12345678")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuário autenticado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Login realizado com sucesso."),
     *             @OA\Property(property="user", type="object"),
     *             @OA\Property(property="token", type="string", example="seu_token_aqui")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Credenciais inválidas"
     *     )
     * )
     */
    public function index(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'As credenciais informadas estão incorretas.'
            ], 401);
        }

        $user = Auth::user();
        Auth::login($user);
        return redirect()->route('home')->with('success', 'Usuário registrado e logado com sucesso!');
    }
}
