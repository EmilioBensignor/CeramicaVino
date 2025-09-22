<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Conectar con la DB
include 'conexion.php';

// Enviar datos a la tabla
mysqli_query($datosDB, "INSERT INTO usuarios VALUES ('$username', '$email', '$password')");

header("Location: ../login.php?ok_registro");
?>