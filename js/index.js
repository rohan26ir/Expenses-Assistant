// function InputGetValue(id){
//   const inputvalue = document.getElementById(id).value;

//   return Number(inputvalue);
// }

// function inputSetValue(id){
//   const divValue = document.getElementById(id).innerText;
//   return divValue;
// }

document.getElementById('calculate').addEventListener('click', function(){

  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    console.log(balance);


    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);
    
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    // Result Section hidden

    const results = document.getElementById('results');
    results.classList.remove('hidden');

  


})


  // calculate-savings to calculate

  document.getElementById('calculate-savings').addEventListener('click', function(){


    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const savings = parseFloat(document.getElementById('savings').value);
    
      const totalExpenses = software + courses + internet;
      const balance = income - totalExpenses;
    
      const savingsAmo = balance * savings/100;
      const remaining = balance - savingsAmo;

    const savingsAamount = document.getElementById('savings-amount');
    savingsAamount.innerText = savingsAmo.toFixed(2);

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remaining.toFixed(2);
  })