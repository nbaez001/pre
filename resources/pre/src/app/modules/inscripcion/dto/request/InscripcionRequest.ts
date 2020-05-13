export interface InscripcionRequest {
    id: number;
    dni: string;
    nombre: string;
    apellidoPat: string;
    apellidoMat: string;
    celular: string;
    direccion: string;
    idDepartamento: number;
    idProvincia: number;
    idDistrito: number;
    fechaInscripcion: Date;

    nomDepartamento: string;
    nomProvincia: string;
    nomDistrito: string;
}
