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
        if (modalContent) {
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }
        document.body.style.overflow = 'hidden';
    }

    function cerrarModal() {
        modal.classList.remove('opacity-100', 'visible');
        modal.classList.add('opacity-0', 'invisible');
        if (modalContent) {
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
        }
        document.body.style.overflow = '';
    }

    botonesAbrir.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            abrirModal();
        });
    });

    if (botonCerrar) {
        botonCerrar.addEventListener('click', cerrarModal);
    }

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

        const nombre = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('phone').value.trim();

        limpiarError('name');
        limpiarError('email');
        limpiarError('phone');

        if (!nombre) {
            mostrarError('name', 'El nombre es requerido');
            esValido = false;
        } else if (nombre.length < 2) {
            mostrarError('name', 'El nombre debe tener al menos 2 caracteres');
            esValido = false;
        } else if (nombre.length > 30) {
            mostrarError('name', 'El nombre no debe tener más de 30 caracteres');
            esValido = false;
        }

        if (!email) {
            mostrarError('email', 'El email es requerido');
            esValido = false;
        } else if (!validarEmail(email)) {
            mostrarError('email', 'Ingresa un email válido (ejemplo@dominio.com)');
            esValido = false;
        } else if (email.length > 150) {
            mostrarError('email', 'El email no debe tener más de 150 caracteres');
            esValido = false;
        }

        if (!telefono) {
            mostrarError('phone', 'El teléfono es requerido');
            esValido = false;
        } else if (!validarTelefono(telefono)) {
            mostrarError('phone', 'Ingresa un teléfono válido (8-20 dígitos)');
            esValido = false;
        } else if (telefono.length > 40) {
            mostrarError('phone', 'El teléfono no debe tener más de 40 caracteres');
            esValido = false;
        }

        return esValido;
    }

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            if (!validarFormulario()) {
                e.preventDefault();
                return;
            }

            limpiarError('name');
            limpiarError('email');
            limpiarError('phone');
            limpiarError('comment');
            cerrarModal();
        });
    }
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
    if (document.getElementById('username')) {
        return;
    }

    const formularioLogin = document.querySelector('form');

    if (!formularioLogin || !document.getElementById('email') || !document.getElementById('password')) {
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

        const correo = document.getElementById('email').value.trim();
        const contrasena = document.getElementById('password').value.trim();

        if (!correo) {
            mostrarError('email', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        }

        if (!contrasena) {
            mostrarError('password', 'La contraseña es requerida');
            esValido = false;
        } else if (contrasena.length < 8) {
            mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
            esValido = false;
        } else if (contrasena.length > 30) {
            mostrarError('password', 'La contraseña no debe tener más de 30 caracteres');
            esValido = false;
        }

        return esValido;
    }

    const toggleButton = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

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

    document.getElementById('email').addEventListener('blur', function () {
        const correo = this.value.trim();
        limpiarError('email');

        if (correo && !validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    document.getElementById('password').addEventListener('blur', function () {
        const contraseña = this.value.trim();
        limpiarError('password');

        if (contraseña && contraseña.length < 8) {
            mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
        }
    });

    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function (e) {
            if (!validarLogin()) {
                e.preventDefault();
                return;
            }

            limpiarError('email');
            limpiarError('password');
        });
    }
});

// Validación de Registro
document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('username')) {
        return;
    }

    const formularioRegistro = document.querySelector('form');

    if (!formularioRegistro || !document.getElementById('repeat-password')) {
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

        if (password.length > 30) {
            errors.push('La contraseña no debe tener más de 30 caracteres');
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

        const nombreUsuario = document.getElementById('username').value.trim();
        const correo = document.getElementById('email').value.trim();
        const contrasena = document.getElementById('password').value.trim();
        const repetirPassword = document.getElementById('repeat-password').value.trim();

        limpiarError('username');
        limpiarError('email');
        limpiarError('password');
        limpiarError('repeat-password');

        if (!nombreUsuario) {
            mostrarError('username', 'El nombre de usuario es requerido');
            esValido = false;
        } else if (nombreUsuario.length < 2) {
            mostrarError('username', 'El nombre de usuario debe tener al menos 2 caracteres');
            esValido = false;
        } else if (nombreUsuario.length > 30) {
            mostrarError('username', 'El nombre de usuario no debe tener más de 30 caracteres');
            esValido = false;
        }

        if (!correo) {
            mostrarError('email', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        } else if (correo.length > 150) {
            mostrarError('email', 'El correo no debe tener más de 150 caracteres');
            esValido = false;
        }

        const erroresPassword = validarPassword(contrasena);
        if (erroresPassword.length > 0) {
            mostrarError('password', erroresPassword[0]);
            esValido = false;
        }

        if (!repetirPassword) {
            mostrarError('repeat-password', 'Repetir contraseña es requerido');
            esValido = false;
        } else if (contrasena !== repetirPassword) {
            mostrarError('repeat-password', 'Las contraseñas no coinciden');
            esValido = false;
        }

        return esValido;
    }

    const toggleButtons = [
        { buttonId: 'toggle-password', inputId: 'password' },
        { buttonId: 'toggle-repeat-password', inputId: 'repeat-password' }
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

    document.getElementById('username').addEventListener('blur', function () {
        const nombreUsuario = this.value.trim();
        limpiarError('username');

        if (nombreUsuario && nombreUsuario.length < 2) {
            mostrarError('username', 'El nombre de usuario debe tener al menos 2 caracteres');
        }
    });

    document.getElementById('email').addEventListener('blur', function () {
        const correo = this.value.trim();
        limpiarError('email');

        if (correo && !validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    document.getElementById('password').addEventListener('blur', function () {
        const contraseña = this.value.trim();
        limpiarError('password');

        if (contraseña) {
            const errores = validarPassword(contraseña);
            if (errores.length > 0) {
                mostrarError('password', errores[0]);
            }
        }
    });

    document.getElementById('repeat-password').addEventListener('blur', function () {
        const contraseña = document.getElementById('password').value.trim();
        const repetirContraseña = this.value.trim();
        limpiarError('repeat-password');

        if (repetirContraseña && contraseña !== repetirContraseña) {
            mostrarError('repeat-password', 'Las contraseñas no coinciden');
        }
    });

    if (formularioRegistro) {
        formularioRegistro.addEventListener('submit', function (e) {

            if (!validarRegistro()) {
                e.preventDefault();
                return;
            }

            limpiarError('username');
            limpiarError('email');
            limpiarError('password');
            limpiarError('repeat-password');
        });
    }
});

// Validación de Reestablecer Contraseña
document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('h1') || !document.querySelector('h1').textContent.includes('Restablecer')) {
        return;
    }

    const formularioReset = document.querySelector('form');

    if (!formularioReset || !document.getElementById('email')) {
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

        const correo = document.getElementById('email').value.trim();

        limpiarError('email');

        if (!correo) {
            mostrarError('email', 'El correo electrónico es requerido');
            esValido = false;
        } else if (!validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
            esValido = false;
        } else if (correo.length > 150) {
            mostrarError('email', 'El correo no debe tener más de 150 caracteres');
            esValido = false;
        }

        return esValido;
    }

    document.getElementById('email').addEventListener('blur', function () {
        const correo = this.value.trim();
        limpiarError('email');

        if (correo && !validarEmail(correo)) {
            mostrarError('email', 'Ingresa un correo electrónico válido (ejemplo@dominio.com)');
        }
    });

    formularioReset.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validarReset()) {
            return;
        }

        const datos = {
            correo: document.getElementById('email').value.trim()
        };

        console.log('Datos de reset:', datos);
        alert('Enlace de reestablecimiento enviado a tu correo! (Simulado)');

        formularioReset.reset();
        limpiarError('email');
    });
});

// Modal de éxito
function cerrarModalExito() {
    const modal = document.getElementById('modal-exito');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

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