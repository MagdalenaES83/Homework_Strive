/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const ex1 = function(a,b){
    if (a === b) {
        sum = (a + b)*3
        return sum
    }
    else {
    return sum = a+ b
}}
console.log(ex1(6,258))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/


 const ex2 = function(number1, number2){
     if ( number1 === 50 || number1+number2 === 50 ) {
        console.log("   true")
     }
     else (console.log("sum are ikke equal 50 "))
 }
console.log(ex2(25,35))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

myString ="Hello Srivers!!!"
const ex3 = function(myString, possision){
    let ABC = myString.substring(0,possision)
    let DEF = myString.substring(possision+1, myString.length);
    return (ABC +DEF)
}

console.log(ex3(myString,0));
/*

4)
 Create a function to find the largest of three given integers.
*/


const ex4 = function (a,b,c){
    max =0; 
if (a > b && a > b){
    max = a ;
return max }
else if  (b > a && b > c){
    max = b ;
return max }
else ({ return: c })
}
console.log(ex4(5,898,36454545))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
 let d = 0
 let f = 0

 const ex5 = function(d,f){
     if  (( 40 < d && d < 60 && 40 < f && f < 60 ) || (x >= 70 && x <= 100 && y >= 70 && y <= 100));
      return true;}
       
     
 console.log(ex5(50,69))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const ex6 = function(MyString, nrOfCopies){
    if (nrOfCopies < 0)
    return false;

    else return MyString.repeat(nrOfCopies)


}
console.log(ex6("odfjsdjfsodjf", 5))

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/



const ex7 = function(city1, citty2){
if ((city.substring(0,3) === "Los " ) ||  (city2.substring(0,3 ) === "New" ))

{return city1, city2;}

return ""


 
}

console.log(ex7("Hongkong, New Orlean"))


/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/



const ex8 = function(y, t, b){
    let sum = y + t +b
return sum
}
console.log(ex8(458,564,321))

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const ex9 = function(x,y){
    let myArray= [x, y]
    if ((myArray[0] === 1 || myArray[0] === 3) 
    || (myArray[1] === 1 || myArray[1] === 3))
    return true;  

}
console.log(ex9(656,8484))

/*

10) 
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const ex10 = function(x,y){
    let myArray= [x, y]
    if ((myArray[0] === 1 || myArray[0] === 3) || (myArray[1] === 1 || myArray[1] === 3))
    return false;
    }

console.log(ex10(656,8484))

/*

11)

Create a function to find the longest string from a given array of strings.*/
let ex11 = function(str1, str2){
if (str1.length > str2.length) {  
return str1;}
else {return str2}
}

console.log(ex11("sjsjfsodjsjf", "sofjsojfajPSOAPAJISDJOSKøkaas"))


/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const ex12 = function(angle){
let angle = 0 
if (angle > 0 && angle < 90 ){  
return "acute angle"
}
if (angle === 90) { 
return "right angle"}

if (angle > 90 && angle > 180) { 
return " obtuse angle "}

if (angle === 180){
    return - "straight angle "
}

}

console.log(ex12(86))


/*
13)

Create a function to find the index of the greatest element of a given array of integers*/

const ex13 =function(a,b,c,d,e,g){
 let max_number = Math.max(a,b,c,d,e,g);

return max_number.findIndex(a,b,c,d,e,g)

}

console.log (ex13( 4564,41,264,2,86,26) )
    

/*

//14) Create a function to get the largest even number from an array of integers. */

const ex14 = function(){
myArray = [4564,41,264,2,86,26 ]
let new_max = myArray.Math.max()

}


///15)Create a function to check from two given integers, whether one is positive and another one is negative.


const ex15 = function(a,b){
    if (a >0 && b> 0)
    {return "both are positive"}
    else if 
    (a < 0 || b <0) {
    return "one of them are negative"}
    else 
    {return " both are negative"}
}

console.log(ex15(29343,-56))



//16)Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
let stringloooong ="HEllo"
const ex16 = function(stringloooong){

    let new_string = stringloooong.toLoweCase[0,1,2]
    let new_string2 = new_string.toUpperCase[3,4]
    return new_string2
}




//17)/Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const ex17 = function(a,b){
    
    
     const suma = a + b;
     if (sumas >= 50 && suma <= 80) {
       return 65;
     }
     return 80;
   }

console.log(ex17(54,5))


//18)//Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
/*
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
