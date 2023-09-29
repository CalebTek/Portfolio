document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    // Replace this with your Formspree endpoint
    const formEndpoint = "https://formspree.io/f/moqopvkz";

    fetch(formEndpoint, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // Form submission was successful
          displaySuccessMessage();
        } else {
          // Form submission encountered an error
          displayErrorMessage();
        }
      })
      .catch((error) => {
        // Network error or other issues
        displayErrorMessage();
      });
  });

  function displaySuccessMessage() {
    // Hide the error message
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "none";

    // Display a success message where you prefer in your HTML
    const successMessage = document.querySelector(".sent-message");
    successMessage.style.display = "block";
  }

  function displayErrorMessage() {
    // Hide the success message
    const successMessage = document.querySelector(".sent-message");
    successMessage.style.display = "none";

    // Display an error message where you prefer in your HTML
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
  }
});
