<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Curso;
use App\Models\User;
use Illuminate\Http\Request;

class CursoController extends Controller
{
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
