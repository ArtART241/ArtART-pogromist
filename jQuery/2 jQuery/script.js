// ************** Параметры игры ******************

<<<<<<< ours
// Готовый алгоритм перебора карт
function shuffle(array) {
    let copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
}
=======
// creating HTML-elements using jQuery
let img = $("<img>");
>>>>>>> theirs

<<<<<<< ours
// Функция генерации игрового поля
function generateField(size){
    
    let cls = ["c1", "c2", "c3", "c4"]
    let counter = 0;
    let backs = [];
    for(let i=0; i<(size*size); i+=2){
        backs[i] = cls[counter];
        backs[i+1] = cls[counter];
        
        if(counter < 3){
            counter++;
        }
        else counter = 0;
    }
=======
// setting source attribute
$(img).attr("src", "img/03.png");
>>>>>>> theirs

    console.log(backs)

    let cards = [];
    for(let i=0; i<(size*size); i++){
        let card = $("<div>");
        $(card).addClass("card");

<<<<<<< ours
        let flipper = $("<div>");
        $(flipper).addClass("flipper");
=======
function generateField(size) {
    // resolution 150x²
>>>>>>> theirs

<<<<<<< ours
        let front = $("<div>");
        $(front).addClass("front");
=======
    let cards = new Array(size*size)
    cards.fill( $("<img>").attr({
        "src": rubashka,
        "width": "150",
        "class": "card",
        "id": "rub"
    }))
    
    let bigsize = cards.length * 100 + 16;
    let windowwidth = (innerWidth - bigsize) / 2

    $("#field").css("width", "windowwidth");
    
>>>>>>> theirs

<<<<<<< ours
        let back = $("<div>");
        $(back).addClass("back");

        $(flipper).append(back)
        $(flipper).prepend(front)
        $(card).append(flipper)

        cards.push(card);
    }
    // Обнуляем поле
    $("#field").html("");
    // Устанавливаем размер и местоположение поля
    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth - size*150+16)/2 + "px"
    })
    // Добавляем в наше поле карточки
    $("#field").append(cards);
=======
    $("#field").prepend(cards);
    console.log(cards);
>>>>>>> theirs
}

// Нажатие 
$("#btn").click(function(event) { 
    // Взять значение из #size используя .val()
    size = $("#size").val();
    if(size%2 == 0){
        generateField(size);
    }
    else{
        alert("Число не может быть нечетным!!!")
    }
});



<<<<<<< ours
// Переворот картинки при нажатии
$(".flipper").click(function(event){ 
    $(event.currentTarget).toggleClass("clicked");
    
});=======
    } else {
        size = size - 1
        console.log("nicht so tollè");
    }
    generateField(size);
});
>>>>>>> theirs
