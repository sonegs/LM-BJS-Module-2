/*
// Objetivo 1 [Datos del hotel] 
//                                          DEPRECATED
var hotel = {
    name: "Condestable",
    location: "Jaén",
    img: "https://y.cdrst.com/foto/hotel-sf/1a886/granderesp/hotel-condestable-iranzo-servicios-8101c26.jpg",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;

*/

// Objetivo 1 [Datos del hotel] 
var hoteles = {
    Xauen: {
        name: "Xauen",
        location: "Jaén",
        img: "https://r-cf.bstatic.com/images/hotel/max1024x768/352/3528981.jpg",
    },
    Vincci: {
        name: "Vincci",
        location: "Málaga",
        img: "https://www.vinccimalaga.com/uploads/galeriahoteles/vincci-malaga-hotel.jpg",
    },
    Condestable: {
        name: "Condestable",
        location: "Jaén",
        img: "https://y.cdrst.com/foto/hotel-sf/1a886/granderesp/hotel-condestable-iranzo-servicios-8101c26.jpg",
    },
};
var selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Xauen, Vincci o Condestable"
);

document.getElementById("name-hotel").innerHTML =
    "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;



// Objetivo 2 [Puntuación del hotel] 
//                                      CONTROLANDO ERRORES EN EL PRONT
/*
do { // para controlar los valores introducidos en el alert
    var rating = prompt("Puntuación: del 1 al 5");
    rating = Math.round(rating); // redondea los valores float a int (si los hubiese)
    for (var i = 1; i <= rating; i++) { // aparece una estrella como valoración del hotel

        document.getElementById("rating").innerHTML += "★";

    }


} while (rating < 1 || rating > 5 || !parseInt(rating)); // mientras sea <1, >5 o no se pueda convertir en un int

*/
// Objetivo 2 [Puntuación del hotel]
var star = {
    1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = star[rating];

// Objetivo 3 [Usuario anónimo]
var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;