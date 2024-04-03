let usernameInput: HTMLInputElement | null = null;
let passwordInput: HTMLInputElement | null = null;
let form: HTMLFormElement | null = null;


if (typeof window !== 'undefined') {
  usernameInput = document.getElementById('username')! as HTMLInputElement;
  passwordInput = document.getElementById('password')! as HTMLInputElement;
  form = document.getElementById('loginForm')! as HTMLFormElement;
}

function handleSubmit(event: Event) {
  event.preventDefault();

  if (!usernameInput || !passwordInput || !form) {
    alert('Form elements not found.');
    return;
  }

  
  

  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === ''){
   
  
    alert('Username and password are required.');
    return;
  }

  if (usernameInput.value.length < 5 && passwordInput.value.length < 9 ){
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
