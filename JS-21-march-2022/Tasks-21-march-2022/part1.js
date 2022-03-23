/* 1. Write a JavaScript program that accept two integers and
  display the larger. Go to the editor */
/******* Start Your Code *********/
let a = prompt("enter the number here : ");
let b = prompt("enter the number here : ");
if (parseInt(a) === 'string' && parseInt(b) === 'string') {
    document.write("please enter number in the box");
} else {
    let large = a;
    if (parseInt(b) > parseInt(a)) {
        document.write(`the larger number is b ${b}`);
    } else if (parseInt(b) === parseInt(a)) {
        document.write("The Numbers are equal");
    } else {
        document.write(`the larger number is a ${a}`);
    }
}


/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let x = prompt("Enter First numbers :: "),
    y = prompt("Enter second numbers :: "),
    z = prompt("Enter third numbers :: "),
    large, small, medium;
x = Number(x);
y = Number(y);
z = Number(z);

if (x > y && x > z) {
    large = x;
    if (y > z) {
        medium = y;
        small = z;
    } else {
        medium = z;
        small = y;
    }
} else {
    if (y > z) {
        large = y;
        if (z > x) {
            medium = z;
            small = x;
        } else {
            medium = x;
            small = z;
        }
    } else if (z > y) {
        large = z;
        if (x > y) {
            medium = x;
            small = y;
        } else {
            medium = y;
            small = x;
        }
    }
}
alert(`${"Numbers in descinding order :: "} ${large} ${medium} ${small}`);


/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let a = 10,
    b = 20,
    c = 30,
    d = 40,
    e = 50,
    f = 60;

if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
}

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x = prompt("Enter x :: ");
let y = prompt("Enter y :: ");
x = Number(x);
y = Number(y);

if (x > y) {
    alert("Hello,World!");
} else {
    alert("GoodBye!");
}

/******* End Your Code ********* */