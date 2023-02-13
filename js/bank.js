document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.getElementById('input-deposit-amount');
    let inputDepositAmount = inputDeposit.value;
    if (inputDepositAmount === '') {
        alert("Enter amount!!!");
        return;
    }
    inputDepositAmount = parseFloat(inputDepositAmount);

    let deposit = document.getElementById('deposit-amount');
    const depositAmount = parseFloat(deposit.innerText);
    const totalDeposit = depositAmount + inputDepositAmount;
    deposit.innerText = totalDeposit;

    let balance = document.getElementById('balance-amount');
    const balanceAmount = parseFloat(balance.innerText);
    const totalBalance = balanceAmount + inputDepositAmount;
    balance.innerText = totalBalance;

    inputDeposit.value = '';
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw-amount');
    let inputWithdrawAmount = inputWithdraw.value;
    if (inputWithdrawAmount === '') {
        alert("Enter amount!!!");
        return;
    }
    inputWithdrawAmount = parseFloat(inputWithdrawAmount);

    inputWithdraw.value = '';

    let balance = document.getElementById('balance-amount');
    const balanceAmount = parseFloat(balance.innerText);
    if (balanceAmount < inputWithdrawAmount) {
        alert('Baap er Bank e ato taka nai!!!');
        return;
    }
    const totalBalance = balanceAmount - inputWithdrawAmount;
    balance.innerText = totalBalance;

    let withdraw = document.getElementById('withdraw-amount');
    const withdrawAmount = parseFloat(withdraw.innerText);
    const totalWithdraw = withdrawAmount + inputWithdrawAmount;
    withdraw.innerText = totalWithdraw;
});    
