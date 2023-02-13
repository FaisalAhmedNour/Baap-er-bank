document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passField = document.getElementById('password');
    const password = passField.value;

    if (email === "sontan@baap.com" && password === "secret") {
        window.location.href = 'bank.html';
    }
    else {
        alert('Toi password voila gesos!!!');
    }
});