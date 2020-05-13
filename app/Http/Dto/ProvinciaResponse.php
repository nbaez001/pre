<?php

namespace App\Http\Dto;

class ProvinciaResponse
{
    public $id;
    public $idDepartamento;
    public $nombre;
    public $ubigeo;
    public $ubigeoReniec;

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of nombre
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of ubigeo
     */
    public function getUbigeo()
    {
        return $this->ubigeo;
    }

    /**
     * Set the value of ubigeo
     *
     * @return  self
     */
    public function setUbigeo($ubigeo)
    {
        $this->ubigeo = $ubigeo;

        return $this;
    }

    /**
     * Get the value of ubigeoReniec
     */
    public function getUbigeoReniec()
    {
        return $this->ubigeoReniec;
    }

    /**
     * Set the value of ubigeoReniec
     *
     * @return  self
     */
    public function setUbigeoReniec($ubigeoReniec)
    {
        $this->ubigeoReniec = $ubigeoReniec;

        return $this;
    }

    /**
     * Get the value of idDepartamento
     */
    public function getIdDepartamento()
    {
        return $this->idDepartamento;
    }

    /**
     * Set the value of idDepartamento
     *
     * @return  self
     */
    public function setIdDepartamento($idDepartamento)
    {
        $this->idDepartamento = $idDepartamento;

        return $this;
    }
}
