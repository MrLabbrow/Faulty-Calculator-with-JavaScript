let random = Math.random();

// prompt(random)
console.log(`The Rendom Number is = ${random}`);

let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

// console.log(`The result is ${a} ${c} ${b} = ${eval(`${a} ${c} ${b}`)}`)

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)


}
else{

    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}