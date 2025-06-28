function caseExample1(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4: 
            answer = "delta";
            break;
    }
    return answer;
}

var count = 0;
function caseExample2(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet;
    if (count > 0) {
        holdbet = "bet";
    } else {
        holdbet = "hold";
    }

    return count + " " + holdbet
}

var i = 0;

while (i <=10) {
    i++
}
var total = 0;
array = [[1,2], [3,4], [5,6]]
for (i=0; i < array.length; i++) {
    for (k=0; k < array[i].length; k++) {
        total *= [i][k] 
    }
}

function randomWithinRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ternaryExample1(num) {
    return num > 0 ? "positive" : "negative";
} 
/*
    With ternary operators, the condition comes first.
    ? (question mark) represents what happens if the condition is true.
    : (colon) represents what happens if the condition is false
    below is an examlpe of a nested ternary operator.
*/
function ternaryExample2(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
// Arrow functions will use => after the parameters and there will be no need for the curly brackets
const arrowFunction = (array1, array2) => array1.concat(array2);

//Destructuring objects
const temp = {today: 77.5, tomorrow: 79};
const {tomorrow : tempTrmw} = temp;
return tempTrmw;

const localTemp = {today: {min: 72, max: 84}, tomorrow: {min: 73, max: 85}};
const {today : {min : tempToday }} = localTemp;
/*
    This second example destructures twice.
    for nested objects, however many times you nest, 
    is however many times you need to destructure to get the value.
 */

//Destructuring arrays 
const [x, y, z] = [1, 2, 3, 4, 5, 6]
[x, y] = [y, x];
// for each variable, one item will go in it, and it will go in order.
// for arrays, it can also be used to switch the values of two variables.

//constant literals 
