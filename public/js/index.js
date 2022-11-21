const selectednumber = document.getElementById("customRange2");
const number = document.getElementById("number");
selectednumber.onclick = function () {
  number.innerHTML = selectednumber.value + " weeks";
  let calculation = Math.round((50 / customRange2.value) * 100) / 100;
  let hours = document.getElementById("weekhours");
  console.log(hours.value);
  hours.innerHTML = calculation + " hours per week";
};

const selectednumber1 = document.getElementById("customRange1");
const number1 = document.getElementById("number1");
selectednumber1.onclick = function () {
  number1.innerHTML = selectednumber1.value + " weeks";
  let calculation1 = Math.round((30 / customRange1.value) * 100) / 100;
  let hours1 = document.getElementById("weekhours1");
  console.log(hours1.value);
  hours1.innerHTML = calculation1 + " hours per week";
};