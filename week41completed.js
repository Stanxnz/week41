/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}





/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
console.log("Task: A");

let storeValues = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

let totalSum = 0;

for (let i = 0; i < storeValues.length; i++){
    totalSum += storeValues[i]
}

function calculateSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let totalSumFromFunction = calculateSum(storeValues);

console.log("Total sum using the loop:", totalSum);
console.log("Total sum using the function:", totalSumFromFunction);


/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
console.log("Task: B");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'pear', 'peach', 'plum', 'watermelon', 'blueberry', 'raspberry', 'blackberry', 'strawberry', 'cherry', 'lemon', 'lime', 'pomegranate', 'apricot'];

let position = -1;

for (let i = 0; i < fruits.length; i++){
    if (fruits[i] === 'raspberry'){
        position = i;
    }
}

console.log("Position of the word 'raspberry' is:", position);

function findFruitPosition(fruitlist, fruitname){
    for (let i = 0; i < fruitlist.length; i++){
        if (fruitlist[i] === fruitname){
            return i;
        }
    }
    return -1;
}

let positionOfRaspberry = findFruitPosition(fruits, 'raspberyy');
console.log("Positions of 'raspberry' using the function:", positionOfRaspberry);

/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");

let fruitsThatStartWithB = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][0] === ' b'){
        fruitsThatStartWithB.push(fruits[i]);
    }
}

console.log("Number of fruits starting with 'b':", fruitsThatStartWithB);
console.log("Fruits starting with 'b':", fruitsThatStartWithB);






/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");

let nameLongerThen8Char = 0;

for (let i = 0; i < fruits.length; i++){
    if (fruits[i].length > 8){
        nameLongerThen8Char++;
    }
}

console.log("Number of fruits with more then 8 characters:", nameLongerThen8Char);



/* -----------------------------------------------------------------------------
    Task: E
    
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

function areBothListsEqual(listA, listB){
    if (listA.length !== listB.length){
        return false;
    }
    for (let i=0; i < listA.length; i++){
    let listIsEqual = false;
}

for (let i = 0; i < listB.length; i++){
    if (listA[i] === listB[i]){
        listIsEqual = true;
    }
}

if (!listIsEqual){
    return false;
}
for (let i=o; i < listB.length; i++){
    let listIsEqual = false;

    for (let i=0; i < listA.length[i]){
        listIsEqual = true;
    }
}

if (!listIsEqual){
    return false;
}

return true;

}

const result = areBothListsEqual(A, B);
console.log("Are both lists equal?", result);

//something is bugging this code but I cannot seem to find it :(




