var myDog;
//myDog = window.prompt("whats your dogs name?");
//console.log("the dogs name is", myDog)
document.getElementById("mybtn").onclick = function(){
    myDog= document.getElementById("myInput").value;
    console.log("woof", myDog);
    myWeirdFunc()
}

var myWeirdFunc = function(){
        document.getElementById("myHeader").innerHTML = "Hello owner of "+myDog
    }

var myh2 = document.createElement("h2");
myh2.innerText = "my html from js script"
document.body.append(myh2)

// ********************* h3 *************************
document.querySelector("#myH3Button").onclick = function(){
    const h3 = document.querySelector("#myh3");
    const underline = document.createElement("u");
    underline.innerText = "I indeed changed";
    h3.innerText = ""
    h3.append(underline)
}

const myBox = document.querySelector("#myBox");


myBox.style.backgroundColor = "black"
myBox.style.height = "200px";
myBox.style.width = "200px";

myBox.addEventListener("click", e => {
    myBox.style.backgroundColor = "grey";
});
myBox.addEventListener("mousedown", e => {
    myBox.style.backgroundColor = "red";
});

myBox.addEventListener("dblclick",e=>{
    myBox.style.height = "400px"
})