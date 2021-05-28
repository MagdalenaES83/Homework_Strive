


console.log(" ex 21")
const x = "John"
const y = "Doe"
console.log(x + " <> " + y)



console.log(" ex  22 -23")
const data= { name:"Loki", surname :"Sochon" , email:"dogy@dogy.com"}
delete data.email; 
console.log(data)

console.log(" ---------------------ex25")
const ex25 = ["Plum" ,"Banana", "Raspberry","Mandarin", "Jackfruit", " Papaya", " Kiwi",
   " Pineapple",  "Lime", "Lemon"]

console.log(ex25.join('\r\n'))

console.log(" ------------------ex26")

const ex26 = []

while(ex26.length < 100) {
const randomNumber = Math.floor(Math.random ()  * 9999) +1;
if (ex26.indexOf(randomNumber) === -1) ex26.push(randomNumber)
}
    console.log(ex26)


console.log(" --------------------ex 27 min/ max ")

ex26.sort(function(a, b){return a-b});
console.log("min number is " + ex26[0], )
console.log("max number is " + ex26[99], )


console.log(" - ex 28 Create an array of arrays, in which every array has 10 random numbers")
//   Create an array of arrays, in which every array has 10 random numbers


let ex28 = [];
for(let i = 0; i < 10; i++){
     let current = [];
     for(let j = 0; j < 10; j++)
          current.push(Math.floor(Math.random() * 10));
     ex28.push(current);
}
console.log(ex28)

console.log(" - ex 29 Create a function that gets 2 arrays and returns the longest one")

const X1 = [5, 3, 9]
const Y2 = [25, 66 ,6]
const ex29 = function() {
    if (X1.length > Y2.length )
    {console.log("array number 1 is longer", X1)}
    else {console.log("array 2 is longer " + Y2)}
}
ex29(X1, Y2)
console.log("       ")

console.log(" - ex 30 Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values")

console.log("       ")
    


const ex30 = function() { 
    let X11 = X1.reduce((a, b) => a + b, 0)
    let Y22 = Y2.reduce((a, b) => a + b, 0)

    if( X11> Y22){ console.log("sum of first array is higher: " , X11)}
    else { console.log("sum of second  array is higher: " , Y22)}

}
ex30()

///// ex31
const  ex31 = document.getElementById("Hello")
       



const ex32 = document.getElementsByTagName("td")
///////////////////////////////////////////////////////////////




const ex33 = function() {
    const newText = document.getElementsByTagName("td")
    newText.forEach((ttt) => { ttt.innerText = "new text";
});
        for(let i= 0; i<12 ; i++) {
        const ttt =  paragraphs[i]
}}


/////////// ex34
const Head = function (abc) {
    let h1 = document.querySelector("h1")
     h1.innerText = abc 
};
Head("New Heading!!! ")

/////// ex 35
const ex35 = function()
{   
        var table = document.getElementById("ex14");
        var row = table.insertRow(5);
        var cell1 = row.insertCell(5);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "NEW ";
        cell2.innerHTML = "NEW ";
      }
    
ex35()    

///////// ex 36

const ex36 = function(){
            let newTest = document.querySelector("tr")
            h1.classList.add("test")     };
ex36()

/////// ex 37


const colorLinks = document.getElementsByName("a")
const ex37 = function(){
    let color = "#" +Math.floor(Math.random()*255).toString(16)
    colorLinks.style.backgroundColor = color
}

ex37()


//38

function ex38() {
    alert("Page is loaded");
  }

ex38()

/// 39
const ex39 = function(){
    let FullList  = document.getElementsByTagNameNS("#listJS")           
    let ul = `<ul>${content}</ul>`
    FullList.innerHTML += li
       
    };
ex39("something borrow, something blue")

//40
const ex40 = function(){
    let MakeItEmpty = document.getElementsByTagNameNS("#listJS")
    MakeItEmpty.remove()












