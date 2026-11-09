
function agregarTarea(event) {

    event.preventDefault();

    let campo = document.getElementById("tarea");

    let texto = campo.value;

    if (texto.trim() === "") {

        alert("Escribe una tarea antes de agregarla.");

    } else {

        let lista = document.getElementById("listaTareas");

        let nuevaTarea = document.createElement("li");

        let casilla = document.createElement("input");

        casilla.type = "checkbox";

        
        let contenido = document.createElement("span");

        contenido.textContent = texto.trim();

        
        nuevaTarea.appendChild(casilla);

        nuevaTarea.appendChild(contenido);

        
        casilla.addEventListener("change", function() {

            contenido.classList.toggle("completada");

        });

        
        let eliminar = document.createElement("button");

        eliminar.textContent = "Eliminar";

        eliminar.type = "button";

        eliminar.addEventListener("click", function() {

            nuevaTarea.remove();

        });

        nuevaTarea.appendChild(eliminar);

        lista.appendChild(nuevaTarea);

        campo.value = "";

    }

}
