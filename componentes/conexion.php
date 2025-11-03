<?php
// Conexion a XAMPP
// $datosDB = mysqli_connect("localhost", "root", "", "ceramica_vino") or exit ("Error al conectar a la base de datos");

// Conexion a InfinityFree
$datosDB = mysqli_connect("sql203.infinityfree.com", "if0_39630596", "XrrSWnQ6Dy1", "if0_39630596_ceramica_vino") or exit ("Error al conectar a la base de datos");

// Establecer charset UTF-8 para caracteres especiales
mysqli_set_charset($datosDB, "utf8mb4");
?>