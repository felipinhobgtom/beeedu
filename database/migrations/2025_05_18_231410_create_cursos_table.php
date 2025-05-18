<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cursos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->json('empresa_id');
            $table->dateTime('duracao');
            $table->json('badge_conclusao');
            $table->string('descricao');
            $table->string('area_atuacao');
            $table->boolean('status');
            $table->enum('nivel', ['iniciante','intermediario','avancado']);
            $table->string('categoria');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursos');
    }
};
