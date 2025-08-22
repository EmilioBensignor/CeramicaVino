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

    let indiceActual = 0;
    const totalImagenes = 12;

    function obtenerImagenesPorVista() {
        if (window.innerWidth >= 1024) return 4; // lg
        if (window.innerWidth >= 768) return 3;  // md
        if (window.innerWidth >= 640) return 2;  // sm
        return 1; // móvil
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

    let indiceActualEventos = 0;
    const totalEventos = 3;

    function obtenerEventosPorVista() {
        if (window.innerWidth >= 768) return 2; // md
        return 1; // móvil
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

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            comentario: document.getElementById('comentario').value
        };

        console.log('Datos del formulario:', datos);

        formulario.reset();
        cerrarModal();
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
