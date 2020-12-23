/*  
  ### Sistema de gasto familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array: 
  * receitas: []
  * despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor so saldo

*/

const gastos = {
  receitas: [1000.0, 987.9, 1500],
  despesas: [125.0, 134.5, 86.9, 200000],
};

const totalGastos = () => {
  totalRes = gastos.receitas.reduce((total, next) => {
    return total + next;
  });

  totalDes = gastos.despesas.reduce((total, next) => {
    return total + next;
  });

  saldoTotal = totalRes - totalDes;

  if (saldoTotal >= 0) {
    return `O seu saldo está positivo com o valor total de: R$${saldoTotal.toFixed(2)}`;
  } else {
    return `O seu saldo está negativo com o valor total de $${saldoTotal.toFixed(2)}`;
  }
};

console.log(totalGastos());