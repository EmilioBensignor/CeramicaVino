<?php
session_start();
$email = $_POST['email'];
$password = $_POST['password'];

include 'conexion.php';

$consultar_usuario = mysqli_query($datosDB, "SELECT email, password FROM usuarios WHERE email = '$email'");

if (mysqli_num_rows($consultar_usuario) == 0) {
    header("Location: ../register.php?usuario_inexistente");
} else {
    $separar_datos = mysqli_fetch_assoc($consultar_usuario);
    if (password_verify($password, $separar_datos['password'])) {
        $_SESSION['usuarios'] = $email;
        header("Location: ../piezas.php?ok_ingreso");
    } else {
        header("Location: ../login.php?error_password");
    }
}
?>