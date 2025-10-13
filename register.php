<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cerámica y Vino - Registrarse</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
        rel="stylesheet" />
</head>

<body class="autenticacion">
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
    <main class="flex flex-col items-center text-violeta-extra-oscuro">
        <section class="w-full max-w-[1375px] flex flex-col items-center gap-6 md:gap-10 p-6 md:p-10 lg:p-16 2xl:px-0">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Registrarse</h1>
            <form action="componentes/registrar_cliente.php" method="POST"
                class="w-full max-w-md lg:max-w-3xl flex flex-col gap-4">
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div class="lg:w-1/2">
                        <label for="username"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Nombre de usuario
                            <span class="text-vino">*</span></label>
                        <input type="text" id="username" name="username" autocomplete="username"
                            placeholder="Ingrese su nombre de usuario" required maxlength="30"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-username">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                    <div class="lg:w-1/2">
                        <label for="email"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Correo electrónico
                            <span class="text-vino">*</span></label>
                        <input type="email" id="email" name="email" autocomplete="email"
                            placeholder="Ingrese su correo electrónico" required maxlength="150"
                            class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3">
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div class="lg:w-1/2">
                        <label for="password"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Contraseña <span
                                class="text-vino">*</span></label>
                        <div class="relative">
                            <input type="password" id="password" name="password" placeholder="********" required
                                maxlength="30" autocomplete="new-password"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3 pr-12">
                            <button type="button" id="toggle-password"
                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-violeta-oscuro transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                                        <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                        <path
                                            d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                    <div class="lg:w-1/2">
                        <label for="repeat-password"
                            class="block text-sm lg:text-base 2xl:text-xl text-violeta-oscuro mb-1">Repetir contraseña
                            <span class="text-vino">*</span></label>
                        <div class="relative">
                            <input type="password" id="repeat-password" name="repeat-password" placeholder="********"
                                required autocomplete="new-password" maxlength="30"
                                class="w-full text-xs lg:text-base 2xl:text-xl border border-gray-400 rounded-lg outline-none p-3 pr-12">
                            <button type="button" id="toggle-repeat-password"
                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-violeta-oscuro transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                                        <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2">
                                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                        <path
                                            d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div class="w-full min-h-0.5 flex gap-1 invisible mt-1" id="error-repeat-password">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                class="flex-shrink-0 text-red-500">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" />
                            </svg>
                            <p class="text-red-500 text-xs"></p>
                        </div>
                    </div>
                </div>
                <p class="flex justify-center items-center gap-1 text-center text-sm">
                    Si ya tienes una cuenta,
                    <a href="./login.php" class="text-vino underline"> inicia sesión</a>
                </p>
                <input type="submit" value="Crear cuenta" class="boton-primario lg:w-max lg:self-center cursor-pointer">
            </form>
        </section>
    </main>
    <!-- Modal exito -->
    <?php if (isset($_GET['usuario_inexistente'])) { ?>
        <div id="modal-exito" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div class="w-[90%] max-w-sm flex flex-col items-center gap-6 bg-white rounded-2xl p-6">
                <div class="w-full flex justify-between items-center">
                    <h3 class="text-2xl font-semibold text-vino">No se encontró un usuario</h3>
                    <button onclick="cerrarModalExito()"
                        class="text-2xl cursor-pointer bg-transparent border-none">&times;</button>
                </div>
                <p class="text-dark">Llena el formulario para registrarte</p>
                <button onclick="cerrarModalExito()" class="boton-primario w-full">Cerrar</button>
            </div>
        </div>
        <script>document.body.style.overflow = 'hidden';</script>
    <?php } ?>
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