
function verificar() {
    let contrasena = document.getElementById("contrasena").value;

    let longitud = false;
    let tieneNumero = false;
    let tieneEspacio = false;

    if (contrasena.length >= 8) {
        longitud = true;
    }

    for (let i = 0; i < contrasena.length; i++) {

        let caracter = contrasena[i];

        if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        }

        if (caracter === " ") {
            tieneEspacio = true;
        }
    }

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";


    if (longitud && tieneNumero && !tieneEspacio) {

        resultado.innerHTML = "<h3>Cumple todas las reglas</h3>";

    } else {

        if (longitud) {
            resultado.innerHTML += "<p>Longitud: Cumple</p>";
        } else {
            resultado.innerHTML += "<p>Longitud: No cumple</p>";
        }

        if (tieneNumero) {
            resultado.innerHTML += "<p>Número: Cumple</p>";
        } else {
            resultado.innerHTML += "<p>Número: No cumple</p>";
        }

        if (!tieneEspacio) {
            resultado.innerHTML += "<p>Sin espacios: Cumple</p>";
        } else {
            resultado.innerHTML += "<p>Sin espacios: No cumple</p>";
        }

    }
}
