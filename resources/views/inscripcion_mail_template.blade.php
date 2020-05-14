<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: auto;
        }
        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>
<body>
    <p>Felicidades has finalizado tu inscripcion en la <b>Academia Pre-Universitaria el Nazareno</b>, nuestro personal se
        contactara contigo para completar el proceso de inscripcion.</p>
    <table>
        <thead>
            <tr>
                <th colspan="2">DATOS DEL ESTUDIANTE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DNI</td>
                <td>{{ $data['dni']}}</td>
            </tr>
            <tr>
                <td>NOMBRES</td>
                <td>{{ $data['nombre']}}</td>
            </tr>
            <tr>
                <td>APELLIDO PATERNO</td>
                <td>{{ $data['apellidoPat']}}</td>
            </tr>
            <tr>
                <td>APELLIDO MATERNO</td>
                <td>{{ $data['apellidoMat']}}</td>
            </tr>
            <tr>
                <td>CELULAR</td>
                <td>{{ $data['celular']}}</td>
            </tr>
            <tr>
                <td>EMAIL</td>
                <td>{{ $data['email']}}</td>
            </tr>
            <tr>
                <td>DIRECCION</td>
                <td>{{ $data['direccion']}}</td>
            </tr>
            <tr>
                <td>UBIGEO</td>
                <td>{{ $data['nomDepartamento']}}/{{ $data['nomProvincia']}}/{{ $data['nomDistrito']}}</td>
            </tr>
        </tbody>
    </table>
    <p>Si existen dudas respecto al proceso de inscripcion comuniquese al numero: 966028287</p>
</body>
</html>