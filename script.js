const form = document.getElementById("submissionForm");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("status");
const imageInput = document.getElementById("image");

form.addEventListener("submit", function (event) {

```
if (!form.checkValidity()) {
    return;
}

const file = imageInput.files[0];

if (file) {

    const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/webp"
    ];

    if (!allowedTypes.includes(file.type)) {

        event.preventDefault();

        status.textContent =
            "Please upload PNG, JPG, JPEG or WEBP image.";

        status.style.color = "red";

        return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {

        event.preventDefault();

        status.textContent =
            "Image must be smaller than 10 MB.";

        status.style.color = "red";

        return;
    }
}

submitButton.disabled = true;
submitButton.textContent = "Sending...";

status.textContent =
    "Your submission is being sent...";

status.style.color = "#c99a2e";
```

});
