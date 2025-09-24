// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

  // validar que el campo de input no esté vacío  
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

// validar que el nombre no esté repetido    
    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }

// añadir el nombre de un amigo al array de amigos
    amigos.push(nombre);

// limpiar el campo de input después de agregar un amigo
    input.value = '';
   
// actualizar lista de amigos   
    mostrarAmigos();
}


function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// validar que al menos se agreguen 3 amigos para el sorteo
function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Necesitas al menos 3 amigos para sortear');
        return;
    }

// validar si todos los amigos fueron sorteados
    if (amigosSorteados.length === amigos.length) {
        alert('¡Todos los amigos ya fueron sorteados! Reiniciando...');
        reiniciarSorteo();
        return;
    }
    
    let amigoSorteado;

// buscar un amigo que aun no haya sido sorteado
    do {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado));
    
    amigosSorteados.push(amigoSorteado);
    
// mostrar amigo sorteado
    document.getElementById('resultado').textContent = 
        `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// reiniciar sorteo
function reiniciarSorteo() {
    amigos = [];
    amigosSorteados = [];
    mostrarAmigos();
    document.getElementById('resultado').textContent = '';
    document.getElementById('amigo').value = '';
}
