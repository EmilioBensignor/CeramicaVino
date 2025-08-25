// Menu Lateral
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuLateral = document.getElementById('menu-lateral');
    const cerrar = document.getElementById('cruz-cerrar');
    const fondoMenu = document.getElementById('fondo-menu');

    function abrirMenu() {
        menuLateral.classList.add('open');
        fondoMenu.classList.remove('opacity-0', 'invisible');
        fondoMenu.classList.add('opacity-100', 'visible');
        document.body.style.overflow = 'hidden';
    }

    function cerrarMenu() {
        menuLateral.classList.remove('open');
        fondoMenu.classList.remove('opacity-100', 'visible');
        fondoMenu.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = '';
    }

    menu.addEventListener('click', abrirMenu);
    cerrar.addEventListener('click', cerrarMenu);
    fondoMenu.addEventListener('click', cerrarMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('open')) {
            cerrarMenu();
        }
    });
});

// Galeria
document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor-galeria');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');

    if (!contenedor || !botonAnterior || !botonSiguiente) return;

    let indiceActual = 0;
    const totalImagenes = 12;

    function obtenerImagenesPorVista() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }

    function obtenerIndiceMaximo() {
        const imagenesPorVista = obtenerImagenesPorVista();
        return Math.max(0, totalImagenes - imagenesPorVista);
    }

    function actualizarCarousel() {
        const imagenesPorVista = obtenerImagenesPorVista();
        const anchoSlide = 100 / imagenesPorVista;
        contenedor.style.transform = `translateX(-${indiceActual * anchoSlide}%)`;
    }

    function irSiguiente() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual >= indiceMaximo ? 0 : indiceActual + 1;
        actualizarCarousel();
    }

    function irAnterior() {
        const indiceMaximo = obtenerIndiceMaximo();
        indiceActual = indiceActual <= 0 ? indiceMaximo : indiceActual - 1;
        actualizarCarousel();
    }

    function manejarRedimension() {
        const indiceMaximo = obtenerIndiceMaximo();
        if (indiceActual > indiceMaximo) {
            indiceActual = indiceMaximo;
        }
        actualizarCarousel();
    }

    botonSiguiente.addEventListener('click', irSiguiente);
    botonAnterior.addEventListener('click', irAnterior);
    window.addEventListener('resize', manejarRedimension);

    actualizarCarousel();
    setInterval(irSiguiente, 5000);
});

// Eventos
document.addEventListener('DOMContentLoaded', function () {
    const contenedorEventos = document.getElementById('contenedor-eventos');
    const botonAnteriorEventos = document.getElementById('anterior-eventos');
    const botonSiguienteEventos = document.getElementById('siguiente-eventos');

    if (!contenedorEventos || !botonAnteriorEventos || !botonSiguienteEventos) return;

    let indiceActualEventos = 0;
    const totalEventos = 3;

    function obtenerEventosPorVista() {
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function obtenerIndiceMaximoEventos() {
        const eventosPorVista = obtenerEventosPorVista();
        return Math.max(0, totalEventos - eventosPorVista);
    }

    function actualizarCarouselEventos() {
        const eventosPorVista = obtenerEventosPorVista();
        const anchoSlide = 100 / eventosPorVista;
        contenedorEventos.style.transform = `translateX(-${indiceActualEventos * anchoSlide}%)`;
    }

    function irSiguienteEvento() {
        const indiceMaximo = obtenerIndiceMaximoEventos();
        indiceActualEventos = indiceActualEventos >= indiceMaximo ? 0 : indiceActualEventos + 1;
        actualizarCarouselEventos();
    }

    function irAnteriorEvento() {
        const indiceMaximo = obtenerIndiceMaximoEventos();
        indiceActualEventos = indiceActualEventos <= 0 ? indiceMaximo : indiceActualEventos - 1;
        actualizarCarouselEventos();
    }

    function manejarRedimensionEventos() {
        const indiceMaximo = obtenerIndiceMaximoEventos();
        if (indiceActualEventos > indiceMaximo) {
            indiceActualEventos = indiceMaximo;
        }
        actualizarCarouselEventos();
    }

    botonSiguienteEventos.addEventListener('click', irSiguienteEvento);
    botonAnteriorEventos.addEventListener('click', irAnteriorEvento);
    window.addEventListener('resize', manejarRedimensionEventos);

    actualizarCarouselEventos();
});

// Modal Formulario de Contacto
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal-contacto');
    if (!modal) return;

    const botonesAbrir = document.querySelectorAll('.abrir-modal');
    const botonCerrar = document.getElementById('cerrar-modal');
    const formulario = document.getElementById('formulario-contacto');
    const modalContent = modal.querySelector('.bg-blanco');

    function abrirModal() {
        modal.classList.remove('opacity-0', 'invisible');
        modal.classList.add('opacity-100', 'visible');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function cerrarModal() {
        modal.classList.remove('opacity-100', 'visible');
        modal.classList.add('opacity-0', 'invisible');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        document.body.style.overflow = '';
    }

    botonesAbrir.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal();
        });
    });

    botonCerrar.addEventListener('click', cerrarModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
            cerrarModal();
        }
    });

    function mostrarError(campoId, mensaje) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('invisible');
            errorDiv.classList.add('visible');
            errorDiv.querySelector('p').textContent = mensaje;
        }
    }

    function limpiarError(campoId) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('visible');
            errorDiv.classList.add('invisible');
            errorDiv.querySelector('p').textContent = '';
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarTelefono(telefono) {
        const regex = /^\d{8,15}$/;
        return regex.test(telefono.replace(/\s/g, ''));
    }

    function validarFormulario() {
        let esValido = true;

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        limpiarError('nombre');
        limpiarError('email');
        limpiarError('telefono');
        limpiarError('comentario');

        if (!nombre) {
            mostrarError('nombre', 'El nombre es requerido');
            esValido = false;
        } else if (nombre.length < 2) {
            mostrarError('nombre', 'El nombre debe tener al menos 2 caracteres');
            esValido = false;
        }

        if (!email) {
            mostrarError('email', 'El email es requerido');
            esValido = false;
        } else if (!validarEmail(email)) {
            mostrarError('email', 'Ingresa un email válido (ejemplo@dominio.com)');
            esValido = false;
        }

        if (!telefono) {
            mostrarError('telefono', 'El teléfono es requerido');
            esValido = false;
        } else if (!validarTelefono(telefono)) {
            mostrarError('telefono', 'Ingresa un teléfono válido (8-15 dígitos)');
            esValido = false;
        }

        return esValido;
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        const datos = {
            nombre: document.getElementById('nombre').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            comentario: document.getElementById('comentario').value.trim()
        };

        console.log('Datos del formulario:', datos);

        formulario.reset();
        limpiarError('nombre');
        limpiarError('email');
        limpiarError('telefono');
        limpiarError('comentario');
        cerrarModal();
    });
});

// Carousel Equipo
document.addEventListener('DOMContentLoaded', function () {
    const contenedorEquipo = document.getElementById('contenedor-equipo');
    const botonAnteriorEquipo = document.getElementById('anterior-equipo');
    const botonSiguienteEquipo = document.getElementById('siguiente-equipo');

    if (!contenedorEquipo || !botonAnteriorEquipo || !botonSiguienteEquipo) return;

    let indiceActualEquipo = 0;
    const totalMiembros = 6;

    function obtenerMiembrosPorVista() {
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function obtenerIndiceMaximoEquipo() {
        const miembrosPorVista = obtenerMiembrosPorVista();
        return Math.max(0, totalMiembros - miembrosPorVista);
    }

    function actualizarCarouselEquipo() {
        const miembrosPorVista = obtenerMiembrosPorVista();
        const anchoSlide = 100 / miembrosPorVista;
        contenedorEquipo.style.transform = `translateX(-${indiceActualEquipo * anchoSlide}%)`;
    }

    function irSiguienteMiembro() {
        const indiceMaximo = obtenerIndiceMaximoEquipo();
        indiceActualEquipo = indiceActualEquipo >= indiceMaximo ? 0 : indiceActualEquipo + 1;
        actualizarCarouselEquipo();
    }

    function irAnteriorMiembro() {
        const indiceMaximo = obtenerIndiceMaximoEquipo();
        indiceActualEquipo = indiceActualEquipo <= 0 ? indiceMaximo : indiceActualEquipo - 1;
        actualizarCarouselEquipo();
    }

    function manejarRedimensionEquipo() {
        const indiceMaximo = obtenerIndiceMaximoEquipo();
        if (indiceActualEquipo > indiceMaximo) {
            indiceActualEquipo = indiceMaximo;
        }
        actualizarCarouselEquipo();
    }

    botonSiguienteEquipo.addEventListener('click', irSiguienteMiembro);
    botonAnteriorEquipo.addEventListener('click', irAnteriorMiembro);
    window.addEventListener('resize', manejarRedimensionEquipo);

    actualizarCarouselEquipo();
    setInterval(irSiguienteMiembro, 5000);
});

// Validación de Login
document.addEventListener('DOMContentLoaded', function () {
    // Solo ejecutar en la página de login
    if (document.getElementById('nombre-usuario')) {
        return;
    }
    
    const formularioLogin = document.querySelector('form');

    if (!formularioLogin || !document.getElementById('correo') || !document.getElementById('contraseña')) {
        return;
    }

    function mostrarError(campoId, mensaje) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('invisible');
            errorDiv.classList.add('visible');
            errorDiv.querySelector('p').textContent = mensaje;
        }
    }

    function limpiarError(campoId) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('visible');
            errorDiv.classList.add('invisible');
            errorDiv.querySelector('p').textContent = '';
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarLogin() {
        let esValido = true;

        const correo = document.getElementById('correo').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();

        limpiarError('correo');
        limpiarError('contraseña');

        if (!correo) {
            mostrarError('correo', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        }

        if (!contraseña) {
            mostrarError('contraseña', 'La contraseña es requerida');
            esValido = false;
        } else if (contraseña.length < 8) {
            mostrarError('contraseña', 'La contraseña debe tener al menos 8 caracteres');
            esValido = false;
        }

        return esValido;
    }

    const toggleButton = document.getElementById('toggle-contraseña');
    const passwordInput = document.getElementById('contraseña');

    if (toggleButton && passwordInput) {
        const eyeIcons = toggleButton.querySelectorAll('svg');
        const eyeVisible = eyeIcons[0];
        const eyeHidden = eyeIcons[1];

        if (eyeVisible && eyeHidden) {
            eyeHidden.style.display = 'none';

            toggleButton.addEventListener('click', function () {
                const isPassword = passwordInput.type === 'password';

                passwordInput.type = isPassword ? 'text' : 'password';

                if (isPassword) {
                    eyeVisible.style.display = 'none';
                    eyeHidden.style.display = 'block';
                } else {
                    eyeHidden.style.display = 'none';
                    eyeVisible.style.display = 'block';
                }
            });
        }
    }

    document.getElementById('correo').addEventListener('blur', function() {
        const correo = this.value.trim();
        limpiarError('correo');
        
        if (correo && !validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    document.getElementById('contraseña').addEventListener('blur', function() {
        const contraseña = this.value.trim();
        limpiarError('contraseña');
        
        if (contraseña && contraseña.length < 8) {
            mostrarError('contraseña', 'La contraseña debe tener al menos 8 caracteres');
        }
    });

    formularioLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validarLogin()) {
            return;
        }

        const datos = {
            correo: document.getElementById('correo').value.trim(),
            contraseña: document.getElementById('contraseña').value.trim()
        };

        console.log('Datos de login:', datos);
        formularioLogin.reset();
        limpiarError('correo');
        limpiarError('contraseña');
        alert('Login exitoso! (Simulado)');
    });
});

// Validación de Registro
document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('nombre-usuario')) {
        return;
    }
    
    const formularioRegistro = document.querySelector('form');

    if (!formularioRegistro || !document.getElementById('repetir-contraseña')) {
        return;
    }

    function mostrarError(campoId, mensaje) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('invisible');
            errorDiv.classList.add('visible');
            errorDiv.querySelector('p').textContent = mensaje;
        }
    }

    function limpiarError(campoId) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('visible');
            errorDiv.classList.add('invisible');
            errorDiv.querySelector('p').textContent = '';
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarPassword(password) {
        const errors = [];

        if (!password) {
            return ['La contraseña es requerida'];
        }

        if (password.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
        }

        if (!/[a-z]/.test(password)) {
            errors.push('La contraseña debe contener al menos una minúscula');
        }

        if (!/[A-Z]/.test(password)) {
            errors.push('La contraseña debe contener al menos una mayúscula');
        }

        if (!/[0-9]/.test(password)) {
            errors.push('La contraseña debe contener al menos un número');
        }

        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            errors.push('La contraseña debe contener al menos un caracter especial');
        }

        return errors;
    }

    function validarRegistro() {
        let esValido = true;

        const nombreUsuario = document.getElementById('nombre-usuario').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();
        const repetirContraseña = document.getElementById('repetir-contraseña').value.trim();

        limpiarError('nombre-usuario');
        limpiarError('correo');
        limpiarError('contraseña');
        limpiarError('repetir-contraseña');

        if (!nombreUsuario) {
            mostrarError('nombre-usuario', 'El nombre de usuario es requerido');
            esValido = false;
        } else if (nombreUsuario.length < 2) {
            mostrarError('nombre-usuario', 'El nombre de usuario debe tener al menos 2 caracteres');
            esValido = false;
        }

        if (!correo) {
            mostrarError('correo', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        }

        const erroresPassword = validarPassword(contraseña);
        if (erroresPassword.length > 0) {
            mostrarError('contraseña', erroresPassword[0]);
            esValido = false;
        }

        if (!repetirContraseña) {
            mostrarError('repetir-contraseña', 'Repetir contraseña es requerido');
            esValido = false;
        } else if (contraseña !== repetirContraseña) {
            mostrarError('repetir-contraseña', 'Las contraseñas no coinciden');
            esValido = false;
        }

        return esValido;
    }

    const toggleButtons = [
        { buttonId: 'toggle-contraseña', inputId: 'contraseña' },
        { buttonId: 'toggle-repetir-contraseña', inputId: 'repetir-contraseña' }
    ];

    toggleButtons.forEach(({ buttonId, inputId }) => {
        const toggleButton = document.getElementById(buttonId);
        const passwordInput = document.getElementById(inputId);

        if (toggleButton && passwordInput) {
            const eyeIcons = toggleButton.querySelectorAll('svg');
            const eyeVisible = eyeIcons[0];
            const eyeHidden = eyeIcons[1];

            if (eyeVisible && eyeHidden) {
                eyeHidden.style.display = 'none';

                toggleButton.addEventListener('click', function () {
                    const isPassword = passwordInput.type === 'password';

                    passwordInput.type = isPassword ? 'text' : 'password';

                    if (isPassword) {
                        eyeVisible.style.display = 'none';
                        eyeHidden.style.display = 'block';
                    } else {
                        eyeHidden.style.display = 'none';
                        eyeVisible.style.display = 'block';
                    }
                });
            }
        }
    });

    document.getElementById('nombre-usuario').addEventListener('blur', function () {
        const nombreUsuario = this.value.trim();
        limpiarError('nombre-usuario');

        if (nombreUsuario && nombreUsuario.length < 2) {
            mostrarError('nombre-usuario', 'El nombre de usuario debe tener al menos 2 caracteres');
        }
    });

    document.getElementById('correo').addEventListener('blur', function () {
        const correo = this.value.trim();
        limpiarError('correo');

        if (correo && !validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    document.getElementById('contraseña').addEventListener('blur', function () {
        const contraseña = this.value.trim();
        limpiarError('contraseña');

        if (contraseña) {
            const errores = validarPassword(contraseña);
            if (errores.length > 0) {
                mostrarError('contraseña', errores[0]);
            }
        }
    });

    document.getElementById('repetir-contraseña').addEventListener('blur', function () {
        const contraseña = document.getElementById('contraseña').value.trim();
        const repetirContraseña = this.value.trim();
        limpiarError('repetir-contraseña');

        if (repetirContraseña && contraseña !== repetirContraseña) {
            mostrarError('repetir-contraseña', 'Las contraseñas no coinciden');
        }
    });

    formularioRegistro.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validarRegistro()) {
            return;
        }

        const datos = {
            nombreUsuario: document.getElementById('nombre-usuario').value.trim(),
            correo: document.getElementById('correo').value.trim(),
            contraseña: document.getElementById('contraseña').value.trim()
        };

        console.log('Datos de registro:', datos);
        alert('Registro exitoso! (Simulado)');

        formularioRegistro.reset();
        limpiarError('nombre-usuario');
        limpiarError('correo');
        limpiarError('contraseña');
        limpiarError('repetir-contraseña');
    });
});

// Validación de Reestablecer Contraseña
document.addEventListener('DOMContentLoaded', function () {
    // Solo ejecutar si está en la página de reestablecer contraseña
    if (!document.querySelector('h1') || !document.querySelector('h1').textContent.includes('Restablecer')) {
        return;
    }
    
    const formularioReset = document.querySelector('form');

    if (!formularioReset || !document.getElementById('correo')) {
        return;
    }

    function mostrarError(campoId, mensaje) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('invisible');
            errorDiv.classList.add('visible');
            errorDiv.querySelector('p').textContent = mensaje;
        }
    }

    function limpiarError(campoId) {
        const errorDiv = document.getElementById(`error-${campoId}`);
        if (errorDiv) {
            errorDiv.classList.remove('visible');
            errorDiv.classList.add('invisible');
            errorDiv.querySelector('p').textContent = '';
        }
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarReset() {
        let esValido = true;

        const correo = document.getElementById('correo').value.trim();

        limpiarError('correo');

        if (!correo) {
            mostrarError('correo', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        }

        return esValido;
    }

    document.getElementById('correo').addEventListener('blur', function() {
        const correo = this.value.trim();
        limpiarError('correo');
        
        if (correo && !validarEmail(correo)) {
            mostrarError('correo', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    formularioReset.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validarReset()) {
            return;
        }

        const datos = {
            correo: document.getElementById('correo').value.trim()
        };

        console.log('Datos de reset:', datos);
        alert('Enlace de reestablecimiento enviado a tu correo! (Simulado)');
        
        formularioReset.reset();
        limpiarError('correo');
    });
});

// Animaciones Fade-up
document.addEventListener('DOMContentLoaded', function () {
    const elementosFade = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    elementosFade.forEach(element => {
        observer.observe(element);
    });
});