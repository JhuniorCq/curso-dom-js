

const albahaca = document.getElementById('albahaca');

//Esta función puede ser una Función Normal,
//una Función Anónima o una Función Flecha
const imprimirMensaje = (evento) => {
    console.log(evento);
    console.log(evento.target); // target es el Elemento "Blank"
    console.log(evento.target.innerText) // Obtengo el Texto del Elemento "Blank"
}

albahaca.addEventListener("click", imprimirMensaje);

