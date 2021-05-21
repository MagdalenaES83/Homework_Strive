/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/


/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

l1 = 15
l2 = 35

const area = function(l1, l2)  {console.log( l1 * l2); }

console.log(area)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

BB = 25
HH = 38
const crazySum = function(BB, HH){ 
    if (BB === HH) return ((BB + HH) * 3))
    else (return BB + HH )}
crazySum
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/


x = 25
const  crazyDiff = function(x){
    if (x > 19 return (x-19) * 3)
    else (return x-19)}

crazyDiff

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

n = 20
const boundary = function (n){ 
    if (n > 20 && n =< 100  return true)
    else (return false)

boundary

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
let name = "school "
const strivify =  function (name) {
    let ord = " Strive"
    console.log( name + ord)}

strivify


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
XX = 88
const check3and7 = function () {
    if (XX > 0 && XX % 3 === 0) 
        return console.log("this number multiple of 3")
    else  (XX % 7 === 0)
        return console.log("this number multiple of 7")}

check3and7


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

ord1 = "Strive school"

const reverseString = function(ord1) 
    {console.log(ord1.reverse)}

reverseString

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(ord1)
    {return ord1.toUpperCase()}

upperFirst

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(ord1)
{ord2 = ord1.substring(0)
ord3 = ord2.substring(-1)
return ord3}

cutString

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom()
var x = Math.floor((Math.random() * 10) + 1);


/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/