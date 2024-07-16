// Objeto con la información de las cards

let nombreActividad01;

let cards = [
    {
        titulo: "Actividad #1",
        tipo: "Vídeo",
        img: "images/iconos/botonVideo01.png",
        ancho: 50,
        alto: 50,
        nombre: "Tipologías Textuales"
    }, 
    {
        titulo: "Actividad #2",
        tipo: "Crucigrama",
        img: "images/iconos/actividadesPedagogicas.png",
        ancho: 50,
        alto: 50,
        nombre: "Tipología Textual"
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

// Código ingreso de la card 2
document.getElementById("titulo-card2").innerHTML = cards[1].titulo;
document.getElementById("tipo-card2").innerHTML = cards[1].tipo;
let contenedorImages02 = document.getElementById("images-card2");
document.getElementById("actividad-card2").innerHTML = cards[1].nombre;


let imgElement02 = document.createElement("img");
imgElement02.src = cards[1].img;
imgElement02.width = cards[1].ancho;
imgElement02.height = cards[1].alto;
contenedorImages02.appendChild(imgElement02);

// Fin código ingreso card2