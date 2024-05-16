const button = document.getElementById("button");
const label = document.getElementById("label");
const email = document.getElementById("email");
const secondLabel = document.getElementById("second-label");

button.addEventListener("click", function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the email input value
  var emailValue = email.value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is valid
  if (!emailRegex.test(emailValue)) {
    label.textContent = "Please provide a valid email address";
    secondLabel.textContent = "Please provide a valid email address";
    email.style.borderColor = "hsl(354, 100%, 66%)";
    return;
  } else {
    label.textContent = "Thank you! Your email address has been added";
    label.style.color = "blue";
    secondLabel.textContent = "Thank you! Your email address has been added";
    secondLabel.style.color = "blue";
    // Reset the email input value
    email.value = "";
    return;
  }
});
