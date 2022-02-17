
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    // inputField.value='';
    return inputValue;
}
function Expensescalculate(){
    const foodAmonut = getInputValue("food-input")
    const rentAmount = getInputValue('rent-input')
    const clothesAmount = getInputValue('clothes-input')
    

    if(foodAmonut<0 || rentAmount<0 || clothesAmount<0 ){
        alert('Please Enter a Positive Number')
    }
else{
    const expensesAmount = foodAmonut+rentAmount+clothesAmount;
    return expensesAmount;
}
}
function totalBalance(){
   
    const incomeAmonut = getInputValue("income-input")
    const totalCalculate= Expensescalculate();

    if(incomeAmonut<0){
        alert('Please Enter a Positive Number')
    }
    else{
        const BalanceAmount = incomeAmonut-totalCalculate;
        return BalanceAmount;
    }
}
document.getElementById('calculate-btn').addEventListener('click',function(){

   const totalExpenses = document.getElementById('total-expenses');
   const totalCalculate= Expensescalculate();
   totalExpenses.innerText =totalCalculate;
   const BalanceTotal=document.getElementById('Balance')
   const balance=totalBalance();
   BalanceTotal.innerText=balance;
})

document.getElementById('save-btn').addEventListener('click',function(){
    const saveingAmount =document.getElementById("saving-amount")
    const remainingAmount =document.getElementById("remaining-balance")
    const incomeAmonut = getInputValue("income-input")
    const saveInput = getInputValue("save-input")
    if(saveInput<0){
        alert('Please Enter a Positive Number')
    }
    else{
        const savingAmountTotal =(incomeAmonut*saveInput)/100;
        saveingAmount.innerText =savingAmountTotal;
        const previousBalanceTotal = totalBalance()
        const remainingBalance =previousBalanceTotal-savingAmountTotal;
        remainingAmount.innerText=remainingBalance;
    }

    const incomeField = document.getElementById('income-input')
         incomeField.value='';
    const foodField = document.getElementById('food-input')
         foodField.value='';
    const rentField = document.getElementById('rent-input')
         rentField.value='';
    const clothesField = document.getElementById('clothes-input')
         clothesField.value='';
    const saveField = document.getElementById('save-input')
         saveField.value='';



})