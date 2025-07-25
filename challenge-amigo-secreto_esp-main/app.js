// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos el array o lista que contendran los nombres de los amigos
 
const listaDeAmigos = [];


function agregarAmigo(){
    const amigos = document.getElementById("amigo");
    let valorInput = amigos.value;

    if (valorInput.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el input está vacío
    } else {
        listaDeAmigos.push(valorInput.trim());
        console.log(listaDeAmigos)
        amigos.value = '';
        amigos.focus();
        listarAmigos()
        return;
        
    }
}

function listarAmigos() {
    const listadoDeAmigos = document.getElementById("listaAmigos");
    listadoDeAmigos.innerHTML = "";

    listaDeAmigos.forEach(listaDeAmigos => {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = listaDeAmigos;
        listadoDeAmigos.appendChild(nuevoElemento);

    } )
    
  
}

function sortearAmigo(){
    const resultado = document.getElementById("resultado")
    
    if (listaDeAmigos.length === 0){
        resultado.innerHTML = "No hay amigos en la lista para sortear"
        
    }

    const generarAmigoAleatorio = Math.floor(Math.random()* listaDeAmigos.length);

    const amigoSorteado = listaDeAmigos[generarAmigoAleatorio];

    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉`;




}