

let sumOfPoints;

// question 1

let questionOne = +prompt('How much will 2 + 2 be?'); // 4

if (questionOne == 4) {
    sumOfPoints = 10;
} else {
    sumOfPoints = 0;
}
console.log(questionOne, sumOfPoints);

// question 2

let questionTwo = confirm('The sun rises in the east?'); // true

if (questionTwo == true) {
    sumOfPoints += 10;
} else {
    sumOfPoints += 0;
}
console.log(questionTwo, sumOfPoints);

// question 3

let questionThree = prompt('How much will 5 / 0 be?'); // 0

if (questionThree == '0') {
    sumOfPoints += 10;
} else {
    sumOfPoints += 0;
}
console.log(questionThree, sumOfPoints);

// question 4

let questionFour = prompt('What color is the sky?'); // blue

if (questionFour == 'blue') {
    sumOfPoints += 10;
} else {
    sumOfPoints += 0;
}
console.log(questionFour, sumOfPoints);

// question 5

let questionFive = prompt('What is the correct answer to the ultimate question of life, the universe and all that?'); // 42

if (questionFive == '42') {
    sumOfPoints += 10;
} else {
    sumOfPoints += 0;
}
console.log(questionFive, sumOfPoints);

// the sum of points

alert(`Your result is ${sumOfPoints} points.`);



