/* 
  function() constructor 
  
  * expressa new
  * criar um novo objeto
  * this keyword 

*/ 

function Person(name) {
  this.name = name 
  this.walk = () => {
    return this.name + " está andando"
  }
  this.idade = this.name + " tem " + 18 
}

const emanuel = new Person("Emanuel")

console.log(emanuel.walk())
console.log(emanuel.idade)

// tipos de função construtoras
// data
let  date = new Date("2020-12-01")

console.log(date)

// string

let nome = new String("Emanuel")

console.log(nome)

