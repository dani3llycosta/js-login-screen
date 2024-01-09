function showHidePassword() {
    var passwordInput = document.getElementsByName("password")[0];
    var showPasswordIcon = document.getElementById("showPassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.innerHTML = "hide";
    } else {
        passwordInput.type = "password";
        showPasswordIcon.innerHTML = "show";
    }
}

function validateLogin() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    var user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function signUp() {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var email = document.getElementsByName("email")[0].value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address. Please enter a valid one.');
        return;
    }

    var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = storedUsers.find(u => u.username === username);

    if (existingUser) {
        alert('Username already exists. Please choose a different one.');
    } else {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Account created successfully. You can now log in.');
        window.location.href = 'index.html';
    }
}
