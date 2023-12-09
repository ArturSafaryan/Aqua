document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const signUpButton = document.getElementById('signUpButton');
  const toggleText = document.getElementById('toggleText');
  let isSignUpMode = true;

  signUpButton.addEventListener('click', (event) => {
    event.preventDefault();

   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

   
    if (!name || !email || !isValidEmail(email)) {
      alert('Please enter a valid name and email.');
      return;
    }

    if (isSignUpMode) {
      if (checkExistingUser(name, email)) {
        alert('Name or email already in use.');
      } else {
        saveUserData(name, email);
        alert('Sign up successful!');
      }
    } else {
      if (checkExistingUser(name, email)) {
      
        window.location.href = 'index.html';
      } else {
        alert('User not found. Please check your credentials.');
      }
    }

    clearInputFields();
  });

  toggleText.addEventListener('mouseover', () => {
    // Change the color of the text when the cursor is on it
    toggleText.style.color = 'blue';
  });

  toggleText.addEventListener('mouseout', () => {
    // Change the color back when the cursor is not on it
    toggleText.style.color = '';
  });

  toggleText.addEventListener('click', () => {
    isSignUpMode = !isSignUpMode;

    signUpButton.textContent = isSignUpMode ? 'Sign Up' : 'Log In';
    toggleText.textContent = isSignUpMode ? "Already have an account? Log In." : "Don't have an account? Sign Up.";

  
    clearInputFields();
  });

  function checkExistingUser(name, email) {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    return userData.some(user => user.name === name || user.email === email);
  }

  function saveUserData(name, email) {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push({ name, email });
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
