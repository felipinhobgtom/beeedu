<?php

use App\Http\Controllers\api\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/register', function () {
    return inertia('Register');
})->name('register');

Route::post('/api/register', [RegisterController::class, 'index']);
