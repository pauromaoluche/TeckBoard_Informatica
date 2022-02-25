<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Database\Eloquent\Factories\Factory;
class AuthController extends Controller
{
    public function Login(LoginRequest $request)
    {

        $input = $request->validated();

        $credentials = [
            'email' => $input['email'],
            'password' => $input['password']
        ];

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()*60
        ]);
    }
}
