//deposit & balance
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get new deposited amount
    const newDepositAmount = document.getElementById('deposit-input').value;

    // check if input is empty or not 
    if (newDepositAmount == '') alert('Don\'t leave empty, enter amount.');

    else {
        // set deposit total status
        const depositTotal = document.getElementById('deposit-total');
        const prevDepositAmount = depositTotal.innerText;
        const newDepositTotal = parseFloat(prevDepositAmount) + parseFloat(newDepositAmount);
        depositTotal.innerText = newDepositTotal;

        //update balance
        const balanceTotal = document.getElementById('balance-total');
        const prevBalanceAmount = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(prevBalanceAmount) + parseFloat(newDepositAmount);
        balanceTotal.innerText = newBalanceTotal;

        // clear deposit input field
        document.getElementById('deposit-input').value = '';
    }
})





//withdraw & balance
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get new withdraw amount
    const newWithdrawAmount = document.getElementById('withdraw-input').value;

    // check if input is empty or not 
    if (newWithdrawAmount == '') alert('Don\'t leave empty, enter amount.');

    else {
        // set withdraw total status
        const withdrawTotal = document.getElementById('withdraw-total');
        const prevWithdrawAmount = withdrawTotal.innerText;
        const newWithdrawTotal = parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount);
        withdrawTotal.innerText = newWithdrawTotal;

        //update balance
        const balanceTotal = document.getElementById('balance-total');
        const prevBalanceAmount = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(prevBalanceAmount) - parseFloat(newWithdrawAmount);
        balanceTotal.innerText = newBalanceTotal;

        // clear withdraw input field
        document.getElementById('withdraw-input').value = '';
    }
})