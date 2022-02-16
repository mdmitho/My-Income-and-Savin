
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    inputField.value='';
    return inputValue;
}
document.getElementById('calculate-btn').addEventListener('click',function(){


   let BalanceTotal=document.getElementById('Balance')
   const totalExpenses = document.getElementById('total-expenses');
   const incomeAmonut = getInputValue("income-input")
   const foodAmonut = getInputValue("food-input")
   const rentAmount = getInputValue('rent-input')
   const clothesAmount = getInputValue('clothes-input')

   const expensesAmount = foodAmonut+rentAmount+clothesAmount;
   const totalBalance = incomeAmonut-expensesAmount;

   if(expensesAmount>totalBalance){
   alert('You have Expenses too much money')
   }
   else{
    if(foodAmonut>0 && rentAmount>0 && clothesAmount>0 ){
        totalExpenses.innerText = expensesAmount;
        if(totalBalance>0){
            BalanceTotal.innerText = totalBalance;
        }
        else{
            alert('Please Enter a Positive Number')
          }
       
       }
       else{
         alert('Please Enter a Positive Number')
       }
   }


})

function expensesTotal(){
    const incomeAmonut = getInputValue("income-input")
    const foodAmonut = getInputValue("food-input")
   const rentAmount = getInputValue('rent-input')
   const clothesAmount = getInputValue('clothes-input')
   const expensesTotalAmount = foodAmonut+rentAmount+clothesAmount;
   const totalAmount = incomeAmonut-expensesTotalAmount;
   return totalAmount;
}

document.getElementById('save-btn').addEventListener('click',function(){
    const incomeAmonut = getInputValue("income-input")
    const saveingAmount =document.getElementById("saving-amount")
    const remainingAmount =document.getElementById("remaining-balance")
    const saveInput = getInputValue("save-input")
 const savingAmountTotal =(incomeAmonut*saveInput)/100;
    const  totalBalance = expensesTotal()
 const previousBalance = totalBalance-savingAmountTotal;
 console.log(previousBalance)
   saveingAmount.innerText =savingAmountTotal;
  
   const remainingBalance =totalBalance-savingAmountTotal;
//    remainingAmount.innerText =previousBalance;
})