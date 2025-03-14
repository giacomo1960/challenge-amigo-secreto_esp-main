// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

/*CARD 1
/* Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos  */

let misAmigos = [];


// FUNCION AGREGAR NUEVO AMIGO EN HTML
function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo');
 
    let nombreDeAmigo = nuevoAmigo.value

// VALIDACION DE ENTRADA 
    if(nuevoAmigo.value === ""){

     alert('Por favor, ingrese un nombre');
    
    return;
    }

 // VERIFICAR SI NOMBRE YA EXISTE 
    for (let i = 0; i < misAmigos.length; i++) {
    if (misAmigos[i] === nombreDeAmigo) {
        alert('Este nombre ya está en la lista');
        return;
    }
}
    // AGREGAR NUEVO AMIGO
 misAmigos.push(nombreDeAmigo);

    // LIMPIAR CAMPO DE TEXTO
 nuevoAmigo.value = '';
  
 // MOSTRAR LISTA ACTUALIZADA EN HTML 
mostrarAmigos();

}

// FUNCION PARA MOSTRAR AMIGOS EN HTML
function mostrarAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
// LIMPIAR LISTA DE AMIGOS
    listaDeAmigos.innerHTML = '';

    // RECORRER LISTA DE AMIGOS
  
    for (let i = 0; i < misAmigos.length; i++) {

    //  CREA NUEVO ELEMENTO <li>   
        let li = document.createElement('li');
        li.textContent = misAmigos[i];

    //  AGREGA NUEVO ELEMENTO 
        listaDeAmigos.appendChild(li);
    }
    
}
 

 // FUNCION PARA SORTEAR AMIGO
function sortearAmigo() {
    
    if(misAmigos.length < 3) {
        alert('No hay suficientes inscritos para sortear, minimo 3 amigos');
        return;
    }
// MUESTRA AMIGO SORTEADO
let amigoSorteado = misAmigos[Math.floor(Math.random() * misAmigos.length)];
 
let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

// LIMPIAR LA LISTA DE AMIGOS EN EL ARRAY Y EN EL HTML
misAmigos = []; // Vacía el array de amigos
mostrarAmigos(); // Actualiza la interfaz para reflejar la lista vacía

}

function reiniciarSorteo() {
    misAmigos = [];
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = ''; // Borra el resultado manualmente
}
