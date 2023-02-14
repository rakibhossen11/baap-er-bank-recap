//  event handler with withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get withdraw amount from input field
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    // get total withdraw amount from total withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalString);
    // calculation total withdraw amount 
    const totalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    // get total balance 
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalanc = parseFloat(previousTotalBalanceString);
    // calculation balance after withdraw
    const newTotalBalance = previousTotalBalanc - newWithdrawAmount;
    // set total balance after withdraw
    withdrawTotal.innerText = totalWithdraw;
    totalBalance.innerText = newTotalBalance;

    withdrawAmount.value = '';
})