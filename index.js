const valueInput = document.getElementById('value-input');
const descriptionInput = document.getElementById('description-input');



class FinancialTransaction {
  description;
  value;

  constructor(description, value) {
    this.description = description;
    this.value = value;
  }
}
class FinancialTransactionManager {
  earningsList;
  expensesList;
  #totalEarnings = 0;
  #totalExpenses = 0;
  #finalBalance = 0;


  constructor(earningsArray = [], expensesArray = []) {
    this.earningsList = earningsArray;
    this.expensesList = expensesArray;

    this.createScreen();
  }
  createScreen() {
    this.gerarListas(this.earningsList, 'earnings-list');
    this.gerarListas(this.expensesList, 'expenses-list');
  }
  gerarListas(array, listElementId) {
    for (var i = 0; i < array.length; i++) {
      var li = document.createElement('li');
      li.innerText = `${array[i].description}: R$ ${array[i].value}`;

      document.getElementById(listElementId).appendChild(li);
    }
  }
}

const valor = new FinancialTransactionManager(
  [
    new FinancialTransaction('Salário', 4000),
    new FinancialTransaction('Freela', 400),
    new FinancialTransaction('Jogo do Bicho', 200),
    new FinancialTransaction('Delivery', 500),
  ],
  [
    new FinancialTransaction('Alimentação', 650),
    new FinancialTransaction('PSN', 40),
    new FinancialTransaction('Energia', 500),
    new FinancialTransaction('Plano de Saúde', 600),
  ]
);

var mesAtual = 'Janeiro';
var entradas = 8000;
var saidas = 400;
var saldo = 1000;

// var earningsList = [
//   new FinancialTransaction('Salário', 4000),
//   new FinancialTransaction('Freela', 400),
//   new FinancialTransaction('Jogo do Bicho', 200),
//   new FinancialTransaction('Delivery', 500),

// ];

// var expensesList = [
//   new FinancialTransaction('Alimentação', 650),
//   new FinancialTransaction('PSN', 40),
//   new FinancialTransaction('Energia', 500),
//   new FinancialTransaction('Plano de Saúde', 600),

// ];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = this.#totalEarnings;

// Saídas
document.getElementById('total-expenses').innerHTML = this.#totalExpenses;

// Saldo
document.getElementById('final-balance').innerHTML = this.#finalBalance;

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
}

function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('earnings-list').appendChild(li);
}

// for (var i = 0; i < earningsList.length; i++) {
//   var li = document.createElement('li');
//   li.innerText = `${earningsList[i].description}: R$ ${earningsList[i].value}`;

//   document.getElementById('earnings-list').appendChild(li);
// }

// for (var i = 0; i < expensesList.length; i++) {
//   var li = document.createElement('li');
//   li.innerText = `${expensesList[i].description}: R$ ${expensesList[i].value}`;

//   document.getElementById('expenses-list').appendChild(li);
//}

// function gerarListas(array, listElementId) {
//   for (var i = 0; i < array.length; i++) {
//        var li = document.createElement('li');
//        li.innerText = `${array[i].description}: R$ ${array[i].value}`;

//       document.getElementById(listElementId).appendChild(li);
// }
// }
// gerarListas(earningsList,'earnings-list');
// gerarListas(expensesList,'expenses-list');

// class ContaBancaria {
//   saldo;

//   constructor(saldo) {
//     this.saldo = saldo;
//   }
// }
