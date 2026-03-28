let tareas = [];
let completadas = 0;

const input = document.getElementById("inputTarea");
const select = document.getElementById("selectTarea");
const lista = document.getElementById("listaTareas");
const error = document.getElementById("error");
const totalSpan = document.getElementById("total");
const completadasSpan = document.getElementById("completadas");

document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);

function agregarTarea() {
    const texto = input.value.trim();
    const categoria = select.value;

    console.log("Intentando agregar:", texto);

    if (texto === "") {
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    const li = document.createElement("li");
    li.textContent = texto + " (" + categoria + ")";

    lista.appendChild(li);

    tareas.push(texto);

    totalSpan.textContent = tareas.length;

    input.value = "";

    console.log("Tarea agregada correctamente");
}
