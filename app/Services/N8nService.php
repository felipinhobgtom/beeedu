<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class N8nService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function triggerUserWorkflow($data, String $webhookUrl) {
        $data_array = $data->toArray();
        $response = Http::post($webhookUrl, $data_array);
        if ($response->successful()) {
            Log::info("Enviando dados para o workflow...");
        } else {
            Log::warning("Workflow deu ruim... " . $response);
        }
    }
}
