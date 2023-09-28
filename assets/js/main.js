document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("myModal");
  const modalHeader = document.getElementById("modal-header");
  const modalMessage = document.getElementById("modal-message");
  const closeBtn = document.querySelector(".close");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    // Replace this with your Formspree endpoint
    const formEndpoint = "https://formspree.io/f/moqopvkz";

    fetch(formEndpoint, {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          modalHeader.textContent = "Success!";
          modalMessage.textContent = "Your message has been sent successfully.";
        } else {
          modalHeader.textContent = "Error!";
          modalMessage.textContent =
            "There was an error sending your message. Please try again later.";
        }
        modal.style.display = "block";
      })
      .catch((error) => {
        modalHeader.textContent = "Error!";
        modalMessage.textContent =
          "There was an error sending your message. Please try again later.";
        modal.style.display = "block";
      });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
