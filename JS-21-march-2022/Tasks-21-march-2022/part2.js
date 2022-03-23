// Please be sure to conect this file to another HTML file
// to seprate it from the recursion file

// Dont serach on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And dont look or use a code that you wrote before 

console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(num) {
    let sub = num;
    let i = num - 1;
    while (i >= 0) {
        sub -= i;
        i--;
    }
    return sub;
}
let n = prompt("enter number here :");
document.write(subtract(parseInt(n)));

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
let fac = 1;
let counter = 2;
let number = 5;
while (counter <= number) {
    fac *= counter;
    counter++;
}

console.log(fac);

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(str, times) {
    let result = str.repeat(times);
    return result;
}

let text = prompt("Enter text you want to repeat :: ");
let times = prompt("Enter times :: ");
times = Number(times);
text = text + " ";
document.write(repeatStr(text, times));

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/


function sum2(a, b) {
    return a + b;
}
document.write(sum2(10, 20));
/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(str1, str2) {
    str2 = str2.trim();
    str2Length = str2.length;
    str1 = str1 + " ";
    return str1.repeat(str2Length);
}

let res = repeatStr2("ro", "fff");
document.write(res);

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(num1, num2, num3) {
    let res = 1;
    res = num1;
    res = res * Math.pow(num2, num3);
    return res;
}
document.write(multiOf(4, 10, 3));
/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(start, end) {
    let multi = start,
        i = start + 1;
    while (i <= end) {
        multi *= i;
        i++;
    }
    return multi;
}
document.write(muti2(4, 6));
/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
let start1 = 2;
let end1 = 8;
while (start1 < end1) {

    if (start1 === end1 - 1) {
        document.write(start1);
        break;
    } else if (start1 !== end1 - 1) {
        start1++;
        document.write(start1 + ", ");
    }
}



/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function CountDown(number) {
    while (number >= 0) {
        if (number != 0) {
            console.log(number);
        } else {
            console.log("done");
        }
        number--;
    }
}
CountDown(5);
/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(number1, number2) {
    return number1 * number2;
}
document.write(multiplication2(5, 4));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
function mod2(num1, num2) {
    if (num1 === 0) {
        return 0;
    }
    if (num2 === 0) {
        return NaN;
    }
    var newNum1 = Math.abs(num1);
    var newNum2 = Math.abs(num2);

    var quot = newNum1 - Math.floor(newNum1 / newNum2) * newNum2;

    if (num1 < 0) {
        return -(quot);
    } else {
        return quot;
    }
}
document.write(mod2(21, 4)); //output 1
/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

function repeatChar(str, character) {
    let counter = 0;
    let charachterCount = 0;
    str = str.toLowerCase();

    while (counter < str.length) {
        if (str[counter] === character) {
            charachterCount++;
        }
        counter++;
    }
    return charachterCount;
}
document.write(repeatChar("school", "o")) //output 2