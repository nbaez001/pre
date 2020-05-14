<?php

namespace App\Http\Controllers\Inscripcion;

use App\Http\Controllers\Controller;
use App\Http\Service\RegistroService;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registrar(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $dashService = new RegistroService();
        return response()->json($dashService->registrar($data));
    }
}
