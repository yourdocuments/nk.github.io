/* =========================================================
   USHA.AI — DEMO AUTH SYSTEM
   DEVELOPMENT VERSION

   Demo password:
   iloveyouneil

   SECURITY HARDENING:
   Planned for Phase 6.1
   ========================================================= */

const DEMO_PASSWORD = "iloveyouneil";

const LOGIN_KEY = "usha_ai_logged_in";
const EMAIL_KEY = "usha_ai_user_email";


/* =========================================================
   LOGIN STATE
   ========================================================= */

function isLoggedIn() {
    return localStorage.getItem(LOGIN_KEY) === "true";
}


/* =========================================================
   GET USER EMAIL
   ========================================================= */

function getUserEmail() {
    return localStorage.getItem(EMAIL_KEY) || "";
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
   PAGE PROTECTION
   ========================================================= */

function protectPage() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    const loginPage =
        currentPage === "login.html" ||
        currentPage === "";

    if (
        !loginPage &&
        !isLoggedIn()
    ) {

        window.location.replace(
            "login.html"
        );

    }

}


/* =========================================================
   LOGIN FORM
   ========================================================= */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    /*
     * If already logged in,
     * don't show login page again.
     */

    if (isLoggedIn()) {

        window.location.replace(
            "index.html"
        );

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


            /* -----------------------------------------
               EMAIL VALIDATION
               ----------------------------------------- */

            if (!email) {

                status.textContent =
                    "ACCESS DENIED — Email required.";

                status.className =
                    "error";

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                status.textContent =
                    "ACCESS DENIED — Invalid email.";

                status.className =
                    "error";

                return;

            }


            /* -----------------------------------------
               PASSWORD
               ----------------------------------------- */

            if (
                password !==
                DEMO_PASSWORD
            ) {

                status.textContent =
                    "ACCESS DENIED — Invalid access key.";

                status.className =
                    "error";

                return;

            }


            /* -----------------------------------------
               ACCESS GRANTED
               ----------------------------------------- */

            button.disabled = true;

            button.textContent =
                "[ ACCESS GRANTED ]";


            status.textContent =
                "AUTHENTICATION SUCCESSFUL";

            status.className =
                "success";


            /*
             * Save login state immediately.
             */

            localStorage.setItem(
                LOGIN_KEY,
                "true"
            );

            localStorage.setItem(
                EMAIL_KEY,
                email
            );


            /* -----------------------------------------
               CINEMATIC DELAY
               ----------------------------------------- */

            setTimeout(
                () => {

                    window.location.href =
                        "index.html";

                },
                850
            );

        }
    );

}


/* =========================================================
   GLOBAL LOGOUT
   ========================================================= */

window.ushaLogout = logout;


/* =========================================================
   PROTECT CURRENT PAGE
   ========================================================= */

protectPage();


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "%c USHA.AI ",
    `
    background:#00ff9d;
    color:#00150d;
    padding:5px 10px;
    border-radius:4px;
    font-weight:900;
    `
);

console.log(
    "%cSECURE ACCESS TERMINAL",
    `
    color:#00ff9d;
    font-weight:bold;
    `
);

console.log(
    "Development authentication system loaded."
);
