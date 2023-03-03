
class GroupExpenses {
  title;
  partiaValue;
  amount;
  #numberOfParticipants;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.#numberOfParticipants = numberOfParticipants;
    this.amount = amount;
    this.partiaValue = (amount / numberOfParticipants).toFixed(2);
  }
}

const table = document.getElementById('group-expenses');

const groupExpenses = [];

const titleElement = document.getElementById('title-input');
const partcipantsElement = document.getElementById('participants-input');
const amountElemente = document.getElementById('amount-input');

function closeModal(){
  closeModal.style.display = "none";
}

function updatePage() {
  const expense = groupExpenses[groupExpenses.length - 1];

  table.insertAdjacentHTML(
    'beforeend',
    `
             <div class="row">
                <div>${expense.title}</div>
                <div>${expense.partiaValue}</div>
                <div>${expense.amount}</div>
            </div>
        `
  );
}

function addGroupExpense() {
  groupExpenses.push(
    new GroupExpenses(
      titleElement.value,
      partcipantsElement.value,
      amountElemente.value
    )
  );

  updatePage();

  titleElement.value = '';
  partcipantsElement.value = '';
  amountElemente.value = '';

  alert('Despesa Adicionada');
  closeModal();

 }
  

  

