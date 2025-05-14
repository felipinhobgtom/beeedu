<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
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
    public function index (Request $req) {
        dd($req);
    }
}
