// Array de imágenes
var imagenes = ['img/header/img1.jpg', 'img/header/img2.jpg', 'img/header/img3.png'];

// Array de imágenes
var imagenes = ['img/header/img1.jpg', 'img/header/img2.jpg', 'img/header/img3.png'];

// Array de textos
var textos = ['hello ratas', 'nada qie ver', 'sthefany te amo'];

// Array de funciones
var funciones = [ function() { console.log("Esta es la función 1"); },
function() { console.log("Esta es la función 2"); },
function() { console.log("Esta es la función 3"); },]

// Enlaces
var indiceActual = 0;
var enlaces = ['https://www.youtube.com', 'https://www.facebook.com', 'https://www.twitter.com'];

// Índice actual
var indiceActual = 0;

function cambiarEnlace() {
  var boton = document.getElementById('enlaces');
  boton.onclick = function() {
    window.open(enlaces[indiceActual], '_blank');
  };
}


// Función para cambiar imagen y texto
function cambiarImagenYTexto() {
  // Obtener elementos
  var img = document.getElementById('img-header');
  var texto = document.querySelector('.info-titulo_h1');
  var play = document.getElementById('play');

  // Cambiar imagen y texto
  img.src = imagenes[indiceActual];
  texto.textContent = textos[indiceActual];
  play.onclick = funciones[indiceActual];

  // Actualizar índice
  indiceActual++;
  if (indiceActual >= imagenes.length) { // Si el índice es mayor que la longitud del array, resetear a 0
    indiceActual = 0;
  }
}

// Cambiar imagen y texto cada 2 segundos
setInterval(cambiarImagenYTexto, 5000);
