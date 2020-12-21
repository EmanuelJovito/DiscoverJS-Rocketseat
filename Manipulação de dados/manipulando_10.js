// Manipulando Arrays 

let techs = ["html", "css", "js"]

// adicionar um novo item no fim
techs.push("nodejs")
// adicionar mo começo 
techs.unshift("sql")
// remover o fim 
techs.pop()
// remover o começo
techs.shift() 
// pegar somente alguns elementos de array

// console.log(techs.slice(1,3)) 

// remover 1 ou mais itens em qualquer posição do array

//techs.splice(1,1)

// encontrar a posição de um elemento no array 
let index = techs.indexOf("css")
techs.splice(index,1)

console.log(techs)