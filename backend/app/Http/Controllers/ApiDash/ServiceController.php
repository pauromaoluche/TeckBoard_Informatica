<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models\Service;

class ServiceController extends Controller
{
    public function Index()
    {

        $services = Service::all();

        return response()->json([
            'services' => $services,
        ]);
    }
}
