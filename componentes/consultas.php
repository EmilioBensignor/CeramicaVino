<?php
// Recibir datos del formulario por POST
$nombre = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

// Conectar con la DB
include 'conexion.php';

// Enviar datos a la tabla

mysqli_query($datosDB, "INSERT INTO consultas VALUES (DEFAULT, '$nombre', '$email', '$phone', '$comment')");