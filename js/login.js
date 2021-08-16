
document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'manus@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Invalid login credentials.')
    }
})

