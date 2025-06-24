<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $fillable = [
        'name',
        'organization',
        'email',
        'cnpj',
        'password',
        'area_atuacao',
        'freelas_postados',
        'cursos_oferecidos',
        'status',
    ];

    protected $connection = 'mongodb';
    protected $collection = 'empresas';

    protected function casts()
    {
        return [
            'freelas_postados'=> 'mongodb.objectid_array',
            'cursos_oferecidos'=> 'mongodb.objectid_array',
        ];
    }
}
