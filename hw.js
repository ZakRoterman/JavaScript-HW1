//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(dogString, dogNames){
    for (dog of dogNames){
        dogString = dogString.toLowerCase()
        if (dogString.indexOf(dog.toLowerCase()) != -1) {
            console.log(`Matched ${dog}.`)
        } else {
            console.log(`No Matches For ${dog}.`)
        }
    }
}

findWords(dogString, dogNames)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i+= 2) {
        arr.splice(i,1,"even index");
    };

    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// # In this simple assignment you are given a number and have to make it negative. 
// # But maybe the number is already negative?

// python code:
// def make_negative(x):
//     return -abs(x)

const n1 = 5;
const n2 = 7;
const n3 = -5;
const n4 = 100;

function makeNegative(x){
    console.log(-Math.abs(x))
};

makeNegative(n4)

// Square N Sum
// # Complete the square sum function so that it squares each number passed into 
// # it and then sums the results together.

// def square_sum(numbers):
//     sum = 0
//     for num in numbers:
//         sum+= num**2
//     return sum

let numbers = [5,2]

function squareSum(numbers){
    let sum = 0;
    for (let num of numbers){
        sum+= num**2
    };
    return sum
};

console.log(squareSum(numbers))