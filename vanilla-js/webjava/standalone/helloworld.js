function fibfib(fibnumber){
    if (fibnumber == 1){
        return 1;
    }
    else if (fibnumber <1){
        return 0
    }
    return fibfib(fibnumber-1)+fibfib(fibnumber-2);
}

var myObject = {
    propertyOne: 16,
    propertyTwo: "university of noldus",

    doSomething: function(){
        console.log("im doing something");
    }
}

function checkAge(age){
    age >17 ? console.log("go ahead") : console.log("not old enough");
}

var mySwitchValue = "B";
switch (mySwitchValue){
    case "A":
        console.log("A it is");
        break;
    case "B":
        console.log("B it is");
        break;
    default:
        console.log("non of the above.");
        break;
}

console.log(2=="2");
console.log(2==="2")

var myCars = ["bmw","tesla","mercedes"];
for (let i in myCars){
    console.log(myCars[i]);
}

myCars.forEach(element => {
    console.log(element);
});
//Math
console.log(Math.PI);
//random 0-6
console.log(Math.round(Math.random()*6));

var myletters =["N","U","T","S"]
function concatinater(buildtUpString, nextLetter){
    return buildtUpString + nextLetter;
}
console.log(myletters.reduce(concatinater));
console.log(myletters.reduceRight(concatinater));

class Clerk{
    constructor(name){
        this.name = name;
    }
    fileCopies() {
        console.log("im filing copies sir!");
    }
    get getName(){
        return this.name
    }
}

var myClerk = new Clerk("johan");
console.log(myClerk.getName);
console.log(myClerk.name);