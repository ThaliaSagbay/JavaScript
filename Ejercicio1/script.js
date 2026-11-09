
function calcularTotal(event) {

    event.preventDefault();

    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    
    let resultado = document.getElementById("resultado");

    if (precio === "" || cantidad === "") {

        resultado.innerHTML = "Error: completa todos los campos.";

    } else {
        precio = Number(precio);
        cantidad = Number(cantidad);

        if (precio <= 0) {

            resultado.innerHTML = "Error: el precio debe ser mayor que cero.";

        } else if (cantidad <= 0 || !Number.isInteger(cantidad)) {

            resultado.innerHTML = "Error: la cantidad debe ser un número entero positivo.";

        } else {
            let subtotal = precio * cantidad;
            let descuento = 0;

            if (subtotal >= 100) {
                descuento = subtotal * 0.10;
            }

            let total = subtotal - descuento;

            resultado.innerHTML = "";

            resultado.innerHTML += "<p>Subtotal: $" + subtotal.toFixed(2).replace(".", ",") + "</p>";

            resultado.innerHTML += "<p>Descuento: $" + descuento.toFixed(2).replace(".", ",") + "</p>";

            resultado.innerHTML += "<h3>Total a pagar: $" + total.toFixed(2).replace(".", ",") + "</h3>";

        }

    }

}
