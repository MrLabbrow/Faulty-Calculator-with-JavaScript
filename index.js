let a = 5;
let b = 10;

let Random = Math.random();

// console.log(Random);

let Addition = a+b;
let Subtraction = a-b;
let Multiplication = a*b;
let Division = a/b;
let Exponentiation = a**b;

if (Random < 0.1){
    console.log("(+) Addition : " , Subtraction) ;
    console.log("(*) Multiplication : " , Addition);
    console.log("(-) Subtraction : " , Division) ;
    console.log("(/) Division : " , Exponentiation) ;
}

else{
    console.log("(+) Addition : " , Addition) ;
    console.log("(*) Multiplication : " , Multiplication);
    console.log("(-) Subtraction : " , Subtraction) ;
    console.log("(/) Division : " , Division) ; 
}