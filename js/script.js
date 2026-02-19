// Example: Alert when user submits contact form
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting us!");
});
