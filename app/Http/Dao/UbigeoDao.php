<?php

namespace App\Http\Dao;

use App\Http\Dto\ApiOutResponse;
use App\Http\Dto\DepartamentoResponse;
use App\Http\Dto\DistritoResponse;
use App\Http\Dto\ProvinciaResponse;
use DB;
// use Illuminate\Support\Facades\DB;

class UbigeoDao
{
    public function listarDepartamento()
    {
        $rs = DB::select('call PPN_S_DEPARTAMENTO(@cod,@msg)');
        $resp = DB::select('select @cod as rcodigo, @msg as rmensaje');

        $lista = array();
        foreach ($rs as $i => $val) {
            $obj = new DepartamentoResponse();
            $obj->setId(intval($val->ID));
            $obj->setNombre($val->NOMBRE);
            $obj->setUbigeo($val->UBIGEO);
            $obj->setUbigeoReniec($val->UBIGEO_RENIEC);

            $lista[] = $obj;
        }

        $out = new ApiOutResponse(intval($resp[0]->rcodigo), $resp[0]->rmensaje, $lista);
        return $out;
    }


    public function listarProvincia($req)
    {
        $rs = DB::select('call PPN_S_PROVINCIA(?,@cod,@msg)', [$req['idDepartamento']]);
        $resp = DB::select('select @cod as rcodigo, @msg as rmensaje');

        $lista = array();
        foreach ($rs as $i => $val) {
            $obj = new ProvinciaResponse();
            $obj->setId(intval($val->ID));
            $obj->setIdDepartamento(intval($val->ID_DEPARTAMENTO));
            $obj->setNombre($val->NOMBRE);
            $obj->setUbigeo($val->UBIGEO);
            $obj->setUbigeoReniec($val->UBIGEO_RENIEC);

            $lista[] = $obj;
        }

        $out = new ApiOutResponse(intval($resp[0]->rcodigo), $resp[0]->rmensaje, $lista);
        return $out;
    }

    public function listarDistrito($req)
    {
        $rs = DB::select('call PPN_S_DISTRITO(?,@cod,@msg)', [$req['idProvincia']]);
        $resp = DB::select('select @cod as rcodigo, @msg as rmensaje');

        $lista = array();
        foreach ($rs as $i => $val) {
            $obj = new DistritoResponse();
            $obj->setId(intval($val->ID));
            $obj->setIdProvincia(intval($val->ID_PROVINCIA));
            $obj->setNombre($val->NOMBRE);
            $obj->setUbigeo($val->UBIGEO);
            $obj->setUbigeoReniec($val->UBIGEO_RENIEC);

            $lista[] = $obj;
        }

        $out = new ApiOutResponse(intval($resp[0]->rcodigo), $resp[0]->rmensaje, $lista);
        return $out;
    }
}
