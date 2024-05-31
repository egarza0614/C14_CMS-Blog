const loginFormHandler = async (event) => {
  event.preventDefault();

  // Get username and password from the form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }), // Send username instead of email
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      if (data.message) {
        alert(data.message);
      }
      document.location.replace('/');
    } else {
      const errorData = await response.json();
      alert(errorData.message || 'Failed to log in');
    }
  } else {
    alert('Please enter both username and password');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
