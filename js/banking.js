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



// //deposit & balance
// document.getElementById('deposit-btn').addEventListener('click', function () {
//     // get new deposited amount
//     const newDepositAmount = document.getElementById('deposit-input').value;

//     // check if input is empty or not 
//     if (newDepositAmount == '') alert('Don\'t leave empty, enter amount.');

//     else {
//         // set deposit total status
//         const depositTotal = document.getElementById('deposit-total');
//         const prevDepositAmount = depositTotal.innerText;
//         const newDepositTotal = parseFloat(prevDepositAmount) + parseFloat(newDepositAmount);
//         depositTotal.innerText = newDepositTotal;

//         //update balance
//         const balanceTotal = document.getElementById('balance-total');
//         const prevBalanceAmount = balanceTotal.innerText;
//         const newBalanceTotal = parseFloat(prevBalanceAmount) + parseFloat(newDepositAmount);
//         balanceTotal.innerText = newBalanceTotal;

//         // clear deposit input field
//         document.getElementById('deposit-input').value = '';
//     }
// })





// //withdraw & balance
// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     // get new withdraw amount
//     const newWithdrawAmount = document.getElementById('withdraw-input').value;

//     // check if input is empty or not 
//     if (newWithdrawAmount == '') alert('Don\'t leave empty, enter amount.');

//     else {
//         // set withdraw total status
//         const withdrawTotal = document.getElementById('withdraw-total');
//         const prevWithdrawAmount = withdrawTotal.innerText;
//         const newWithdrawTotal = parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount);
//         withdrawTotal.innerText = newWithdrawTotal;

//         //update balance
//         const balanceTotal = document.getElementById('balance-total');
//         const prevBalanceAmount = balanceTotal.innerText;
//         const newBalanceTotal = parseFloat(prevBalanceAmount) - parseFloat(newWithdrawAmount);
//         balanceTotal.innerText = newBalanceTotal;

//         // clear withdraw input field
//         document.getElementById('withdraw-input').value = '';
//     }
// })