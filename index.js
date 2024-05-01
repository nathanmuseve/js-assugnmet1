
// Change body bgcolor 
const btn = document.getElementById("myBtn");
btn.addEventListener("click", myFunction());
function myFunction() {
  return document.document.getElementById("body").innerHtml =  style.background = "blue";
}
console.log(document.body.style.background = "blue");

// add elements 
const element = document.createElement("h3");
const nodeText = document.createTextNode("Apple");
element.appendChild(nodeText);
const parent = document.getElementById("myLists");
parent.appendChild(element);
const addList= document.getElementById("myBtn1").addEventListener("click", add => parent());
console.log(addList);



