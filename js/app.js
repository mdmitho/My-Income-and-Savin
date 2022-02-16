const incomeInput = document.getElementById('income-input')

const rentInput = document.getElementById('income-input')
const clothesInput = document.getElementById('income-input')
const saveInput = document.getElementById('income-input')


function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    inputField.value='';
    return inputValue;
}

document.getElementById('calculate-btn').addEventListener('click',function(){


   const BalanceTotal=document.getElementById('Balance')
   const totalExpenses = document.getElementById('total-expenses');
   const incomeAmonut = getInputValue("income-input")
   const foodAmonut = getInputValue("food-input")
   const rentAmount = getInputValue('rent-input')
   const clothesAmount = getInputValue('clothes-input')

   const expensesAmount = foodAmonut+rentAmount+clothesAmount;
   const totalAmount = incomeAmonut-expensesAmount;
   if(expensesAmount>0 && totalAmount>0){
    totalExpenses.innerText = expensesAmount;
    BalanceTotal.innerText = totalAmount;
   }
   else{
     alert('Please Enter a Positive Number')
   }



   
   

})