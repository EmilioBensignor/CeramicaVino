<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerámica y Vino - Piezas</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
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
            <button id="menu" class="lg:hidden absolute left-6 md:left-10 z-50 outline-none">
                <svg class="w-7 sm:w-8 h-7 sm:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <a href="./index.php" class="text-2xl sm:text-3xl md:text-4xl font-bebas">Ceramica y vino</a>
            <nav class="hidden lg:flex">
                <ul class="flex items-center gap-5 2xl:gap-8">
                    <li><a href="./piezas.php" class="lg:text-xl">Piezas</a></li>
                    <li><a href="./nosotros.php" class="lg:text-xl">Nosotros</a></li>
                    <li class="flex"><a href="./login.php" class="login">Iniciar Sesión</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div id="fondo-menu" class="fixed inset-0 z-40 bg-black/60 opacity-0 invisible transition-all duration-300"></div>
    <div id="menu-lateral" class="menu-lateral w-[75%] max-w-3xs h-screen fixed top-0 left-0 bg-vino shadow-lg z-50">
        <div class="h-full flex flex-col p-6">
            <button id="cruz-cerrar"
                class="absolute top-4 right-6 text-3xl md:text-4xl text-blanco hover:text-primary transition-colors">
                &times;
            </button>
            <nav class="mt-6 md:mt-10">
                <ul class="flex flex-col gap-4 md:gap-6 text-blanco">
                    <li>
                        <a href="./index.php" class="md:text-xl">Inicio</a>
                    </li>
                    <li>
                        <a href="./piezas.php" class="md:text-xl">Piezas</a>
                    </li>
                    <li>
                        <a href="./nosotros.php" class="md:text-xl">Nosotros</a>
                    </li>
                    <li class="flex">
                        <a href="./login.php" class="login">Iniciar Sesión</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <main class="flex flex-col items-center gradiente-principal text-violeta-extra-oscuro">
        <!-- Hero -->
        <section
            class="w-full max-w-[1375px] flex flex-col lg:flex-row 2xl:justify-between items-center gap-6 md:gap-10 lg:gap-32 xl:gap-48 2xl:gap-64 p-6 md:p-10 lg:p-16 2xl:px-0">
            <div
                class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center text-violeta-oscuro gap-6 md:gap-10 2xl:gap-12">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-left lg:text-7xl">Piezas únicas hechas a manor</h1>
                <p class="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl sm:text-xl lg:text-left lg:text-2xl">
                    Explorá tazas, bowls, platos y más. Series limitadas, cada pieza es distinta.
                </p>
            </div>
            <img src="./images/piezas/Hero-Piezas.png" alt="Hero Piezas"
                class="w-64 md:w-80 2xl:w-96 h-64 md:h-80 2xl:h-96 rounded-full shadow-md shadow-black/30 object-cover">
        </section>
        <section
            class="w-full max-w-[1375px] flex flex-col items-center text-center gap-3 md:gap-6 2xl:gap-12 p-6 !pb-0 md:p-10 lg:p-16 2xl:px-0">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violeta-oscuro">Explorá nuestras creaciones
            </h2>
            <!-- Filtros -->
            <div class="w-full flex flex-col lg:flex-row gap-4">
                <div class="lg:w-1/2 md:flex md:justify-between md:gap-4">
                    <div class="md:w-1/2 flex flex-col items-start gap-2">
                        <label for="search" class="text-sm md:text-base text-violeta-oscuro font-medium">Buscar</label>
                        <input type="text" id="search" name="search" placeholder="Buscar piezas..."
                            class="w-full text-sm md:text-base bg-white border border-gray-400 rounded-lg outline-none p-3">
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex flex-col items-start gap-2">
                        <label for="categoria"
                            class="text-sm md:text-base text-violeta-oscuro font-medium">Categoría</label>
                        <select id="categoria" name="categoria"
                            class="w-full text-sm md:text-base border border-gray-400 rounded-lg outline-none p-3 bg-white text-violeta-oscuro cursor-pointer hover:border-vino focus:border-vino transition-colors">
                            <option value="">Todas las categorías</option>
                            <option value="tazas">Tazas</option>
                            <option value="bowls">Bowls</option>
                            <option value="platos">Platos</option>
                            <option value="vasos">Vasos</option>
                            <option value="jarras">Jarras</option>
                            <option value="otros">Otros</option>
                        </select>
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-categoria">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 md:flex md:justify-between md:gap-4">
                    <div class="md:w-1/2 flex flex-col items-start gap-2">
                        <p class="text-sm md:text-base text-violeta-oscuro font-medium">Precio</p>
                        <div class="flex gap-3 md:gap-4">
                            <div class="flex-1 flex flex-col">
                                <label for="precio-min" class="sr-only">Precio mínimo</label>
                                <input type="number" id="precio-min" name="precio-min" placeholder="Mínimo" min="0"
                                    class="w-full text-sm md:text-base bg-white border border-gray-400 rounded-lg outline-none p-3">
                                <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-precio-min">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                        class="flex-shrink-0 text-red-500">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                    </svg>
                                    <p class="text-red-500 text-xs"></p>
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col">
                                <label for="precio-max" class="sr-only">Precio máximo</label>
                                <input type="number" id="precio-max" name="precio-max" placeholder="Máximo" min="0"
                                    class="w-full text-sm md:text-base bg-white border border-gray-400 rounded-lg outline-none p-3">
                                <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-precio-max">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                        class="flex-shrink-0 text-red-500">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                    </svg>
                                    <p class="text-red-500 text-xs"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex flex-col items-start gap-3">
                        <p class="text-sm md:text-base text-violeta-oscuro font-medium">Opciones</p>

                        <div class="md:flex md:gap-4">
                            <div class="flex items-center gap-2">
                                <input type="checkbox" id="stock" name="stock" value="1"
                                    class="w-4 h-4 md:w-5 md:h-5 border border-gray-400 rounded outline-none accent-vino cursor-pointer">
                                <label for="stock" class="text-sm md:text-base text-violeta-oscuro cursor-pointer">En
                                    stock</label>
                            </div>

                            <div class="flex items-center gap-2">
                                <input type="checkbox" id="destacado" name="destacado" value="1"
                                    class="w-4 h-4 md:w-5 md:h-5 border border-gray-400 rounded outline-none accent-vino cursor-pointer">
                                <label for="destacado"
                                    class="text-sm md:text-base text-violeta-oscuro cursor-pointer">Destacados</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Piezas -->
        <section class="w-full max-w-[1375px] flex flex-col gap-6 md:gap-10 p-6 md:p-10 lg:p-16 2xl:px-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                <!-- Card de Pieza -->
                <article
                    class="flex flex-col bg-blanco rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="./images/piezas/Taza.png" alt="Taza artesanal cerámica"
                        class="w-full h-full max-h-96 object-cover hover:scale-105 transition-transform duration-300">
                    <div class="flex flex-col gap-2 p-4">
                        <p class="text-xs md:text-sm text-vino font-semibold uppercase tracking-wide">Tazas</p>
                        <h3 class="text-xl md:text-xl font-bold text-violeta-oscuro">Taza Rustic Beige</h3>
                        <p class="text-sm">10cm x 8cm</p>

                        <p class="text-sm md:text-base text-violeta-oscuro">
                            Taza artesanal hecha a mano con arcilla natural. Acabado mate con tonos tierra. Perfecta
                            para café o té.
                        </p>

                        <div class="border-t border-gray-200 pt-3">
                            <p class="text-2xl font-bold text-vino">$4.500</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <!-- Contacto -->
        <section
            class="w-full max-w-[1375px] flex flex-col items-center text-center gap-3 md:gap-6 2xl:gap-12 p-6 md:p-10 lg:p-16 2xl:px-0">
            <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-violeta-oscuro">
                ¿Buscás algo en particular?
            </h2>
            <p class="text-sm sm:text-base md:text-xl text-violeta-oscuro">
                Escribinos para piezas a medida, sets para regalo o pedidos por volumen.
            </p>
            <button class="boton-primario abrir-modal">Consultar</button>
        </section>
    </main>
    <!-- Formulario -->
    <div id="modal-contacto" class="fixed inset-0 z-50 bg-black/60 opacity-0 invisible transition-all duration-150">
        <div class="h-dvh flex items-center justify-center p-6 overflow-y-auto">
            <div
                class="w-full max-w-md lg:max-w-3xl flex flex-col gap-6 bg-blanco rounded-2xl shadow-xl p-6 transform scale-95 transition-transform duration-200 my-auto">
                <div class="flex justify-between items-center">
                    <p class="text-xl lg:text-2xl text-vino font-semibold">Contactanos</p>
                    <button id="cerrar-modal" class="text-negro cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <form action="componentes/consultas.php" method="POST" id="formulario-contacto"
                    class="flex flex-col gap-4">
                    <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div class="lg:w-1/2">
                            <label for="name"
                                class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Nombre <span
                                    class="text-vino">*</span></label>
                            <input type="text" id="name" name="name" placeholder="Ingrese su nombre" autocomplete="name"
                                required maxlength="30"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                            <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-name">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    class="flex-shrink-0 text-red-500">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                </svg>
                                <p class="text-red-500 text-xs"></p>
                            </div>
                        </div>

                        <div class="lg:w-1/2">
                            <label for="email"
                                class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Email <span
                                    class="text-vino">*</span></label>
                            <input type="email" autocomplete="email" id="email" name="email"
                                placeholder="Ingrese su email" required maxlength="150"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                            <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    class="flex-shrink-0 text-red-500">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                </svg>
                                <p class="text-red-500 text-xs"></p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <div class="lg:w-1/2">
                            <label for="phone"
                                class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Teléfono</label>
                            <input type="tel" id="phone" name="phone" autocomplete="photo"
                                placeholder="Ingrese su teléfono" required maxlength="40"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                            <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    class="flex-shrink-0 text-red-500">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                </svg>
                                <p class="text-red-500 text-xs"></p>
                            </div>
                        </div>

                        <div class="lg:w-1/2">
                            <label for="comment"
                                class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Comentario</label>
                            <textarea id="comment" name="comment" rows="5" placeholder="Ingrese su comentario"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3 resize-none"></textarea>
                            <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-comment">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                    class="flex-shrink-0 text-red-500">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"
                                        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                                </svg>
                                <p class="text-red-500 text-xs"></p>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Enviar mensaje" class="boton-primario self-end mt-2 cursor-pointer">
                </form>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer>
        <div class="w-full bg-vino text-blanco p-6 md:p-10 lg:p-16 2xl:px-0">
            <div
                class="max-w-[1375px] flex flex-col lg:flex-row lg:justify-between items-center lg:items-start text-center gap-6 md:gap-10 mx-auto">
                <a href="./index.php" class="text-2xl sm:text-3xl font-bebas">Ceramica y vino</a>
                <nav>
                    <ul class="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 2xl:gap-16">
                        <div class="flex flex-col md:flex-row gap-3 md:gap-8">
                            <li>
                                <a class="text-xs sm:text-sm lg:text-base" href="./piezas.php">Piezas</a>
                            </li>
                            <li>
                                <a class="text-xs sm:text-sm lg:text-base" href="./nosotros.php">Nosotros</a>
                            </li>
                        </div>
                        <div class="flex flex-col gap-3 lg:gap-4 2xl:gap-8">
                            <li class="flex justify-center items-center gap-1 sm:gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01" />
                                    </g>
                                </svg>
                                <a href="https://www.instagram.com/ceramicayvino/" target="_blank"
                                    class="text-xs sm:text-sm lg:text-base">@ceramicayvino</a>
                            </li>
                            <li class="flex justify-center items-center gap-1 sm:gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path
                                            d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <path d="m3 7l9 6l9-6" />
                                    </g>
                                </svg>
                                <a href="mailto:holaceramicayvino@gmail.com" target="_blank"
                                    class="text-xs sm:text-sm lg:text-base">holaceramicayvino@gmail.com</a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="w-full flex justify-center bg-violeta-extra-oscuro py-3 md:py-4 px-6">
            <div class="max-w-[1375px]">
                <p class="text-center text-[0.625rem] md:text-xs text-blanco text-xs">© 2025 Cerámica Vino. Todos los
                    derechos reservados.</p>
            </div>
        </div>
    </footer>
    <script src="./main.js"></script>
</body>

</html>