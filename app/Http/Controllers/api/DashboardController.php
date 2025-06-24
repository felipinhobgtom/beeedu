<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        $courses = $user->courses()->get();

        return Inertia::render('Dashboard', [
            'courses' => $courses
        ]);
    }
}
