/* 
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to number
3. clear the input deposit value after getting the value
4. get the previous total 
5. calculate new deposit total and set the value
*/
// step - 1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step - 2
    // get deposit amount from input field
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountString = depositInput.value;
    const depositAmount = parseFloat(depositAmountString);
    
    // get deposit amount and total deposit amount
    const totalDepositAmount = document.getElementById('deposit-total');
    const totalAmountString = totalDepositAmount.innerText;
    const totalAmount = parseFloat(totalAmountString);
    
    // calculation total deposit amount
    const newTotalAmount = totalAmount + depositAmount;

    // get total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceString);

    // calculation total balance
    const newTotalBalance = previousTotalBalance + depositAmount;

    // set new total deposit amount and total balance
    totalDepositAmount.innerText = newTotalAmount;
    totalBalance.innerText = newTotalBalance;

    depositInput.value = '';
 
})