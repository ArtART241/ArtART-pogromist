
function onSubmit(event) {

    event.preventDefault();

    let form = event.target;
    let name = event.target.userName.value;
    let age = form.age.value;
    let from = form.check.value;
    // in development
    let like = form.userLike.value;

    console.log("name: " + name);
    console.log("age: " + age);
    console.log("from: " + from);
    // in development
    console.log("like: " + like);

    let s = "Once in a beautiful world " + name + " went to grandma to get some cash. Even if he was " + age + " years old and came from " + from + ", it was worth it, because grandma had a lot of money. ";
    story.innerHTML = s;

}

popitka.addEventListener("submit", onSubmit);