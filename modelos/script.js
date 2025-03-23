// Función para filtrar modelos
function filtrarModelos() {
    const input = document.getElementById('buscar').value.toLowerCase();
    const modelos = document.querySelectorAll('.modelo');

    modelos.forEach(modelo => {
        const nombreModelo = modelo.getAttribute('data-nombre').toLowerCase();
        if (nombreModelo.includes(input)) {
            modelo.style.display = 'block'; // Muestra el modelo si coincide
        } else {
            modelo.style.display = 'none'; // Oculta el modelo si no coincide
        }
    });
}