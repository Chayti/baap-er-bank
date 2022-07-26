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
        const balanceTotal = document.getElementById('balance-total');

        if (newWithdrawTotal <= parseFloat(balanceTotal.innerText)) { //error handling

            withdrawTotal.innerText = newWithdrawTotal;

            //update balance
            const prevBalanceAmount = balanceTotal.innerText;
            const newBalanceTotal = parseFloat(prevBalanceAmount) - parseFloat(newWithdrawAmount);
            balanceTotal.innerText = newBalanceTotal;
        }
        else {
            alert('You can\'t withdraw more than balance');
        }

        // clear withdraw input field
        document.getElementById('withdraw-input').value = '';
    }
})