const form = document.querySelector("form");
const submitButton = form.querySelector("button");

form.addEventListener("submit", function () {
submitButton.disabled = true;
submitButton.textContent = "Sending...";
});
