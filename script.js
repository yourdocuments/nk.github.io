```javascript
const form = document.querySelector("form");
const submitButton = form.querySelector("button");

form.addEventListener("submit", function () {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    submitButton.style.opacity = "0.7";
    submitButton.style.cursor = "not-allowed";
});
```
