// 1. CAMBIAR CONTENIDO

const textoPrincipal =
    document.getElementById("textoPrincipal");

const btnCambiar =
    document.getElementById("btnCambiar");


btnCambiar.addEventListener("click", () => {

    textoPrincipal.textContent =
        "Se cambió correctamente el texto";

});



// 2. MODIFICAR ESTILOS

const parrafoEstilo =
    document.getElementById("parrafoEstilo");

const btnEstilo =
    document.getElementById("btnEstilo");


btnEstilo.addEventListener("click", () => {

    parrafoEstilo.style.color = "blue";

    parrafoEstilo.style.fontSize = "20px";

});



// 3. CREAR ELEMENTOS DINÁMICAMENTE

const lista =
    document.getElementById("lista");

const btnAgregar =
    document.getElementById("btnAgregar");


let contador = 1;


btnAgregar.addEventListener("click", () => {

    const elemento =
        document.createElement("li");


    elemento.textContent =
        "JavaScript agregado" + contador;


    lista.appendChild(elemento);


    contador++;

});



// 4. EVENTO DE TECLADO

const resultadoTeclado =
    document.getElementById("resultadoTeclado");


document.addEventListener("keydown", (evento) => {

    resultadoTeclado.textContent =
        "Pulsaste la tecla: " + evento.key;

});



// 5. EVENTO DE FORMULARIO

const formulario =
    document.getElementById("formulario");

const resultadoFormulario =
    document.getElementById("resultadoFormulario");


formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();


    const nombre =
        document.getElementById("nombre").value;

    const mensaje =
        document.getElementById("mensaje").value;


    if (nombre === "" || mensaje === "") {

        resultadoFormulario.textContent =
            "Completa todos los campos.";

        resultadoFormulario.style.color = "red";

        return;
    }


    resultadoFormulario.textContent =
        "Dato guardado: " + nombre;

    resultadoFormulario.style.color = "green";


    formulario.reset();

});



// 6. MODO OSCURO

const btnModo =
    document.getElementById("btnModo");


btnModo.addEventListener("click", () => {

    document.body.classList.toggle("modo-oscuro");


    if (
        document.body.classList.contains("modo-oscuro")
    ) {

        btnModo.textContent =
            "Modo claro";

    } else {

        btnModo.textContent =
            "Modo oscuro";

    }

});



// 7. AÑO ACTUAL

const anioActual =
    document.getElementById("anioActual");


anioActual.textContent =
    new Date().getFullYear();