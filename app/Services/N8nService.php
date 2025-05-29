<?php

namespace App\Services;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Throwable;

class N8nService
{
    /**
     * Create a new class instance.
     */
    // public function __construct()
    // {
    //     //
    // }

    /**
     * Dispara um webhook n8n de forma resiliente e com logs detalhados.
     *
     * @param  array   $data       Payload a ser enviado (já em array).
     * @param  string  $webhookUrl URL completa do webhook.
     * @return void
     */
    public function triggerUserWorkflow(Arrayable|array $data, string $webhookUrl): void
    {
        $payload = $data instanceof Arrayable ? $data->toArray() : $data;

        Log::debug('WorkflowService::triggerUserWorkflow start', [
            'url'     => $webhookUrl,
            'payload' => $payload,
        ]);

        try {
            $response = Http::timeout(5)            // tempo máximo de 5s
                            ->retry(3, 100)       // até 3 tentativas, 100ms entre cada
                            ->post($webhookUrl, $payload);

            if ($response->successful()) {
                Log::info('Webhook disparado com sucesso', [
                    'url'    => $webhookUrl,
                    'status' => $response->status(),
                ]);
            } else {
                Log::warning('Falha ao disparar webhook', [
                    'url'    => $webhookUrl,
                    'status' => $response->status(),
                    'body'   => $response->body(),
                ]);
            }
        } catch (Throwable $e) {
            Log::error('Erro ao tentar disparar webhook', [
                'url'     => $webhookUrl,
                'error'   => $e->getMessage(),
                'trace'   => $e->getTraceAsString(),
            ]);
        }

        Log::debug('WorkflowService::triggerUserWorkflow end');
    }
}
