document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDeposit = getNewValue('input-deposit-amount');
    const oldDeposit = getOldValue('deposit-amount');
    const oldBalance = getOldValue('balance-amount');
    changeValue('deposit-amount', newDeposit + oldDeposit);
    changeValue('balance-amount', oldBalance + newDeposit);
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = getNewValue('input-withdraw-amount');
    const oldBalance = getOldValue('balance-amount');
    if (newWithdraw > oldBalance) {
        alert('Tor baap er ato taka nai!!!');
        return;
    }
    const oldWithdraw = getOldValue('withdraw-amount');
    changeValue('withdraw-amount', newWithdraw + oldWithdraw);
    changeValue('balance-amount', oldBalance - newWithdraw);
});