<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models\Client;

class ClientController extends Controller
{
    public function Index()
    {
        $clientes = Client::all();

        return response()->json([
            'clientes' => $clientes,
        ]);
    }

    // public function store(Request $request, Client $client)
    // {
    //     return client::created([
    //         'type' => $request->type,
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'phone' => $request->phone,
    //         'state' => $request->state,
    //         'city' => $request->city,
    //         'street' => $request->street,
    //         'number' => $request->number,
    //     ]);
    // }
    public function store(Request $request, Client $client)
    {
        return client::create($request->all());
    }
}
