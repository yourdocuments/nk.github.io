const USERNAME = "usha";
const PASSWORD = "iloveyouneil";

/* =========================================
LOGIN
========================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

```
if (localStorage.getItem("ushaLoggedIn") === "true") {
    window.location.replace("index.html");
}

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const status =
        document.getElementById("loginStatus");

    const loginButton =
        document.getElementById("loginButton");


    if (
        username === USERNAME &&
        password === PASSWORD
    ) {

        localStorage.setItem(
            "ushaLoggedIn",
            "true"
        );

        status.textContent =
            "Login successful.";

        status.style.color =
            "#c99a2e";

        loginButton.disabled = true;

        loginButton.textContent =
            "Opening...";


        setTimeout(function () {

            window.location.replace("index.html");

        }, 500);


    } else {

        status.textContent =
            "Incorrect username or password.";

        status.style.color =
            "#d33";

    }

});
```

}

/* =========================================
WEBSITE LOGIN PROTECTION
========================================= */

const mainPage =
document.body.classList.contains("main-page");

if (mainPage) {

```
const loggedIn =
    localStorage.getItem("ushaLoggedIn");


if (loggedIn !== "true") {

    window.location.replace("login.html");

}
```

}

/* =========================================
LOGOUT
========================================= */

const logoutButton =
document.getElementById("logoutButton");

if (logoutButton) {

```
logoutButton.addEventListener("click", function () {

    localStorage.removeItem("ushaLoggedIn");

    window.location.replace("login.html");

});
```

}

/* =========================================
SUBMISSION FORM
========================================= */

const submissionForm =
document.getElementById("submissionForm");

if (submissionForm) {

```
const submitButton =
    document.getElementById("submitButton");

const status =
    document.getElementById("status");

const imageInput =
    document.getElementById("image");


submissionForm.addEventListener(
    "submit",
    function (event) {


        /* FORM VALIDATION */

        if (!submissionForm.checkValidity()) {
            return;
        }


        /* IMAGE VALIDATION */

        if (
            imageInput &&
            imageInput.files.length > 0
        ) {

            const file =
                imageInput.files[0];


            const allowedTypes = [
                "image/png",
                "image/jpeg",
                "image/webp"
            ];


            if (
                !allowedTypes.includes(file.type)
            ) {

                event.preventDefault();

                status.textContent =
                    "Please upload PNG, JPG, JPEG or WEBP.";

                status.style.color =
                    "#d33";

                return;

            }


            /* MAXIMUM 10 MB */

            const maxSize =
                10 * 1024 * 1024;


            if (file.size > maxSize) {

                event.preventDefault();

                status.textContent =
                    "Image must be smaller than 10 MB.";

                status.style.color =
                    "#d33";

                return;

            }

        }


        submitButton.disabled = true;

        submitButton.textContent =
            "Sending...";


        status.textContent =
            "Your submission is being sent...";


        status.style.color =
            "#c99a2e";

    }
);
```

}
