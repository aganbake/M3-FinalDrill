let totalExpended = 0;
let budget = 0;
let fill = 100;

const add = () => {
  budget = parseInt(document.getElementById("budget").value);
  let userExpenses = document.getElementById("userExpenses").innerHTML;
  let userRemanent = document.getElementById("userRemanent").innerHTML;
  let gastos = userExpenses.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  let saldos = userRemanent.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  if (typeof budget == "undefined" || isNaN(budget)) {
    budget = 0;
  }

  if (gastos === "" && saldos === "") {
    document.getElementById("userExpenses").innerHTML = "$0";
    document.getElementById("userRemanent").innerHTML = "$0";
  }

  if (saldos > 0) {
    document.getElementById("userRemanent").innerHTML = `$${budget - gastos}`;
  }

  document.getElementById("userBudget").innerHTML = `$${budget}`;

  if (budget > 0) {
    document.querySelector(".btn-danger").removeAttribute("hidden");
  }

  document.getElementById("budget").value = "";
  document.getElementById("circle").style.height = `${fill}%`;

  $(".collpase").collapse("toggle");
};

const expense = () => {
  let expense = document.getElementById("expense").value;
  let expenseAmount = parseInt(document.getElementById("expenseAmount").value);

  if (isNaN(expenseAmount)) {
    alert("Ningún gasto");
  } else {
    let table = document.getElementById("tbody");
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${expense}</td>
    <td>${expenseAmount}</td>
    <td><button class="btn" onclick="deleteItem(this)"><i class="bi bi-trash"></i></button></td>
    `;
    table.append(row);
    update(parseInt(expenseAmount));
  }
  document.getElementById("expense").value = "";
  document.getElementById("expenseAmount").value = "";

  let prc = (expenseAmount / budget) * 100;
  fill = fill - prc;
  document.getElementById("circle").style.height = `${fill}%`;
};

const update = (amount) => {
  let userBudget = budget;

  totalExpended += amount;
  let newBudget = userBudget - totalExpended;

  document.getElementById("userExpenses").innerHTML = `$${totalExpended}`;
  document.getElementById("userRemanent").innerHTML = `$${newBudget}`;
};

const revert = (amount) => {
  let userRemanent = document.getElementById("userRemanent").innerHTML;
  userBudget = userRemanent.replace(
    /[`~!@#$%^&*()_|+?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );

  totalExpended = totalExpended - amount;
  let newBudget = parseInt(userBudget) + amount;
  document.getElementById("userExpenses").innerHTML = `$${totalExpended}`;
  document.getElementById("userRemanent").innerHTML = `$${newBudget}`;

  let prc = (newBudget / budget) * 100;
  fill = prc;
  document.getElementById("circle").style.height = `${fill}%`;
};

const deleteItem = (row) => {
  let thisAmount = row.parentNode.parentNode.childNodes[3].innerText;
  revert(parseInt(thisAmount));

  let thisRow = row.parentNode.parentNode.rowIndex;
  document.getElementById("tbody").deleteRow(thisRow);
};
