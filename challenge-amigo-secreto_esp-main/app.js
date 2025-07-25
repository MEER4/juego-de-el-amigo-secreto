// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos el array o lista que contendran los nombres de los amigos
 
const listaDeAmigos = [];

// creo una funcion para agregar los amigos en el array
function agregarAmigo(){
    const amigos = document.getElementById("amigo");
    let valorInput = amigos.value;

    //verifico  si el input esta vacio con .trim() y agrego una alerta indicandole al jugador que ingrese un nombre, cuando este vacio 
    if (valorInput.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el input está vacío
    } else { //agrego los nombres con .push
        listaDeAmigos.push(valorInput.trim());
        console.log(listaDeAmigos)// uso console.log para verificar si se estan guardando los nombres
        amigos.value = '';
        amigos.focus();
        listarAmigos() 
        return;
        
    }
}

// creo la funcion que listara los nombres agregados
function listarAmigos() {
    const listadoDeAmigos = document.getElementById("listaAmigos"); 
    listadoDeAmigos.innerHTML = "";// verifico si la lista esta vacia

    //busco los nombres en las lista con un .forEach
    listaDeAmigos.forEach(amigos => {
        const nuevoElemento = document.createElement("li");// creo el lemento li(lista) dentro de la lista ol
        nuevoElemento.textContent = amigos;// asigno a cada nuevo elemento li el valor amigo= nombres en el array lo crea
        listadoDeAmigos.appendChild(nuevoElemento); // y con la variable asigno el texto a la lista

    } )
    
  
}

// creo la funcion para sortear
function sortearAmigo(){
    const resultado = document.getElementById("resultado")// tomo el id de el boton para activar la funcion
    
    // verifico si hay amigos en la lista
    if (listaDeAmigos.length === 0){
        resultado.innerHTML = "No hay amigos en la lista para sortear" // envio el mensaje de tener la lista vacia

    }

    // creo la variable que genera el amigo aleatorio.
    // uso con las funciones math(.floor y .random) obtengo un numero aleatorio esto lo multiplico por el numero de nombres guardados  con .length
    // con la variable de amigosorteado llamo a lista y selecciono indice con el numero generado aleatorio
    const generarAmigoAleatorio = Math.floor(Math.random()* listaDeAmigos.length);

    const amigoSorteado = listaDeAmigos[generarAmigoAleatorio];

    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉`;




}