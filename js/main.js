
const quantity = prompt("Введіть розмір вашої зарплати");

const salary = 50000;
let bonus = 0.15 * salary;
console.log(bonus);
let totalIncome = salary + bonus;
console.log(totalIncome);
let tax = 0.10 * totalIncome;
console.log(tax);
let expenses = 190;
let remainingSalary = salary + bonus - tax - expenses;
console.log(remainingSalary);

alert("Залишок від вашої зарплати: " + remainingSalary);
