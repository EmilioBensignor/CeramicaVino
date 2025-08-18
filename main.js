// Menu Lateral

document.addEventListener('DOMContentLoaded', function() {
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

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuLateral.classList.contains('open')) {
            cerrarMenu();
        }
    });
});
