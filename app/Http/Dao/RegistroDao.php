<?php

namespace App\Http\Dao;

use App\Http\Dto\ApiOutResponse;
use DB;
// use Illuminate\Support\Facades\DB;

class RegistroDao
{
    public function registrar($data)
    {
        $rs = DB::select('call PPN_I_POSTULANTE(?,?,?,?,?,?,?,?,?,?,@cod,@msg)', [$data['dni'], $data['nombre'], $data['apellidoPat'], $data['apellidoMat'], $data['celular'], $data['email'], $data['direccion'], $data['idDepartamento'], $data['idProvincia'], $data['idDistrito']]);
        $resp = DB::select('select @cod as rcodigo, @msg as rmensaje');

        $out = new ApiOutResponse(intval($resp[0]->rcodigo), $resp[0]->rmensaje, null);
        return $out;
    }
}
