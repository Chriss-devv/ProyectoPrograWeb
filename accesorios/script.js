// script-accesorios.js
// Función para filtrar accesorios
function buscarAccesorio() {
    const input = document.getElementById('buscar-accesorio').value.toLowerCase();
    const accesorios = document.querySelectorAll('.accesorio');

    accesorios.forEach(accesorio => {
        const nombreAccesorio = accesorio.querySelector('h3').textContent.toLowerCase();
        if (nombreAccesorio.includes(input)) {
            accesorio.style.display = 'block'; // Muestra el accesorio si coincide
        } else {
            accesorio.style.display = 'none'; // Oculta el accesorio si no coincide
        }
    });
}

// Opcional: Función para manejar la tecla Enter en el buscador
function manejarTeclaEnter(event) {
    if (event.key === 'Enter') {
        buscarAccesorio();
    }
}

// Asignar el evento de tecla Enter al input de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const inputBusqueda = document.getElementById('buscar-accesorio');
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', manejarTeclaEnter);
    }
});