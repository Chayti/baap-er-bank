function getInputValue(id) {
    const input = document.getElementById(id);
    const amountText = input.value;
    const amount = parseFloat(amountText);
    input.value = ''; //reset input field
    return amount;
}

function updateTotalField(id, amount) {
    // debugger;
    const Total = document.getElementById(id);
    const TotalText = Total.innerText;
    const previousTotal = parseFloat(TotalText);
    Total.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd) balanceTotal.innerText = previousBalanceTotal + amount;
    else balanceTotal.innerText = previousBalanceTotal - amount;
}

// deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) { //error handling
        updateTotalField('deposit-total', depositAmount); // get current deposit
        updateBalance(depositAmount, true); // update balance
    }
})


// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) { //error handling
        updateTotalField('withdraw-total', withdrawAmount); // get current withdraw
        updateBalance(withdrawAmount, false); // update balance
    }
    if (withdrawAmount > currentBalance) {
        alert('You can\'t withdraw more than balance');
    }
})


