const form = document.getElementById("submissionForm");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("status");

form.addEventListener("submit", function () {

```
if (!form.checkValidity()) {
    return;
}

submitButton.disabled = true;
submitButton.textContent = "Sending...";
status.textContent = "";

setTimeout(function () {
    status.textContent = "Your submission is being sent...";
}, 300);
```

});
