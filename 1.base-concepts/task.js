"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - (4*a*c);
  if(d < 0) return arr;

  if(d === 0) {
    arr[0] = -b/(2*a);
  }

  if(d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] =(-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;

  if (S <= 0) {
      return 0;
  }

  let monthlyPayment = S * (P + (P / ((Math.pow(1 + P, countMonths) - 1))));
  let totalAmount = monthlyPayment * countMonths;

  return parseFloat(totalAmount.toFixed(2));
}