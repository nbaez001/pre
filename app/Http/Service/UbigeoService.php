<?php

namespace App\Http\Service;

use App\Http\Dao\UbigeoDao;

class UbigeoService
{
    public function listarDepartamento()
    {
        $dashDao = new UbigeoDao();
        return $dashDao->listarDepartamento();
    }

    public function listarProvincia($req)
    {
        $dashDao = new UbigeoDao();
        return $dashDao->listarProvincia($req);
    }

    public function listarDistrito($req)
    {
        $dashDao = new UbigeoDao();
        return $dashDao->listarDistrito($req);
    }
}
