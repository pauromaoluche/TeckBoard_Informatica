<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', 'App\Http\Controllers\ApiDash\AuthController@Login');