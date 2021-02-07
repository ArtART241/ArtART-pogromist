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

// let boyClub = ["Ivan", "Vova", "Кристина", "Тамара", "Serega"];

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
// let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]

// // a.
// let odd = numbers.filter((item, i)=>{
//     return item % 2
// })

// let even = numbers.filter((item, i)=>{
//     return item % 2 == 0
// })


// // b.
// odd = odd.map((item, i)=>{
//     return item**3
// })


// // c.
// even = even.map((item, i)=>{
//     return item / (i+1)**2
// })


// // d.
// let newNumbers = []
// odd.forEach((item, i)=>{
//     newNumbers.push(item);
// })
// even.forEach((item, i)=>{
//     newNumbers.push(item);
// })



// // 2)
// serverData = [25, "Hello", 15321, 'a', '2', true, -43.3]

// // a. b.
// let number = [], string = [], boolean = []

// serverData.forEach((item, i)=>{
//     console.log(`Element ${item} is a ${typeof item}, so I'll push it to ${typeof item}.`);
//     if (typeof item == "number") number.push(item);
//     if (typeof item == "string") string.push(item);
//     if (typeof item == "boolean") boolean.push(item);
// })


// Destruction
// Destructing arrays
// let array = [7, 10, 14, 17, 17, 6, 14, 12, 3, 14, 15, 4, 16, 4, 19];

// let arr = ["sdvfbgn", "Biden"]
// example 1
// let [a, b] = arr;
// example 2
// arr = [1, 2, 3, 4];
// let [c,,d,] = arr;
// example 2b
// let [,d,,e] = arr;

// let [o, e] = [array.filter((item)=>{return item%2}), array.filter((item)=>{return !(item%2)})]
// console.log(o, e)

// let [odd, even] = [numbers.filter((item)=>{return (item%2)}).map((item)=>{return item**3}), numbers.filter((item)=>{return !(item%2)}).map((item, i)=>{return item/(i+1)**2})]
// console.log(odd, even, newNumbers)

// let [number, string, boolean] = [serverData.filter((item)=>{console.log(`Element ${item} is a ${typeof item}`);return typeof item == "number"}), serverData.filter((item)=>{console.log(`Element ${item} is a ${typeof item}`);return typeof item == "string"}), serverData.filter((item)=>{console.log(`Element ${item} is a ${typeof item}`);return typeof item == "boolean"})]
// console.log(number, string, boolean)

// // Spread (...) - Short destruction of an array
// console.log(...serverData);
// // Rest (...) - Short construction of an array
// console.log(...ostatok);
// let [...newNumbers] = [...odd, ...even]


// homework for 31 January
// I.
// 1)
// serverData = [24, "User", false, 85, -5, 0, 45, "google.com"]

// 2)
// let [userInfo, digits, url] = [serverData.filter((item)=>{if (typeof item == "string" && item.includes(".com") == false){return item}}), serverData.filter((item)=>{return typeof item == "number"}), serverData.filter((item)=>{if (typeof item == "string" && item.includes(".com") == true){return item}})];
// console.log(userInfo, digits, url);



// // Objects / Structures in JS
// let obj = {}


// // add parameters
// obj["grade"] = 5;
// obj["name"] = "Demid"


// // Get value of parameter
// obj["grade"]
// obj.name


// // every value can be used in a parameter
// obj["print"] = (name, grade)=>{
//     console.log(`Hello I'm ${name} and I have a parameter that says grade =`, grade)
// }

// // example object
// obj["innerObj"] = {
//     "digit": -258,
//     boolean: true,
//     print: ()=>{
//         console.log("I'm a function")
//     }
// }
// obj.innerObj.print();

// console.log(obj);

// let users = [["Anna", "Bob", "Derrik", "Katya"], [14, 12, 15, 24], ["Moscow", "Cloverfield", "Kork", "Praha"]]

// users = {
//     "name": users[0],
//     "town": users[2],      //wasnt a good solution
//     "age": users[1]
// }
// console.log(users)

// // Indexing of objects (example, not working)
// for (let key in users) {
//     // name of parameter = key
//     console.log(`User ${key} lives in ${users[key].city}`);
// }

// object oriented programming (OOP) / classes in JavaScript

// 1) Incapsulation
// 2) Polyphormism
// 3) Inheritance
// 4) Abstraction


users = {
    Administrator: {
        user1: {
            username: "Kotik",
            full_name: "Lukas Jefrey",
            age: "32",
            registDate: "01.01.2016",
            logInDate: "01.02.2021",
            superuser: true
        }
    },
    Moderator:{
        user1: {
            username: "N1ckNack",
            full_name: "Andrew Garfield",
            age: "35",
            registDate: "12.01.2016",
            logInDate: "02.02.2021",
            accessLevel: "3"
        },
        user2: {
            username: "HelloKitty",
            full_name: "Tobey Maguiere",
            age: "28",
            registDate: "13.01.2016",
            logInDate: "03.02.2021",
            accessLevel: "1"
        }
    },
    User: {
        user1: {
            username: "ArtArt",
            full_name: "Artem Grauberger",
            age: "16",
            registDate: "30.09.2017",
            logInDate: "23.04.2018",
            isBanned: false
        },
        user2: {
            username: "Blabla",
            full_name: "Tom Holland",
            age: "21",
            registDate: "24.01.2017",
            logInDate: "08.08.2019",
            isBanned: true
        },
        user3: {
            username: "KollegeBronsted",
            full_name: "Elizabeth Olsen",
            age: "32",
            registDate: "30.03.2018",
            logInDate: "31.03.2018",
            isBanned: false
        },
        user4: {
            username: "Lightwell",
            full_name: "Robert Downey Jr.",
            age: "54",
            registDate: "17.06.2017",
            logInDate: "23.04.2018",
            isBanned: false
        }
    }
}





