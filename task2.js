var usernameInput = null;
var passwordInput = null;
var form = null;
if (typeof window !== 'undefined') {
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');
    form = document.getElementById('loginForm');
}
function handleSubmit(event) {
    event.preventDefault();
    if (!usernameInput || !passwordInput || !form) {
        alert('Form elements not found.');
        return;
    }
    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Username and password are required.');
        return;
    }
    if (usernameInput.value.length < 5 && passwordInput.value.length < 9) {
        alert('Username must be atleast 5 characters and Password must be at least 9 characters.');
        return;
    }
    if (usernameInput.value.length < 5) {
        alert('Username must be at least 5 characters.');
        return;
    }
    if (passwordInput.value.length < 9) {
        alert('Password must be at least 9 characters.');
        return;
    }
    alert('Form submitted successfully!');
}
if (form) {
    form.addEventListener('submit', handleSubmit);
}
