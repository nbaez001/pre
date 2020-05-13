<?php

namespace App\Http\Controllers\Generic;

use App\Http\Controllers\Controller;
use App\Http\Service\UbigeoService;
use Illuminate\Http\Request;

class UbigeoController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function listarDepartamento(Request $request)
    {
        $dashService = new UbigeoService();
        return response()->json($dashService->listarDepartamento());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function listarProvincia(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $dashService = new UbigeoService();
        return response()->json($dashService->listarProvincia($data));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function listarDistrito(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $dashService = new UbigeoService();
        return response()->json($dashService->listarDistrito($data));
    }
}
