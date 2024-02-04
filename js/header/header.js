// Array de imágenes
var imagenes = ['img/header/img1.jpg', 'img/header/img2.jpg', 'img/header/img3.png'];

// Array de textos
var textos = ['hello ratas', 'nada qie ver', 'sthefany te amo'];

// Índice actual
var indiceActual = 0;

// Función para cambiar imagen y texto
function cambiarImagenYTexto() {
  // Obtener elementos
  var img = document.getElementById('img-header');
  var texto = document.querySelector('.info-titulo_h1');

  // Cambiar imagen y texto
  img.src = imagenes[indiceActual];
  texto.textContent = textos[indiceActual];

  // Actualizar índice
  indiceActual++;
  if (indiceActual >= imagenes.length) { // Si el índice es mayor que la longitud del array, resetear a 0
    indiceActual = 0;
  }
}

// Cambiar imagen y texto cada 5 segundos
setInterval(cambiarImagenYTexto, 2000);
