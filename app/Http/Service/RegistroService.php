<?php

namespace App\Http\Service;

use App\Http\Dao\RegistroDao;
use App\Mail\InscripcionMail;
use Illuminate\Support\Facades\Mail;

class RegistroService
{
    public function registrar($data)
    {
        $dashDao = new RegistroDao();
        $out = $dashDao->registrar($data);

        if ($out->rCodigo == 1) {
            $data['asunto'] = 'Inscripcion Pre Nazareno';
            $data['destinatario'] = $data['email'];
            Mail::send(new InscripcionMail($data));

            $data['asunto'] = 'Inscripcion Pre Nazareno';
            $data['destinatario'] = 'elnazarenovraem@gmail.com';
            Mail::send(new InscripcionMail($data));
        }

        return $out;
    }
}
