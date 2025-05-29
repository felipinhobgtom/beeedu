<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class N8nService
{

    public function __construct()
    {
        //
    }

    public function triggerUserWorkflow(User $user, String $webhookUrl) {
        $response = Http::post($webhookUrl, $user);
        if ($response->successful()) {
            Log::info("Enviando dados para o workflow...");
        } else {
            Log::warning("Workflow deu ruim... " . $response);
        }
    }
}
