function testing(val) {
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
function cards (card) {
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