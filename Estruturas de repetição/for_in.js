// for...in 
 let person = {
   name: "Emanuel",
   age: 18,
   weight: 50.0
 }

 for(let property in person){
   console.log(property)
   console.log(person[property])
 }