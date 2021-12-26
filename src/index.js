//  Senario #1
function fn(){
    return "Hello!";
}

let calling  = fn;
calling(); // this will output  "Hello!"
console.log(calling);  // this is calling the whole functions
console.log(calling());  // this is calling the return functions

//

function fn1(){
    return function(){
        return "Hello";
    }
}
let calling2;
calling2 = fn1();

console.log(calling2); // this should return the function
console.log(calling2()); // this should return the string



