document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function (event) {

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
  
      if (name === '' || email === '') {
        alert('Name and Email are required fields.');
        event.preventDefault(); // Prevent form submission if validation fails
        return;
      }
  
      // Process the form data (you can add your logic here)
  
      // For this example, let's just log the form data to the console
      console.log('Form submitted:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', document.getElementById('subject').value);
      console.log('Message:', document.getElementById('message').value);
  
      // Optionally, you can reset the form after submission
      contactForm.reset();
      
      event.preventDefault(); // Prevent form submission and page refresh
    });
  });
  