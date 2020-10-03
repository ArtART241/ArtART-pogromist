
// create elements HTML using jQuery
let img = $("<img>");

// set one attribute
$(img).attr("src", "img/03.png");

// appending to body
$("body").append(img);

let rubashka = "img/01.png"

function generateField(size) {
    // resolution 175x²

    let cards = new Array(size*size)
    cards.fill( $("<img>").attr({
        "src": rubashka,
        "width": "150",
        "class": "card",
        "id": "rub"
    }))
    
    let bigsize = cards.length * 100 + 16;
    


    console.log(cards);
}


// click event
$("#btn").click(function (event) { 
   
    // getting input 'size' from user
    let size = $("#size").val();
    // checking, if it can be divided by 2
    if (size % 2 == 0) {

        console.log("nice");

    } else {

        console.log("nicht so tollè");
    }
});