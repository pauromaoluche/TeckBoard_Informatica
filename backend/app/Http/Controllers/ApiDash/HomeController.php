<?php

namespace App\Http\Controllers\ApiDash;

header('Access-Control-Aloow-Origin: *');

use App\Http\Controllers\Controller;
use App\Models\Models\Client;
use App\Models\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function Client()
    {

        /* laravel promove uma query que busca os dados mais facil */
        $clients = Client::all();

        return response()->json([
            'clients' => $clients,
        ]);
    }

    public function Product()
    {
        // $products = Product::all();
        $products = [
            [
                'id' => 1,
                'name' => 'video game',
                'value' => '10,20'
            ]
        ];


        return response()->json([
            'products' => $products,
        ]);
    }
}
