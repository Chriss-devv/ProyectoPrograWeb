let currentIndex = 0;

function moverCarrusel(direction) {
    const carruselInner = document.querySelector('.carrusel-inner');
    const totalImages = document.querySelectorAll('.carrusel-inner img').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carruselInner.style.transform = `translateX(${offset}%)`;
}

// Agregar movimiento automático
setInterval(() => {
    moverCarrusel(1); 
}, 3000); 
