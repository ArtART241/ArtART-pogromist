// ************** Параметры игры ******************
<<<<<<< HEAD
let firstCard = null;
let secondCard = null;
let wait = false; 

// Готовый алгоритм перебора карт
function shuffle(array) {
    let copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
=======

<<<<<<< ours
// Готовый алгоритм перебора карт
function shuffle(array) {
    let copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
>>>>>>> a8da9abff60e4360b475bf9a377b8e83249e01c1
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
<<<<<<< HEAD
    return copy;
}

// Функция генерации игрового поля
function generateField(size){
    // База типов задних карточек 
    let cls = ["c1", "c2", "c3", "c4"]
    let counter = 0;
    // Массив задних карточек
    let backs = [];
    // Заполняем массив парами из базы типов карточек
    for(let i=0; i<(size*size); i+=2){
        backs[i] = cls[counter];
        backs[i+1] = cls[counter];
        if(counter < 3){
            counter++;
        }
        else counter = 0;
    }

    // Проводим шафл для нашего массива карточек
    backs = shuffle(backs);
    
    // Массив элементов карточек
    let cards = [];
    for(let i=0; i<(size*size); i++){

        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back").addClass(backs[i]);

=======
  
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

>>>>>>> a8da9abff60e4360b475bf9a377b8e83249e01c1
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
<<<<<<< HEAD

    // Переворот картинки при нажатии
    $(".flipper").click(function(event){ 
        if(wait == false  && firstCard  != event.currentTarget){
            $(event.currentTarget).toggleClass("clicked");
            checkCard(event.currentTarget);
        }
    });
}

// Основная функция игры
function checkCard(card){
    // Выбираем первую карточку
    if(firstCard == null){
        firstCard = card;
    }
    else if(secondCard == null){
        // Выбираем вторую карточку
        secondCard = card;
        // Запрещаем переворачивать карты
        wait = true;

        // Проверяем 1000мс
        setTimeout(function(){
            //  Проводим сравнение карточек
            // Нашли одинаковые карточки
            if(  $(firstCard).children(".back").attr("class")  == $(secondCard).children(".back").attr("class")    ){
                $(firstCard).css("visibility", "hidden");
                $(secondCard).css("visibility", "hidden");
            }
            else{
                // Переворачиваем карточки обратно
                $(".flipper").removeClass("clicked");
            }

            // Забываем карточки и разрешаем переворачивать карты
            firstCard = null;
            secondCard = null;
            wait = false;
        }, 1000)
    }
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
=======
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
>>>>>>> a8da9abff60e4360b475bf9a377b8e83249e01c1
