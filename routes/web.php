<?php

use App\Http\Controllers\api\CursoController;
use App\Http\Controllers\api\DashboardController;
use App\Http\Controllers\api\RegisterController;
use App\Http\Controllers\api\LoginController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::middleware(["guest"])->group(function () {
    Route::get('/', function () {
        return inertia('Home');
    })->name('home');

    Route::post('/api/register', [RegisterController::class, 'index'])->name('api-register');
    Route::get('/register', function () {
        return inertia('Register');
    })->name('register');

    Route::post('/api/login', [LoginController::class, 'index'])->name('api-login');
    Route::get('/login', function () {
        return inertia('Login');
    })->name('login');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');

    Route::post('/logout', function () {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/');
    })->name('logout');
});

Route::post('/api/add-course', [CursoController::class, 'create_course']);
