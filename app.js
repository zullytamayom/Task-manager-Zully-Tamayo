let tareas = [];

const input = document.getElementById("inputTarea");
const select = document.getElementById("selectTarea");
const inputOtra = document.getElementById("inputOtraCategoria");
const lista = document.getElementById("listaTareas");
const error = document.getElementById("error");
const totalSpan = document.getElementById("total");
const completadasSpan = document.getElementById("completadas");

document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);
document.getElementById("btnLimpiar").addEventListener("click", limpiarCompletadas);

select.addEventListener("change", function () {
    if (select.value === "otra") {
        inputOtra.style.display = "block";
    } else {
        inputOtra.style.display = "none";
    }
});

function agregarTarea() {
    const texto = input.value.trim();
    let categoria = select.value;

    if (categoria === "otra") {
        categoria = inputOtra.value.trim();
    }

    if (texto === "" || categoria === "") {
        error.style.display = "block";
        return;
    }

    error.style.display = "none";

    const tareaObj = {
        texto: texto,
        categoria: categoria,
        completada: false
    };

    tareas.push(tareaObj);

    renderizarTareas();

    input.value = "";
    inputOtra.value = "";
}

function renderizarTareas() {
    lista.innerHTML = "";

    let completadas = 0;

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");

        li.textContent = `${tarea.texto} (${tarea.categoria})`;

        if (tarea.completada) {
            li.classList.add("completada");
            completadas++;
        }

        li.addEventListener("click", () => {
            tarea.completada = !tarea.completada;
            renderizarTareas();
        });

        lista.appendChild(li);
    });

    totalSpan.textContent = tareas.length;
    completadasSpan.textContent = completadas;
}

function limpiarCompletadas() {
    tareas = tareas.filter(t => !t.completada);
    renderizarTareas();
}