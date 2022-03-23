console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
[1, 7, 9, 45]

["str", "alex", "moh"]

['the', 'fox', 'over', 'lazy', 'dog']



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
the index of Banana = 1

the index of Tomato = 0

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let Favorites = ["mansaf", "burger", "French fries", "shawerma", "falafel", "football", "biking", "basketball", "The Shawshank Redemption", "The Godfather", " The Departed ", "The Prestige"]


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => t
*/
function firstOfArray([...arr]) {
    return arr.shift();
}
document.write(firstOfArray([1, 4, 5])); // output 1
document.write(firstOfArray(["t", "u", "g", "x"])); //output t
/*
       5
       Create a function called lastOfArray
       that take an array as a parameter
       and return the last element in an array

       Ex: lastOfArray([1,4,5]) => 5
       Ex: lastOfArray(["t","u","g","x"]) => "x"
       */
function firstOfArray([...arr]) {
    return arr.pop();
}
document.write(firstOfArray([1, 4, 5])); // output 5

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9]
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
console.log(array); // or we can use chain method to save our time

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log(array2.push()) //return  4 which means that the array contain 4 elements
console.log(array2.unshift()) //return  4 which means that the array contain 4 elements
console.log(array2.shift()) //return  5 which is the first elemnt in array  that it is shift and restore its value
console.log(array2.pop()) //return 3.5 which is the last elemnt in the array  that it is pop and restore its value
    /*
    8
    Create a function called middleOfArray
    that take an array as a parameter
    and return the middle element in an array if it is have an odd elemnets
    and return the two middle elemnt in an array if it is have an even elemnets

    Ex: middleOfArray([1,4,5]) => 4
    Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
    */
function middleOfArray([...arr]) {
    if (arr.length % 2 !== 0) {
        var theMiddle = arr[Math.floor(arr.length / 2)];
    } else {
        var theMiddle = ` ${arr[Math.floor(arr.length / 2)-1]} and ${arr[Math.floor(arr.length /2)]} `;
    }
    return theMiddle;
}
document.write(middleOfArray([1, 4, 5, 5])); //output 4 and 5
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
*/
animals[3] = "zebra";
animals[4] = "elephant";


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array, index) {
    return array[index];
}
let nums = [1, 2, 3, 8, 9];
document.write(indexOfArray(nums, 4)); //output 9


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(removeLast) {
    removeLast.pop();
    return `[${removeLast}]`;
}
let array = [1, 2, 3, 4, 5, 6, 3, 4, 5, 5, 66, 6, 66, "AHMED"];
document.write(arrayExceptLast(array)); //output [1,2,3,4,5,6,3,4,5,5,66,6,66]

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(array, added) {
    array.splice(length - 1, 1, added);
    return `[${array}]`;
}
let nums = [1, 2, 3, 8, 9, 10, 2, 22, 22, 2, 22, 22, 23, 100];
document.write(addToEnd(nums, 55)); //output [1,2,3,8,9,10,2,22,22,2,22,22,23,55]

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function sumArray(sumOfArray) {
    let sum = 0;
    for (let i = 0; i < sumOfArray.length; i++) {
        sum += sumOfArray[i];
    }
    return sum;
}
let array = [1, 2, 3, 5, 8, 9];
document.write(sumArray(array)); //output 28
/* while loop */
function sumArray(sumOfArray) {
    let sum = 0;
    let i = 0;
    while (i < sumOfArray.length) {
        sum += sumOfArray[i];
        i++
    }
    return sum;
}
let array = [1, 2, 3, 5, 8, 9];
document.write(sumArray(array)); //output 28

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function minInArray(minValue) {
    let min = minValue[0];
    for (let i = 0; i < minValue.length; i++) {
        if (minValue[i] < min) {
            min = minValue[i];
        }
    }
    return min;
}

let nums = [1, 2, -3, 8, 9];
document.write(minInArray(nums)); //output -3
/* while loop */
function minInArray(minValue) {
    let min = minValue[0];
    let i = 0;
    while (i < minValue.length) {
        if (minValue[i] < min) {
            min = minValue[i];
        }
        i++
    }
    return min;
}

let nums = [1, 2, -3, 8, 9];
document.write(minInArray(nums)); //output -3
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

/* for loop */
function removeFromArray(array, numRemoved) {
    let indexOfRemoved = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numRemoved) {
            indexOfRemoved = i;
            break;
        }
    }
    delete array[indexOfRemoved];
    return array;
}
let nums = [1, 2, 3, 8, 9];
document.write(removeFromArray(nums, 8));
/* while loop */
function removeFromArray(array, numRemoved) {
    let indexOfRemoved = 0,
        i = 0;
    while (i < array.length) {
        if (array[i] === numRemoved) {
            indexOfRemoved = i;
            break;
        }
        i++;
    }
    delete array[indexOfRemoved];
    return array;
}
let nums = [1, 2, 3, 8, 9];
document.write(removeFromArray(nums, 8));
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*for loop */
function oddArray(TransformArrayToOdd) {
    let oddArrays = [];
    for (let i = 0; i < TransformArrayToOdd.length; i++) {
        if (TransformArrayToOdd[i] % 2 == 1) {
            oddArrays.push(TransformArrayToOdd[i]);
        }
    }
    return `[${oddArrays}]`;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(oddArray(arr)); //output [1,3,5,7,9]
/*while loop */
function oddArray(TransformArrayToOdd) {
    let oddArrays = [],
        i = 0;
    while (i < TransformArrayToOdd.length) {
        if (TransformArrayToOdd[i] % 2 == 1) {
            oddArrays.push(TransformArrayToOdd[i]);
        }
        i++;
    }
    return `[${oddArrays}]`;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(oddArray(arr)); //output [1,3,5,7,9]
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function aveArray(array) {
    let sum = 0,
        avarege = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avarege = sum / array.length;
    return avarege;
}
let nums = [1, 2, 3, 8, 9, 77];
document.write(aveArray(nums)); //output 16.66
/* while loop */
function aveArray(array) {
    let sum = 0,
        avarege = 0,
        i = 0;
    while (i < array.length) {
        sum += array[i];
        i++
    }
    avarege = sum / array.length;
    return avarege;
}
let nums = [1, 2, 3, 8, 9, 77];
document.write(aveArray(nums)); //output 16.66
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function shorterInArray(shortString) {
    let short = shortString[0];
    for (let i = 0; i < shortString.length; i++) {
        if (shortString[i].length < short.length) {
            short = shortString[i];
        }
    }
    return short;
}
let strings = ["alexe", "mercer", "madrasa", "rashed2", "emad", "hala"];
document.write(shorterInArray(strings)); //output emad
/* while loop */
function shorterInArray(shortString) {

    let short = shortString[0],
        i = 0;
    while (i < shortString.length) {
        if (shortString[i].length < short.length) {
            short = shortString[i];
        }
        i++;
    }
    return short;
}
let strings = ["alexe", "mercer", "madrasa", "rashed2", "emad", "hala"];
document.write(shorterInArray(strings)); //output emad

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function repeatChar(str, Char) {
    str = str.toLowerCase();
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === Char) {
            counter++;
        }
    }
    if (counter == 0) {
        return 0;
    } else {
        return counter;
    }
}
let string = "alex mercer madrasa rashed2 emad hala";
document.write(repeatChar(string, "a")); //output 8
/*while loop */
function repeatChar(str, Char) {
    str = str.toLowerCase();
    let counter = 0,
        i = 0;
    while (i < str.length) {
        if (str[i] === Char) {
            counter++;
        }
        i++;
    }
    if (counter == 0) {
        return 0;
    } else {
        return counter;
    }
}
let string = "alex mercer madrasa rashed2 emad hala";
document.write(repeatChar(string, "a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*for loop */
function evenIndexOddLength(Strings) {
    let string = [];
    for (let i = 0; i < strings.length; i += 2) {
        if ((strings[i].length) % 2 === 1) {
            string.push(strings[i]);
        }
    }
    return `[${string}]`;
}
let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
document.write(evenIndexOddLength(strings)); //output [madrasa]
/* while loop */
function evenIndexOddLength(Strings) {
    let string = [],
        i = 0;
    while (i < strings.length) {
        if ((strings[i].length) % 2 === 1) {
            string.push(strings[i]);
        }
        i += 2;
    }
    return `[${string}]`;
}
let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
document.write(evenIndexOddLength(strings)); //output [madrasa]
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/* for loop */
function powerElementIndex(numbers) {
    let powerNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let powerd = Math.pow(numbers[i], i);
        powerNumbers.push(powerd);
    }

    return `[${powerNumbers}]`;

}
let nums = [44, 5, 4, 3, 2, 10];
document.write(powerElementIndex(nums)); //output [1,5,16,27,16,100000]
/* while loop */
function powerElementIndex(numbers) {
    let powerNumbers = [],
        i = 0;
    while (i < numbers.length) {
        let powerd = Math.pow(numbers[i], i);
        powerNumbers.push(powerd);
        i++;
    }

    return `[${powerNumbers}]`;

}
let nums = [44, 5, 4, 3, 2, 10];
document.write(powerElementIndex(nums)); //output [1,5,16,27,16,100000]
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
/*for loop */
function evenNumberEvenIndex(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i += 2) {
        if (numbers[i] % 2 === 0)
            evenNumbers.push(numbers[i]);
    }
    return `[${evenNumbers}]`;
}
let nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
document.write(evenNumberEvenIndex(nums)); //output [2,8,34]

/* while loop */
function evenNumberEvenIndex(numbers) {
    let evenNumbers = [],
        i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0)
            evenNumbers.push(numbers[i]);
        i += 2
    }
    return `[${evenNumbers}]`;
}
let nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
document.write(evenNumberEvenIndex(nums)); //output [2,8,34]