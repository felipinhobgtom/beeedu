<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Curso extends Model
{
    //

    protected $collection = "cursos";
    protected $connection = 'mongodb';
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

    /* public function users() */
    /* { */
    /*     return $this->belongsToMany(User::class, null, 'curso_ids', 'user_ids'); */
    /* } */

}
