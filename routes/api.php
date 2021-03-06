<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('ubigeo/listarDepartamento', 'Generic\UbigeoController@listarDepartamento');
Route::post('ubigeo/listarProvincia', 'Generic\UbigeoController@listarProvincia');
Route::post('ubigeo/listarDistrito', 'Generic\UbigeoController@listarDistrito');

Route::post('inscripcion/registrar', 'Inscripcion\RegistroController@registrar');