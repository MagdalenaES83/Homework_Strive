

const  ex5 = function(){ 
    let userText =  document.getElementById("ccc").value ;
    //userText.add(userText);
    
    }
ex5()



const ex6 = function(){
    let BB = document.getElementById("#old")
    if (BB.innerText === "WEEKEND"){ BB.innerText =  userText }
    else { BB.innerHTML = "WEEKEND"}
    }

const ex7 = function(){
if (userText === undefined){ alert("Please, fill ut the text ")}
else { return}
}
 



document.body.onload = addElement;
const ex8 = function(){
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Enrolled Students");

    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}


const ex9 = function() {
var ABCD = document.createElement("ul");
ABCD.innerHTML = "this is a new list";
document.getElementById("div1").appendChild(ABCD);

}

const ex10 = function(){
    var column = document.getElementsByTagNameNS("myColumn");
    var x = column.insertCell(-1);
    x.innerHTML = "Actions";

}

const ex11 = function(){
var NewButton = document.getElementsByTagName("Actions");
EX1111 = document.createElement("button");
EX1111.innerHTML = " click me"
document.body.appendChild(EX1111);

}

const ex13 = function(){
let NewField = document.createElementNS("DIV");
let FieldNode = document.createTextNode("name");
node.appendChild(FieldNode);
node.appendChild("#Surname")
node.appendChild("#age")
node.appendChild("#myColumn")


}

const ex14 = function(){


    
}