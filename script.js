"use-strict";

const button = document.querySelector("button");
const resultDiv = document.getElementById("results")

button.addEventListener("click", function (e) {
  e.preventDefault();
  resetColors();
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  if (height == "" || height <= 0 || isNaN(height)) {
    alert(`Please enter valid height ${height}!`);
  } else if (weight == "" || weight <= 0 || isNaN(weight)) {
    alert(`Please enter valid weight ${weight}!`);
  } else {
    const result = (weight / ((height / 100) ** 2)).toFixed(2);
    resultDiv.innerHTML = result;

    if (result < 18.6) {
      document.getElementById("underWeight").style.backgroundColor = "orange";
    } else if (result >= 18.6 && result < 24.9) {
      document.getElementById("normalWeight").style.backgroundColor = "orange";
    } else {
      document.getElementById("overWeight").style.backgroundColor = "orange";
    }
  }
})

const resetColors = function () {
  document.getElementById("overWeight").style.backgroundColor = "";
  document.getElementById("normalWeight").style.backgroundColor = "";
  document.getElementById("underWeight").style.backgroundColor = "";
}