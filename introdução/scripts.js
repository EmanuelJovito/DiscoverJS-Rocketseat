let usuario = {
  nome: "Emanuel",
  age: 18,
  stars: 5.0,
  isSubscribed: true,
  weight: 50.0
};

// console.log(`${usuario.nome} de idade ${usuario.age} pesa ${usuario.weight}kg.`)

let student = [];

student= [usuario];

let usuario2 = {
  nome: "Mayk",
  age: 23,
  weight: 74.8,
  isSubscribed: false,
}

student = [usuario, usuario2]
console.log(student)