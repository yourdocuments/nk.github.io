const USERNAME = "usha";
const PASSWORD = "iloveyouneil";

/* LOGIN */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

```
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const status = document.getElementById("loginStatus");

    if (username === USERNAME && password === PASSWORD) {

        localStorage.setItem("ushaLoggedIn", "true");

        status.textContent = "Login successful.";
        status.style.color = "#c99a2e";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 500);

    } else {

        status.textContent = "Incorrect username or password.";
        status.style.color = "#d33";

    }

});
```

}

/* PROTECT MAIN PAGE */

if (document.body.classList.contains("main-page")) {

```
if (localStorage.getItem("ushaLoggedIn") !== "true") {

    window.location.href = "login.html";

}
```

}

/* LOGOUT */

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {

```
logoutButton.addEventListener("click", function () {

    localStorage.removeItem("ushaLoggedIn");

    window.location.href = "login.html";

});
```

}

/* SUBMISSION FORM */

const submissionForm = document.getElementById("submissionForm");

if (submissionForm) {

```
submissionForm.addEventListener("submit", function (event) {

    const imageInput = document.getElementById("image");
    const status = document.getElementById("status");
    const submitButton = document.getElementById("submitButton");


    /* IMAGE CHECK */

    if (imageInput && imageInput.files.length > 0) {

        const file = imageInput.files[0];

        const allowedTypes = [
            "image/png",
            "image/jpeg",
            "image/webp"
        ];


        if (!allowedTypes.includes(file.type)) {

            event.preventDefault();

            status.textContent =
                "Please upload PNG, JPG, JPEG or WEBP.";

            status.style.color = "#d33";

            return;

        }


        /* 10 MB LIMIT */

        if (file.size > 10 * 1024 * 1024) {

            event.preventDefault();

            status.textContent =
                "Image must be smaller than 10 MB.";

            status.style.color = "#d33";

            return;

        }

    }


    /* SENDING */

    if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";

    }


    if (status) {

        status.textContent =
            "Your submission is being sent...";

        status.style.color = "#c99a2e";

    }

});
```

}
