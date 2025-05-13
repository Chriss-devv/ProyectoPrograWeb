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



// Cotización
document.getElementById("form-cotizacion").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const modelo = document.getElementById("modelo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    let precio = 0;
    if (modelo === "Moto Eléctrica Urbana") precio = 35000;
    else if (modelo === "Moto Cross 250cc") precio = 50000;
    else if (modelo === "Moto Deportiva 600cc") precio = 80000;

    const total = precio * cantidad;

    document.getElementById("total").textContent = `Total a pagar: $${total.toLocaleString()} MXN`;
    document.getElementById("resultado").textContent = `Gracias por tu solicitud, ${nombre}. Te enviaremos la cotización a ${correo}.`;
});

// PDF
document.getElementById("btn-pdf").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const modelo = document.getElementById("modelo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    let precio = 0;
    if (modelo === "Moto Eléctrica Urbana") precio = 35000;
    else if (modelo === "Moto Cross 250cc") precio = 50000;
    else if (modelo === "Moto Deportiva 600cc") precio = 80000;

    const total = precio * cantidad;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Comprobante de Cotización - Ti-Bikersz", 10, 10);
    doc.text(`Nombre: ${nombre}`, 10, 20);
    doc.text(`Correo: ${correo}`, 10, 30);
    doc.text(`Modelo: ${modelo}`, 10, 40);
    doc.text(`Cantidad: ${cantidad}`, 10, 50);
    doc.text(`Total: $${total.toLocaleString()} MXN`, 10, 60);
    doc.save("cotizacion.pdf");
});
