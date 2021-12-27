
// Updating Objects 

// this is how you can update an object with let
let person ={name:"Ahsan"};

person.name = "Ahsan Aman";

// what if we want to update if the object is const

const anotherPerson ={name:"Ali"};

const updated =Object.assign({},anotherPerson,{age:20,location:"Rwp"});

console.log(anotherPerson);     
console.log(updated);

// the Better way is by using the spread operator (Perform Deep copy)

const person2 ={name:"Ahad",
    address:{
        city:"Rwp"
    },
    };

const updatedAgain ={
    ...person2,
    
    address:{
        ...person2.address,  // this is how we can perform  "Deep Copy"
        city:"Gilgit",
    },

} 
console.log(updateperdAgain);
 
