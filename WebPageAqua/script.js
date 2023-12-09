document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const signUpButton = document.getElementById('signUpButton');
  const toggleText = document.getElementById('toggleText');
  let isSignUpMode = true;

  signUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Get user input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Check for empty fields and validate email format
    if (!name || !email || !isValidEmail(email)) {
      alert('Please enter a valid name and email.');
      return;
    }

    if (isSignUpMode) {
      // Check if name or email is already in use
      if (checkExistingUser(name, email)) {
        alert('Name or email already in use.');
      } else {
        // Save user data (signup logic)
        saveUserData(name, email);
        alert('Sign up successful!');
      }
    } else {
      // Check if user exists for login
      if (checkExistingUser(name, email)) {
        // Redirect the user to the main page
        window.location.href = 'index.html';
      } else {
        alert('User not found. Please check your credentials.');
      }
    }

    // Clear input fields after submission
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
    // Toggle between sign-up and login modes
    isSignUpMode = !isSignUpMode;

    // Update button label and toggle text
    signUpButton.textContent = isSignUpMode ? 'Sign Up' : 'Log In';
    toggleText.textContent = isSignUpMode ? "Already have an account? Log In." : "Don't have an account? Sign Up.";

    // Clear input fields when switching modes
    clearInputFields();
  });

  // Function to check if the user (name and email) already exists
  function checkExistingUser(name, email) {
    // For simplicity, you might use localStorage or other storage solutions
    // In a real-world scenario, you would use a server and a database for user authentication
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    return userData.some(user => user.name === name || user.email === email);
  }

  // Function to save user data
  function saveUserData(name, email) {
    // Save user data to localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push({ name, email });
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  // Function to clear input fields
  function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
