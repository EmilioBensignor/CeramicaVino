<?php
$name = $_POST['name'];
$category = $_POST['category'];
$medidas = $_POST['medidas'];
$stock = $_POST['stock'];
$precio = $_POST['precio'];
$descripcion = $_POST['descripcion'];

// $img_name = $_FILES['image']['name'];
$img_type = $_FILES['image']['type'];
$img_size = $_FILES['image']['size'];
$img_tmp = $_FILES['image']['tmp_name'];

if ($img_type != 'image/jpeg' && $img_type != 'image/gif' && $img_type != 'image/png') {
    header("Location: index.php?error_formato");
} else if ($img_size > 200000) {
    header("Location: index.php?error_tamano");
} else {
    include("../componentes/conexion.php");

    $cod_img = fopen($img_tmp, "r+");
    $cod_img_content = fread($cod_img, $img_size);
    $cod_img_table = addslashes($cod_img_content);

    mysqli_query($datosDB, "INSERT INTO piezas VALUES (DEFAULT, '$name', '$category', '$cod_img_table', '$img_type', '$medidas', $stock, $precio, '$descripcion')");

    header("Location: index.php?ok_carga");
}
?>