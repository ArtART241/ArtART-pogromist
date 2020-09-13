
function onSubmit(event) {

    event.preventDefault();

    let form = event.target;
    let name = form.userName.value;
    let age = form.age.value;
    let from = form.check.value;

    // in development



    let s = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + from + ", it was worth it, because grandma had a lot of money. ";
    story.innerHTML = s;

    // got elements from checkboxes
    let userLike = document.getElementsByClassName("userLike");
    let like = [];

    for (i = 0; i < userLike.length; i++) {
        if (userLike[i].checked == true) {
            like.push(userLike[i].value)
           
            
        }
       
    } 
    console.log(like);
}

popitka.addEventListener("submit", onSubmit);