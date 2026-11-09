
 // Arreglo con las calificaciones
let notas = [8, 6, 9, 7, 5, 10, 4, 7];

function analizar(event) {

    event.preventDefault();

    let resultado = document.getElementById("resultado");


    if (notas.length === 0) {
        resultado.innerHTML = "No existen calificaciones para analizar.";
        return;
    }

    
    let notasInvalidas = "";

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] < 0 || notas[i] > 10) {
            notasInvalidas += notas[i] + " ";
        }

    }

    
    if (notasInvalidas !== "") {

        resultado.innerHTML = "Error: existen calificaciones fuera del rango de 0 a 10: " + notasInvalidas;

        return;
    }

    
    let suma = 0;
    let aprobadas = 0;
    let noAprobadas = 0;


    let mayor = notas[0];
    let menor = notas[0];


    for (let i = 0; i < notas.length; i++) {

    
        suma = suma + notas[i];

        
        if (notas[i] > mayor) {
            mayor = notas[i];
        }

        if (notas[i] < menor) {
            menor = notas[i];
        }

        if (notas[i] >= 7) {
            aprobadas++;
        } else {
            noAprobadas++;
        }

    }

    let promedio = suma / notas.length;

    
    resultado.innerHTML =
        "<p>Calificaciones: " + notas.join(", ") + "</p>" +
        "<p>Promedio: " + promedio.toFixed(2) + "</p>" +
        "<p>Nota más alta: " + mayor + "</p>" +
        "<p>Nota más baja: " + menor + "</p>" +
        "<p>Notas aprobadas: " + aprobadas + "</p>" +
        "<p>Notas no aprobadas: " + noAprobadas + "</p>";

}
