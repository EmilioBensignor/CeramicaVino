<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cerámica y Vino | Admin</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
        rel="stylesheet" />
</head>

<body>
    <!-- Header -->
    <header
        class="flex flex-col items-center md:flex-row md:justify-between gap-4 md:gap-8 sticky top-0 z-50 bg-vino text-blanco py-4 md:py-6 px-6 md:px-10 lg:px-16">
        <div class="w-full max-w-[1375px] flex justify-center lg:justify-between items-center mx-auto">
            <a href="../index.php" class="text-2xl sm:text-3xl md:text-4xl font-bebas">Ceramica y vino</a>
        </div>
    </header>
    <main class="flex flex-col items-center text-violeta-extra-oscuro">
        <section
            class="w-full max-w-[1375px] flex flex-col items-center gap-6 md:gap-10 2xl:gap-12 p-6 md:p-10 lg:p-16 2xl:px-0">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Administrar Productos</h1>
            <form action="cargar_productos.php" method="POST" enctype="multipart/form-data"
                class="w-full max-w-md lg:max-w-3xl flex flex-col gap-4">
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div class="lg:w-1/2">
                        <label for="name"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Nombre del producto
                            <span class="text-vino">*</span></label>
                        <input type="text" id="name" name="name" autocomplete="off"
                            placeholder="Ingrese el nombre del producto" required maxlength="100"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                    </div>
                    <div class="lg:w-1/2">
                        <label for="category"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Categoría
                            <span class="text-vino">*</span></label>
                        <select id="category" name="category" required
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                            <option value="">Seleccione una categoría</option>
                            <option value="taza">Taza</option>
                            <option value="cuenco">Cuenco</option>
                            <option value="plato">Plato</option>
                            <option value="bowl">Bowl</option>
                            <option value="maceta">Maceta</option>
                        </select>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div class="lg:w-1/2">
                        <label for="image"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Imagen del producto
                            <span class="text-vino">*</span></label>
                        <input type="file" id="image" name="image" accept="image/*" required
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-vino file:text-blanco hover:file:bg-violeta-oscuro">
                    </div>
                    <div class="lg:w-1/2">
                        <label for="medidas"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Medidas
                            <span class="text-vino">*</span></label>
                        <input type="text" id="medidas" name="medidas"
                            placeholder="Ej: 10cm x 15cm" required maxlength="50"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div class="lg:w-1/2">
                        <label for="stock"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Stock
                            <span class="text-vino">*</span></label>
                        <input type="number" id="stock" name="stock" min="0" required
                            placeholder="Cantidad disponible"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                    </div>
                    <div class="lg:w-1/2">
                        <label for="precio"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Precio
                            <span class="text-vino">*</span></label>
                        <input type="number" id="precio" name="precio" min="0" step="0.01" required
                            placeholder="0.00"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                    </div>
                </div>

                <!-- Descripción -->
                <div>
                    <label for="descripcion"
                        class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Descripción
                        <span class="text-vino">*</span></label>
                    <textarea id="descripcion" name="descripcion" rows="4" required maxlength="500"
                        placeholder="Descripción del producto"
                        class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3 resize-none"></textarea>
                </div>

                <input type="submit" value="Agregar Producto" class="boton-primario lg:w-max lg:self-center cursor-pointer">
            </form>
        </section>
    </main>
    <!-- Footer -->
    <footer>
        <div class="w-full bg-vino text-blanco p-6 md:p-10 lg:p-16 2xl:px-0">
            <div
                class="max-w-[1375px] flex flex-col lg:flex-row lg:justify-between items-center lg:items-start text-center gap-6 md:gap-10 mx-auto">
                <a href="./index.php" class="text-2xl sm:text-3xl font-bebas">Ceramica y vino</a>
            </div>
        </div>
        <div class="w-full flex justify-center bg-violeta-extra-oscuro py-3 md:py-4 px-6">
            <div class="max-w-[1375px]">
                <p class="text-center text-[0.625rem] md:text-xs text-blanco text-xs">© 2025 Cerámica Vino. Todos los
                    derechos reservados.</p>
            </div>
        </div>
    </footer>
    <!-- Modal exito carga -->
    <?php if (isset($_GET['ok_carga'])) { ?>
        <div id="modal-exito" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div class="w-[90%] max-w-sm flex flex-col items-center gap-6 bg-white rounded-2xl p-6">
                <div class="w-full flex justify-between items-center">
                    <h3 class="text-2xl font-semibold text-vino">¡Producto Cargado!</h3>
                    <button onclick="cerrarModalExito()"
                        class="text-2xl cursor-pointer bg-transparent border-none">&times;</button>
                </div>
                <p class="text-dark">El producto se ha cargado correctamente.</p>
                <button onclick="cerrarModalExito()" class="boton-primario w-full">Cerrar</button>
            </div>
        </div>
        <script>document.body.style.overflow = 'hidden';</script>
    <?php } ?>
    <!-- Modal error formato -->
    <?php if (isset($_GET['error_formato'])) { ?>
        <div id="modal-exito" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div class="w-[90%] max-w-sm flex flex-col items-center gap-6 bg-white rounded-2xl p-6">
                <div class="w-full flex justify-between items-center">
                    <h3 class="text-2xl font-semibold text-vino">Formato Inválido</h3>
                    <button onclick="cerrarModalExito()"
                        class="text-2xl cursor-pointer bg-transparent border-none">&times;</button>
                </div>
                <p class="text-dark">Solo se permiten imágenes en formato JPG, GIF o PNG.</p>
                <button onclick="cerrarModalExito()" class="boton-primario w-full">Cerrar</button>
            </div>
        </div>
        <script>document.body.style.overflow = 'hidden';</script>
    <?php } ?>
    <!-- Modal error tamaño -->
    <?php if (isset($_GET['error_tamano'])) { ?>
        <div id="modal-exito" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div class="w-[90%] max-w-sm flex flex-col items-center gap-6 bg-white rounded-2xl p-6">
                <div class="w-full flex justify-between items-center">
                    <h3 class="text-2xl font-semibold text-vino">Imagen Demasiado Grande</h3>
                    <button onclick="cerrarModalExito()"
                        class="text-2xl cursor-pointer bg-transparent border-none">&times;</button>
                </div>
                <p class="text-dark">La imagen no debe superar los 195KB (200000 bytes).</p>
                <button onclick="cerrarModalExito()" class="boton-primario w-full">Cerrar</button>
            </div>
        </div>
        <script>document.body.style.overflow = 'hidden';</script>
    <?php } ?>
    <script src="../main.js"></script>
</body>

</html>