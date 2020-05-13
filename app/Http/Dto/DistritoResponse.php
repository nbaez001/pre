<?php

namespace App\Http\Dto;

class DistritoResponse
{
    public $id;
    public $idProvincia;
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
     * Get the value of idProvincia
     */ 
    public function getIdProvincia()
    {
        return $this->idProvincia;
    }

    /**
     * Set the value of idProvincia
     *
     * @return  self
     */ 
    public function setIdProvincia($idProvincia)
    {
        $this->idProvincia = $idProvincia;

        return $this;
    }
}
