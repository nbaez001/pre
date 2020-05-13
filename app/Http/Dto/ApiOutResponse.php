<?php

namespace App\Http\Dto;

class ApiOutResponse
{
    public $rCodigo;
    public $rMensaje;
    public $result;

    public function __construct($rCodigo, $rMensaje, $result)
    {
        $this->rCodigo = $rCodigo;
        $this->rMensaje = $rMensaje;
        $this->result = $result;
    }

    /**
     * Get the value of rCodigo
     */
    public function getRCodigo()
    {
        return $this->rCodigo;
    }

    /**
     * Set the value of rCodigo
     *
     * @return  self
     */
    public function setRCodigo($rCodigo)
    {
        $this->rCodigo = $rCodigo;

        return $this;
    }

    /**
     * Get the value of rMensaje
     */
    public function getRMensaje()
    {
        return $this->rMensaje;
    }

    /**
     * Set the value of rMensaje
     *
     * @return  self
     */
    public function setRMensaje($rMensaje)
    {
        $this->rMensaje = $rMensaje;

        return $this;
    }

    /**
     * Get the value of result
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Set the value of result
     *
     * @return  self
     */
    public function setResult($result)
    {
        $this->result = $result;

        return $this;
    }
}
