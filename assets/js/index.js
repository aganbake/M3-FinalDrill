const defaultBudget = 0;
let expenses = [];
let expensesAmounts = [];

const add = () => {
  let budget = document.getElementById("budget").value;

  if (budget === null) {
    budget = defaultBudget;
  }

  document.getElementById("userBudget").innerHTML = `$${budget}`;
};

const expense = () => {
  let expense = document.getElementById("expense").value;
  let expenseAmount = parseInt(document.getElementById("expenseAmount").value);

  expenses.push(expense);
  expensesAmounts.push(expenseAmount);

  let table = document.getElementById("tbody");
  let newRow = document.createElement("tr");
  table.appendChild(newRow);
  let newExpense = document.createElement("td");
  let newAmount = document.createElement("td");
  newRow.appendChild(newExpense);
  newRow.appendChild(newAmount);
  newExpense.innerHTML = expense;
  newAmount.innerHTML = expenseAmount;
};

const update = () => {};
