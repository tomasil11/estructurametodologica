// Objeto con la información de las cards

let cards = [
    {
        titulo: "Título card1",
        tipo: "Vídeo",
        img: "images/iconos/botonVideo01.png",
        ancho: 40,
        alto: 40,
        nombre: "Nombre de la actividad"
    }

]
// Fin de objeto

// Código ingreso de la card 1
document.getElementById("titulo-card1").innerHTML = cards[0].titulo;
document.getElementById("tipo-card1").innerHTML = cards[0].tipo;
let contenedorImages = document.getElementById("images-card1");
document.getElementById("actividad-card1").innerHTML = cards[0].nombre;

let imgElement = document.createElement("img");
imgElement.src = cards[0].img;
imgElement.width = cards[0].ancho;
imgElement.height = cards[0].alto;
contenedorImages.appendChild(imgElement);

// Fin código ingreso card1