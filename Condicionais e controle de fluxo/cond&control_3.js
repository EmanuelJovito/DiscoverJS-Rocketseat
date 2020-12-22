// throw = lançar 

function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é obrigatório"
  }

  console.log(name)
}

// try = tentar ...catch = pegar

try {
  sayMyName("emanuel")
}catch(e) {
  console.log(e)
}

console.log("após ao try/catch")
