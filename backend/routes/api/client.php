<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('',      'App\Http\Controllers\ApiDash\ClientController@Index');
Route::post('',     'App\Http\Controllers\ApiDash\ClientController@store');