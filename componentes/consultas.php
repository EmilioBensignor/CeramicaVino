<?php
$nombre = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

include 'conexion.php';

mysqli_query($datosDB, "INSERT INTO consultas VALUES (DEFAULT, '$nombre', '$email', '$phone', '$comment')");

header("Location: ../index.php?ok_consulta");
?>