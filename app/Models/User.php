<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'tel',
        'cpf',
        'email',
        'password',
        'budge',
        'address',
        'organization',
        'cursos',
        'role',
        'profile_picture',
        'remember_token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $connection = 'mongodb';
    protected $collection = 'users';

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Define o relacionamento de que um usuário pode ter muitos cursos.
     * O Laravel/MongoDB irá gerenciar a array 'cursos' de ObjectIds.
     */
    public function courses() // Nome no plural é convenção para relacionamentos "Many"
    {
        // O Laravel vai procurar por um campo 'curso_ids' (ou 'courses_ids') no User.
        // Como o seu campo se chama 'cursos', nós o especificamos.
        return $this->belongsToMany(Curso::class, null, 'user_ids', 'cursos');
    }
}
