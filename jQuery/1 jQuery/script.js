

console.log($(".circle").css("background-color"))

$(".circle").css("background-color")
document.getElementsByClassName("circle")[0].style.backgroundColor;

// JQUERY .css() - set
$(".circle").css({
    "background-color": "orange",
    "border-radius": "15%"
})

$(".circle:nth-child(5)").css({
    "background-color": "red"
})

$(".circle:nth-child(2n)").css({
    "background": "green"
});

$(".circle:nth-child(2n+1)").css({
    "background": "cyan"
});

$(".circle:first-child").css({
    "background": "pink"
});

$(".circle:last-child").css({
    "background": "black"
});

$(".circle").click(function (event) { 

    $(event.target).toggleClass("lime");

});

$(".circle:nth-child(2n+1)").click(function (event) { 
    
    $(event.target).toggleClass("odd");
    
});

// for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
//     document.getElementsByClassName("circle")[i].style.backgroundColor = "orange";
// }

// document.addEventListener('click', function(event){

// })