/*
 Transformar notas escolares 

crie um algoritmo que transforme as notas do sistema numéricos para sistema de notas em caracteres tipo A B C 

* DE 90 PARA CIMA - A
* ENTRE 80 - 89   - B
* ENTRE 70 - 79   - C
* ENTRE 60 - 69   - D
* MENOR QUE 60    - F

*/

getScore = (notas) => {
  if(notas >= 90 && notas <= 100){
    console.log("A")
  }else if(notas >= 80 && notas <= 89){
    console.log("B")
  }else if(notas >= 70 && notas <= 79){
    console.log("C")
  }else if(notas >= 60 && notas <= 69){
    console.log("D")
  }else if(notas <= 59 && notas >= 0){
    console.log("F")
  }else{
    console.warn("Nota invalida!")
  }
  return notas
}

getScore(100)