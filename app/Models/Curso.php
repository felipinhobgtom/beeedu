<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    //
    protected $fillable = [
        'titulo',
        'empresa_id',
        'duracao',
        'badge_conclusao',
        'descricao',
        'area_atuacao',
        'status',
        'nivel',
        'categoria',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}
