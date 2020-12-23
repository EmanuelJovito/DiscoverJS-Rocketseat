/* 
  ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32

*/

// MEU CODIGO

// let temp = "60 C";

// const cels = (temp) => {
//   let trans = ((Number(temp) - 32) * 5) / 9;
//   return String(trans);
// };

// const fah = (temp) => {
//   let trans = (Number(temp) * 9) / 5 + 32;
//   return String(trans);
// };

// const verTemp = (temp) => {
//   let tempArr = temp.split(" ");
//   if (tempArr.find((e) => e === "F")) return cels(tempArr[0]);
//   if (tempArr.find((e) => e === "C")) return fah(tempArr[0]);
// };
// console.log(verTemp(temp));

// RESOLUÇÃO DO PROFESSOR 

// transformDegree("50F")
function transformDegree(degree) {
  const celsiusExist = degree.toUpperCase().includes('C')
  const fahrenheitExist = degree.toUpperCase().includes('F')

  // FLUXO DE ERRO 
  if(!celsiusExist && !fahrenheitExist) {
    throw new Error('Grau não identificado')
  }

  //FLUXO IDEAL F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = "C"

  // FLUXO ALTERNATIVO C -> F
  if(celsiusExist) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degree = "F"
  }

  return formula(updateDegree) + degreeSign
}

try{
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50Z')
}catch(error) {
  console.log(error.message)
}