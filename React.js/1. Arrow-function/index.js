// I
// let userName = "Artem";
// let userBirthYear = 2004;
// console.log("Привет, " + userName + ", \nв 2025 тебе будет " + (2025 - userBirthYear) + " лет");

// console.log(`Hello, ${userName},
// in 2025 you'll be ${2025 - userBirthYear} years old`);

//II
// let fruits = ["Apple", "Pineapple", "Banana", "Tomato", "Lemon", "Orange", "Watermelon"];

// for (i = fruits.length - 1; i>-1; i--)  console.log(fruits[i]);


// let fruitsReversed =  fruits.reverse();
// for (let i in fruitsReversed)  console.log(fruitsReversed[i]);

//III
// Advanced working with arrays

// .forEach() - normal way to go through an array without any changes 
// fruits.forEach(function (item, i) {

//     console.log(`fruit ${item} is in place ${i}`)
// })

// // .map - going through an array by changing the array itself
// let notEatable = fruits.map(function (item, i) {

//     if (item == "Tomato") item = "Candy"

//     return item
// })

// console.log(notEatable)


// arrow function
//(arg1, arg2) => {

//}


//intern function - a function 


//some random homework:

let boyClub = ["Ivan", "Vova", "Кристина", "Тамара", "Serega"];

// boyClub = boyClub.map((item, i) => {
//     if (item == "Kristina") { console.log(`${item} is not part of us!`); item = "Boris"; }
//     if (item == "Tamara") { console.log(`${item} is not part of us!`); item = "Egor"; }

//     return item;
// });

// console.log(boyClub);

// let newBoyClub = []

// boyClub.forEach((item, i) => {
//     if (item != "Kristina") {
//         if (item != "Tamara") {
//             newBoyClub.push(item)
//         }
//     }
// })

// console.log(newBoyClub)

// function .filter()

// boyClub = boyClub.filter((item, i) => {
//     return (item != "Kristina" && item != "Tamara")
// })
// console.log(boyClub)

// let numbers = [1, 2, 3, -6, 4, 8, 0];

// numbers = numbers.filter((item, i) => {
//     return item >= 0;
// })

// console.log(numbers);

// let girlNames = ["Елена", "Василиса", "Юля", "Антонина", "Кристина", "Тамара", "Кира", "София", "Алиса", "Арина", "Татьяна"]

// boyClub = boyClub.filter((item, i)=>{
//     // return !girlNames.includes(item)
//     return !(girlNames.indexOf(item) >= 0)
// })

// console.log(boyClub)




// let numbers = [3, 435, 4534, 23, 2, 565, 6786, 34, 67, 34, 56, 6 , 4, 46, 46]

// numbers = numbers.filter((item, i)=>{

//     return item%2 != 0
// })

// console.log(numbers)

// numbers = numbers.map((item, i)=>{
//     item *= 10
//     return item
// })


//the veery short way
// numbers = numbers.filter((item, i)=>{return item%2}).map((item, i)=>{return item*10})

// console.log(numbers);



// homework for 24 January
// 1)
let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]

// a.
let odd = numbers.filter((item, i)=>{
    return item % 2
})

let even = numbers.filter((item, i)=>{
    return item % 2 == 0
})


// b.
odd = odd.map((item, i)=>{
    return item**3
})


// c.
even = even.map((item, i)=>{
    return item / (i+1)**2
})


// d.
let newNumbers = []
odd.forEach((item, i)=>{
    newNumbers.push(item);
})
even.forEach((item, i)=>{
    newNumbers.push(item);
})



// 2)
serverData = [25, "Hello", 15321, 'a', '2', true, -43.3]

// a. b.
let number = [], string = [], boolean = []

serverData.forEach((item, i)=>{
    console.log(`Element ${item} is a ${typeof item}, so I'll push it to ${typeof item}.`);
    if (typeof item == "number") number.push(item);
    if (typeof item == "string") string.push(item);
    if (typeof item == "boolean") boolean.push(item);
})
