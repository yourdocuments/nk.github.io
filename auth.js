/* =========================================================
   USHA.AI — DEMO LOGIN SYSTEM
   Development Version

   Password:
   iloveyouneil

   NOTE:
   This is NOT production security.
   Replace with real authentication later.
   ========================================================= */


const DEMO_PASSWORD = "iloveyouneil";

const LOGIN_KEY = "usha_ai_logged_in";
const EMAIL_KEY = "usha_ai_user_email";


/* =========================================================
   CHECK LOGIN
   ========================================================= */

function isLoggedIn() {
    return localStorage.getItem(LOGIN_KEY) === "true";
}


/* =========================================================
   LOGIN
   ========================================================= */

function login(email) {

    localStorage.setItem(
        LOGIN_KEY,
        "true"
    );

    localStorage.setItem(
        EMAIL_KEY,
        email
    );

    window.location.href = "index.html";
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(
        LOGIN_KEY
    );

    localStorage.removeItem(
        EMAIL_KEY
    );

    window.location.href =
        "login.html";
}


/* =========================================================
   PROTECT MAIN PAGE
   ========================================================= */

function protectPage() {

    const onLoginPage =
        window.location.pathname
            .toLowerCase()
            .endsWith("login.html");

    if (
        !onLoginPage &&
        !isLoggedIn()
    ) {

        window.location.href =
            "login.html";

    }

}


/* =========================================================
   LOGIN FORM
   ========================================================= */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    /* Already logged in */

    if (isLoggedIn()) {

        window.location.href =
            "index.html";

    }


    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("password")
                    .value;

            const status =
                document.getElementById(
                    "loginStatus"
                );

            const button =
                document.getElementById(
                    "loginButton"
                );


            /* Email check */

            if (!email) {

                status.textContent =
                    "Enter your email.";

                status.className =
                    "error";

                return;

            }


            /* Password check */

            if (
                password !==
                DEMO_PASSWORD
            ) {

                status.textContent =
                    "ACCESS DENIED — Invalid password.";

                status.className =
                    "error";

                return;

            }


            /* Successful login */

            button.disabled = true;

            button.textContent =
                "[ ACCESS GRANTED ]";

            status.textContent =
                "Authentication successful...";

            status.className =
                "success";


            setTimeout(() => {

                login(email);

            }, 700);

        }
    );

}


/* =========================================================
   HACKER TERMINAL ANIMATION
   ========================================================= */

const terminal =
    document.getElementById("terminal");

if (terminal) {

    const messages = [
        "> INITIALIZING USHA.AI...",
        "> LOADING SECURITY MODULE...",
        "> CHECKING NETWORK...",
        "> ENCRYPTION: READY",
        "> AUTH NODE: ONLINE",
        "> SYSTEM READY_"
    ];

    let index = 0;

    function typeMessage() {

        if (index >= messages.length) {
            return;
        }

        const message =
            messages[index];

        let charIndex = 0;

        const line =
            document.createElement("div");

        terminal.appendChild(line);

        function typeCharacter() {

            if (
                charIndex <
                message.length
            ) {

                line.textContent +=
                    message[charIndex];

                charIndex++;

                setTimeout(
                    typeCharacter,
                    18
                );

            } else {

                index++;

                setTimeout(
                    typeMessage,
                    180
                );

            }

        }

        typeCharacter();

    }

    typeMessage();

}


/* =========================================================
   PROTECT PAGE
   ========================================================= */

protectPage();


/* =========================================================
   EXPORT LOGOUT FOR HTML
   ========================================================= */

window.ushaLogout = logout;
