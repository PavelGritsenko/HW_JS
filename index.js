// var quotient = 66 / 33;
// console.log(quotient)

// var myVar = 87;
// myVar++;
// console.log(myVar)

// var myVar = 11;
// myVar--;
// console.log(myVar)

// var myDecimal = 5.7;
// console.log(myDecimal)

// var product = 2.0 * 2.5;
// console.log(product)

// var quotient = 4.4 / 2.0;
// console.log(quotient)

// var remainder;
// remainder = 11 % 3;
// console.log(remainder)

// var a = 3;
// var b = 17;
// var c = 12;
// a += 12;
// b += 9;
// c += 7;
// console.log(a)
// console.log(b)
// console.log(c)

// var a = 11;
// var b = 9;
// var c = 3;
// a -= 6;
// b -= 15;
// c -= 1;
// console.log(a)
// console.log(b)
// console.log(c)

// var a = 5;
// var b = 12;
// var c = 4.6;
// a *= 5;
// b *= 3;
// c *= 10;
// console.log(a)
// console.log(b)
// console.log(c)

// var a = 48;
// var b = 108;
// var c = 33;
// a /= 12;
// b /= 4;
// c /= 11;
// console.log(a)
// console.log(b)
// console.log(c)

// var myFirstName = 'Pavel';
// var myLastName  = 'Gritsenko';
// console.log(myFirstName)
// console.log(myLastName)

// var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr)

// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr)

// var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';
// console.log(myStr)

///////////////////////////////////////////////////////////////////

var myStr = 'This is the start. ' + 'This is the end.';
console.log(myStr)

var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';
console.log(myStr)

var myName = 'Pavel';
var myStr = 'My name is ' + myName + ' and I am well!';
console.log(myStr)

var someAdjective = 'ffgfcgfc';
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength)

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr)

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; 
console.log(thirdLetterOfLastName)

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName)

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName)

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = 'my ' + myNoun + ' is ' + myAdjective + ' and ' + myVerb + ' very ' + myAdverb;
console.log(wordBlanks)

var myArray = ['sjfgh', 4];
console.log(myArray);

var myArray = [['wqdqd', 'fdf'], [2, 4]];

var myArray = [50,60,70];
let myData  = myArray[0];

var myArray = [18,64,99];
myArray[0] = 45;

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

var myList = [['fsds', 3], ['fdfd', 4], ['dsd', 5], ['dsds', 6], ['qweeqweq', 9]];

function reusableFunction (){
    console.log('Hi World');
}
reusableFunction ();

function functionWithArgs(param1, param2){
    console.log(param1 + param2)
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

var myGlobal = 10
function fun1() {
    oopsGlobal = 5
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

function myLocalScope() {
    var myVar = 'qwe'
    console.log('inside myLocalScope', myVar);
    }
myLocalScope();
console.log('outside myLocalScope', myVar);

var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = 'sweater';
    return outerWear;
}
myOutfit();

function timesFive (i){
    return i = i * 5;
}
var answer = timesFive(5);
console.log(answer);
var answer = timesFive(2);
console.log(answer);
var answer = timesFive(0);
console.log(answer);

var sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}
addThree();
addFive();

var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();    
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans() {
    return true; 
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
var res = trueOrFalse(true);
console.log(res)
res = trueOrFalse(false);
console.log(res)

function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}
var res = testEqual('12');
console.log(res);

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
var res = testStrict('7');
console.log(res);

function compareEquality(a, b) {
    if (a === b) { 
        return "Equal";
    }
    return "Not Equal";
}
var res = compareEquality(10, "10");
console.log(res);

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
var res = testNotEqual('bob');
console.log(res)

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
var res = testStrictNotEqual(10);
console.log(res);

function testGreaterThan(val) {
    if (val > 100) { 
        return "Over 100";
    }
    if (val > 10) {  
        return "Over 10";
    }
    return "10 or Under";
}
var res = testGreaterThan(150);
console.log(res);

function testGreaterOrEqual(val) {
    if (val >= 20) {  
        return "20 or Over";
    }
    if (val >= 10) {  
        return "10 or Over";
    }
    return "Less than 10";
}
var res = testGreaterOrEqual(21);
console.log(res);

function testLessThan(val) {
    if (val < 25) {  
        return "Under 25";
    }
    if (val < 55) {  
        return "Under 55";
    }
    return "55 or Over";
}
var res = testLessThan(10);
console.log(res);

function testLessOrEqual(val) {
    if (val <= 12) {  
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) { 
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
var res = testLessOrEqual(10);
console.log(res);

function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}
var res = testLogicalAnd(80);
console.log(res);

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
var res = testLogicalOr(25);
console.log(res);

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
var res = testElse(6);
console.log(res);

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }else if (val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}
var res = testElseIf(0);
console.log(res);

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
var res = orderMyLogic(11);
console.log(res);

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }else if (num < 10) {
        return "Small";
    }else if (num < 15) {
        return "Medium";
    }else if (num < 20) {
        return "Large";
    }else if (num >= 20) {
        return "Huge";
    }else {
        return "Change Me";
    } 
    }
var res = testSize();
console.log(res);

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par - 2) {
        return names[1];
    }else if (strokes == par - 1) {
        return names[2];
    }else if (strokes == par) {
        return names[3];
    }else if (strokes == par + 1) {
        return names[4];
    }else if (strokes == par + 2) {
        return names[5];
    }else {
        return names[6];
    }
}
var res = golfScore(5, 9);
console.log(res);

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1: answer = 'alpha'; break;
        case 2: answer = 'beta'; break;
        case 3: answer = 'gamma'; break;
        case 4: answer = 'delta';
    }
    return answer;
}
var res = caseInSwitch(4);
console.log(res);

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case 'a': answer = 'apple'; break;
        case 'b': answer = 'bird'; break;
        case 'c': answer = 'cat'; break;
        default: answer = 'stuff';
    }
    return answer;
}
var res = switchOfStuff(4);
console.log(res);

