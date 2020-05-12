<?php

namespace App\Http\Service;

class UbigeoService
{
    public function listarDepartamento($req)
    {
        $dashDao = new DashBoardDao();
        return $dashDao->listarDepartamento($req);
    }
}
