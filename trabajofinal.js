let imagenes = ["moto1.jpg", "moto2.jpg", "moto3.jpg"];
let index = 0;

function cambiarImagen() {
    index = (index + 1) % imagenes.length;
    document.getElementById("slider-img").src = imagenes[index];
}

function enviarFormulario(event) {
    event.preventDefault();
    document.getElementById("mensaje-enviado").style.display = "block";
}

let carrito = [];
function agregarCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let total = 0;
    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });
    document.getElementById("total").textContent = `Total: $${total}`;
}