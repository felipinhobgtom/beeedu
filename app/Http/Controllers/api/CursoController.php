<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\User;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function create_course(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255|unique:cursos,titulo',
            'descricao' => 'nullable|string',
            'duracao' => 'required|string|max:100',
            'nivel' => 'required|string|in:Iniciante,Intermediário,Avançado',
            'area_atuacao' => 'required|string|max:255',
        ]);

        $curso = Curso::create($validated);

        return response()->json([
            'msg' => 'ok',
            'curso' => $curso
        ], 201);
    }

    public function add_curso_to_user(Request $req, User $user)
    {
        $req->validate([
            'curso_id' => 'required|exists:cursos,_id'
        ]);

        $curso_id = $req->input('curso_id');
        $user->courses()->attach($curso_id);

        return response()->json([
            'msg' => 'Curso associado.',
            'user' => $user->fresh()->load('cursos')
        ], 200);
    }

    public function destroy(User $user, Curso $curso) {
        $user->courses()->detach($curso->id);
    }
}
