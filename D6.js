/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

var test = "Loki"
console.log(test)
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
var sum = (10 +5)
console.log(sum)



/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
var random = Math.floor(Math.random()*21)
console.log(random)


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
var me = { name : "Magdalena", surname : "Sochon", age : 38}
console.log(me)


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age
console.log(me)
/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
let me2 = {};
me2["skills"] = "python ";
let me3 = {...me, ...me2}
console.log(me3)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
delete me3.skills
console.log(me3)


// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log("--------------------------- random -------------------------------------- ")

function dice(){return Math.floor(Math.random()* 7 )}

console.log(  dice() )

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

console.log("------------------------------ who is BIGGER ------------------------------")
function whoIsBigger (a,b) {
if (a > b) {console.log ("Highest number is a : ", a)}
else {console.log("Smallest number is b : ", b)}
    
}
whoIsBigger(25,3)

/* Ex.3,
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log(" ------------------------------------ splitMe ----------------------------------")
var txt = "I love coding and chocolate"

function splitMe(){
var txt2 = txt.split(" ")
console.log(txt2)

}
splitMe(txt)

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

console.log("----------------------------------------------- delete one -----------------------\n")


let Sunday = "Sunday"
console.log("total length of this string : ", Sunday.length)

let S2= Sunday.substring(1)
let S3= Sunday.slice(0,-1)

function deleteOne() {
    if (Sunday === true) {console.log("Witthout first letter: ", S2)}
    else {console.log("Without last letter: ", S3)}
}
deleteOne(Sunday)


///* Ex.5
   ///Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   ///Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
////
console.log(" ------------------------- no numbers ----------------\n") 
var sentence = "sdhsfdhsahf sdisdiashd  6345  qeq 5534 qeq I have 4 dogs "

function onlyLetters()
    {const withoutNumbers = sentence.replace(/[0-9]/g, "");
        console.log(withoutNumbers)}

onlyLetters(sentence)


/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log(" ------------------------- @@@@@@@@ ----------------\n") 

let address = "jjsjsfsdfjsfjsfj@sjsfjs"
var  itIs = address.indexOf("@");

function isThisAnEmail(){
    if (itIs >= 0) {console.log("Yr email address includes '@', so propably it is an email")}
    else {console.log("it is not email address")}}

isThisAnEmail(address)

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

console.log("---------------------------- what day is it today? ---------------------------------\n")

var day

function whatDayIsIt(){
    switch (new Date().getDay()){
        case 0:
            day = "Sunday";
            console.log(day)
            break
        case 1:
            day = "Monday";
            console.log(day)
            break
        case 2:
            day = "Tuesday";
            console.log(day)
            break
        case 3:
            day = "Wednesday";
            cconsole.log(day)
            break
        case 4:
            day = "Thursday";
            console.log(day)
            break
        case 5:
            day = "Friday";
            cconsole.log(day)
            break
        case 6:
            day = "Saturday";
            console.log(day)
            break
        
    
}}

whatDayIsIt()

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    */
console.log("----------------- roll the dice ------------------")



function rollTheDices() {
    return (1 + Math.floor(Math.random()*6)) ;}
    for(let i = 0; i < 5; i++) 
    let randomNumber = i.push()
    
    
   
    //randomNumber.push(i); // i am adding the object to the list
    //sum += randomNumber[i]; 
    //console.log(rollTheDices()); 
    //let sum = randomNumber.reduce(i)


console.log(rollTheDices()) ;
//console.log(rollTheDices("sum of numbers is: " + sum))



/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
//var year = {January: 31 , February:28 , March:31, April:30, May:31, June:30 , July:31, August :31, September:30, October:31, November:30, December:31}
console.log("---------------------- how many days-------------------")
function howManyDays (){
    const date1 = new Date("15/3/2021");
    const date2 = new Date("15/05/2021");


    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    console.log(Difference_In_Time + Difference_In_Days)
    
    console.log("Total number of days between dates  " + date1 + " and " + date2 + " is:  " + Difference_In_Days);
    }

console.log(howManyDays())


/* Ex.10-
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log("---------------------- is it my birthday??  -------------------")

let birthday = "12/06/2021"

function myBirthday(){
   var today = new Date();
    if (today === birthday ){console.log("YESSS !!! ")}
    else{console.log("Nope, not today")}
}

myBirthday()


/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log("---------------------- delete Prop-------------------")

let STRT = "Wikipedia is a free online encyclopedia, STRT created and edited by volunteers around the world and hosted by the Wikimedia Foundation."

function deleteProp() {
    var STRTIndex = STRT.search("STRT")
    console.log(STRTIndex); // index of world for deleting
    var WithOut = STRT.substring(0,40) + STRT.substring(45, 150)
    console.log(WithOut)

}

deleteProp()




const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]



/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
/* This movies array is used throughout the exercises. Please don't change it :)  */
console.log("------------------OLDEST MOVIE -----------------\n")

function olderMovie() {
    movies.sort(function(a, b){return a.Year - b.Year});
    console.log("Oldest movie is: ", movies[0]); 
}
olderMovie()


  /* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log("------------------how many movies  -----------------\n")


function countMovies(){ 
console.log("We have " + movies.length + "movies")
}
countMovies()

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log("------------------only title   -----------------\n")



function onlyTheTitles ( movies) {
    
    for (let TTT of movies.Title) { // doesnt recognize Title!!??? whyy??
        let TitlesOnly = []
        TitlesOnly = TTT.push()
    }
    
    console.log(TitlesOnly)
    }
   
onlyTheTitles()

console.log(movies.Title)


/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

console.log("------------------ > 2000  -----------------\n")
function onlyInThisMillennium (movies) {
    var onlyInThisMillennium = []
    for (let A of movies) { 
        if( A.Year >= 2000)
            onlyInThisMillennium += A ;
    }
    return onlyInThisMillennium
}
onlyInThisMillennium()


/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
var id = "tt2395427"
console.log("------------------ ID  -----------------\n")
function getMovieById () {
    for (let B of movies) {
        if( B.imdbID === id)
            return B    }
}
getMovieById(id)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log("------------------ Sum + + + + + +  -----------------\n")
function sumAllTheYears(movies)  {
    sum = 0
    for (let C of movies) {
        sum +=  parseInt(C.Year)
        }
    return sum
}
sumAllTheYears()


/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the  title.
*/
console.log("------------------ search by title -----------------\n")
function searchByTitle  (movies)  {
    let newMoives = []
    for (let D of movies) {
        if (D.Title.includes("Avengers"))
            newMoives.push(D)
    }
    return newMoives
}
searchByTitle()


/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log("------------------ search & /  -----------------\n")



function searchAndDivide  (movies)  {
    let name123 = "Hello Motto "
    let NewList = movies.push(name123)

    let match = []
    let unmatch = []
    for (let GGG of movies) {
        if(GGG.Title.includes(name123))
            match.push(movie)
        else unmatch.push(movie)  }
    return {match, unmatch}
}
    
searchByTitle()

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log("------------------  remove Index  -----------------\n")

function removeIndex  ( movies, number ) {
    let match = []
    let moviesLength = movies.length

    for (let i=0; i< moviesLength; i++) {
        if( i !== number)
            match.push(movies[i])
    }
    return match
}
removeIndex()