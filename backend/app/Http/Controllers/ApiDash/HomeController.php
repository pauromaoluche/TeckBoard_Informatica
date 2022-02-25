<?php

namespace App\Http\Controllers\ApiDash;

header('Access-Control-Aloow-Origin: *');

use App\Http\Controllers\Controller;
use App\Models\Models\Client;
use App\Models\Models\Service;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function Client(Client $client)
    {

        /* laravel promove uma query que busca os dados mais facil */
        $clients = Client::all();

        return response()->json([
            'clients' => $clients,
        ]);
    }

    public function Service()
    {
        $services = Service::all();
        return response()->json([
            'services' => $services,
        ]);
    }
}
