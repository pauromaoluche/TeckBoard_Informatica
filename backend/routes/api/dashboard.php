<?php 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('clients', 'App\Http\Controllers\ApiDash\HomeController@Client');
Route::get('products', 'App\Http\Controllers\ApiDash\HomeController@Product');