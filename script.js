/* =========================================================
USHA.AI // script.js
LOGIN + LOGOUT + MATRIX + TERMINAL + FORM
========================================================= */

/* =========================================================
LOGIN CONFIG
========================================================= */

const LOGIN_PASSWORD = "iloveyouneil";

/* =========================================================
ELEMENTS
========================================================= */

const loginScreen =
document.getElementById("loginScreen");

const loginForm =
document.getElementById("loginForm");

const loginPassword =
document.getElementById("loginPassword");

const loginError =
document.getElementById("loginError");

const logoutBtn =
document.getElementById("logoutBtn");

const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

/* =========================================================
LOGIN CHECK
========================================================= */

function checkLogin() {

```
const loggedIn =
    sessionStorage.getItem(
        "usha_logged_in"
    ) === "true";


if (loggedIn) {

    if (loginScreen) {

        loginScreen.style.display =
            "none";

    }

    if (logoutBtn) {

        logoutBtn.style.display =
            "block";

    }

} else {

    if (loginScreen) {

        loginScreen.style.display =
            "flex";

    }

    if (logoutBtn) {

        logoutBtn.style.display =
            "none";

    }

}
```

}

checkLogin();

/* =========================================================
LOGIN
========================================================= */

if (loginForm) {

```
loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const password =
            loginPassword.value.trim();


        if (
            password ===
            LOGIN_PASSWORD
        ) {

            sessionStorage.setItem(
                "usha_logged_in",
                "true"
            );


            loginError.textContent = "";


            const button =
                loginForm.querySelector(
                    "button"
                );


            if (button) {

                button.disabled =
                    true;

                button.textContent =
                    "> ACCESS_GRANTED";

            }


            setTimeout(
                function () {

                    loginScreen.style.display =
                        "none";

                    logoutBtn.style.display =
                        "block";

                    if (button) {

                        button.disabled =
                            false;

                        button.textContent =
                            "> AUTHENTICATE";

                    }

                },
                600
            );


        } else {

            loginError.textContent =
                "[ERROR] ACCESS DENIED";


            loginPassword.value = "";


            loginPassword.focus();


            if (loginForm) {

                loginForm.classList.remove(
                    "glitch-active"
                );

                void loginForm.offsetWidth;

                loginForm.classList.add(
                    "glitch-active"
                );

            }

        }

    }
);
```

}

/* =========================================================
LOGOUT
========================================================= */

if (logoutBtn) {

```
logoutBtn.addEventListener(
    "click",
    function () {

        sessionStorage.removeItem(
            "usha_logged_in"
        );


        location.reload();

    }
);
```

}

/* =========================================================
MOBILE MENU
========================================================= */

if (menuBtn && sidebar) {

```
menuBtn.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle(
            "open"
        );

    }
);
```

}

/* =========================================================
CLOSE MOBILE MENU AFTER NAVIGATION
========================================================= */

document.querySelectorAll(
".nav-link"
).forEach(
function (link) {

```
    link.addEventListener(
        "click",
        function () {

            if (sidebar) {

                sidebar.classList.remove(
                    "open"
                );

            }

        }
    );

}
```

);

/* =========================================================
ACTIVE NAVIGATION
========================================================= */

const sections =
document.querySelectorAll(
"section[id]"
);

const navLinks =
document.querySelectorAll(
".nav-link"
);

function updateActiveNav() {

```
let current = "";


sections.forEach(
    function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute(
                    "id"
                );

        }

    }
);


navLinks.forEach(
    function (link) {

        link.classList.remove(
            "active"
        );


        const href =
            link.getAttribute(
                "href"
            );


        if (
            href === "#" + current
        ) {

            link.classList.add(
                "active"
            );

        }

    }
);
```

}

window.addEventListener(
"scroll",
updateActiveNav
);

updateActiveNav();

/* =========================================================
HERO TYPING EFFECT
========================================================= */

const heroTyping =
document.getElementById(
"heroTyping"
);

const sideTyping =
document.getElementById(
"sideTyping"
);

const typingText =
" initialize_ai_core";

let typingIndex = 0;

function typeHeroText() {

```
if (!heroTyping) {

    return;

}


if (
    typingIndex <
    typingText.length
) {

    heroTyping.textContent +=
        typingText.charAt(
            typingIndex
        );

    typingIndex++;

    setTimeout(
        typeHeroText,
        65
    );

} else {

    setTimeout(
        function () {

            heroTyping.textContent = "";

            typingIndex = 0;

            typeHeroText();

        },
        3500
    );

}
```

}

typeHeroText();

/* =========================================================
SIDEBAR TYPING
========================================================= */

const sideText =
" security_protocol";

let sideIndex = 0;

function typeSideText() {

```
if (!sideTyping) {

    return;

}


if (
    sideIndex <
    sideText.length
) {

    sideTyping.textContent +=
        sideText.charAt(
            sideIndex
        );

    sideIndex++;

    setTimeout(
        typeSideText,
        80
    );

} else {

    setTimeout(
        function () {

            sideTyping.textContent =
                "";

            sideIndex = 0;

            typeSideText();

        },
        2800
    );

}
```

}

typeSideText();

/* =========================================================
MATRIX EFFECT
========================================================= */

const matrix =
document.getElementById(
"matrix"
);

if (matrix) {

```
const ctx =
    matrix.getContext("2d");


let width =
    window.innerWidth;

let height =
    window.innerHeight;


matrix.width =
    width;

matrix.height =
    height;


const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";


const fontSize = 12;


let columns =
    Math.floor(
        width / fontSize
    );


let drops =
    new Array(columns).fill(1);


function resizeMatrix() {

    width =
        window.innerWidth;

    height =
        window.innerHeight;


    matrix.width =
        width;

    matrix.height =
        height;


    columns =
        Math.floor(
            width / fontSize
        );


    drops =
        new Array(columns).fill(1);

}


window.addEventListener(
    "resize",
    resizeMatrix
);


function drawMatrix() {

    ctx.fillStyle =
        "rgba(1, 6, 4, 0.08)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    ctx.fillStyle =
        "#00ff88";

    ctx.font =
        fontSize +
        "px monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const character =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        const x =
            i * fontSize;


        const y =
            drops[i] *
            fontSize;


        ctx.fillText(
            character,
            x,
            y
        );


        if (
            y > height &&
            Math.random() > .975
        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


setInterval(
    drawMatrix,
    55
);
```

}

/* =========================================================
COUNTER ANIMATION
========================================================= */

const counters =
document.querySelectorAll(
".counter"
);

function animateCounter(
element
) {

```
const target =
    Number(
        element.dataset.target
    );


let current = 0;


const duration = 1300;


const start =
    performance.now();


function update(
    currentTime
) {

    const progress =
        Math.min(
            (currentTime - start) /
            duration,
            1
        );


    const eased =
        1 -
        Math.pow(
            1 - progress,
            3
        );


    current =
        Math.floor(
            target * eased
        );


    element.textContent =
        current.toLocaleString();


    if (
        progress < 1
    ) {

        requestAnimationFrame(
            update
        );

    }

}


requestAnimationFrame(
    update
);
```

}

/* =========================================================
COUNTER OBSERVER
========================================================= */

if (
"IntersectionObserver"
in window
) {

```
const counterObserver =
    new IntersectionObserver(
        function (
            entries,
            observer
        ) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .5
        }
    );


counters.forEach(
    function (counter) {

        counterObserver.observe(
            counter
        );

    }
);
```

} else {

```
counters.forEach(
    function (counter) {

        animateCounter(
            counter
        );

    }
);
```

}

/* =========================================================
FORM INPUT FOCUS
========================================================= */

document.querySelectorAll(
".field"
).forEach(
function (field) {

```
    const input =
        field.querySelector(
            "input, select, textarea"
        );


    if (!input) {

        return;

    }


    input.addEventListener(
        "focus",
        function () {

            field.classList.add(
                "focused"
            );

        }
    );


    input.addEventListener(
        "blur",
        function () {

            field.classList.remove(
                "focused"
            );

        }
    );

}
```

);

/* =========================================================
TRANSMITTING EFFECT
IMPORTANT:
We DON'T prevent the form submission.
========================================================= */

const admissionForm =
document.getElementById(
"admissionForm"
);

if (admissionForm) {

```
admissionForm.addEventListener(
    "submit",
    function (event) {

        /*
         * Browser validation.
         */

        if (
            !admissionForm.checkValidity()
        ) {

            event.preventDefault();

            admissionForm.reportValidity();

            return;

        }


        /*
         * DO NOT use:
         *
         * event.preventDefault();
         *
         * here.
         *
         * FormSubmit must receive
         * the normal form request.
         */


        const button =
            admissionForm.querySelector(
                ".submit"
            );


        if (button) {

            button.disabled =
                true;

            button.innerHTML =
                "&gt; TRANSMITTING...";

        }


        addTerminalLog(
            "admission_data -- transmitting"
        );

    }
);
```

}

/* =========================================================
GENERAL FORM TRANSMITTING
========================================================= */

document.querySelectorAll(
".form-section form"
).forEach(
function (form) {

```
    form.addEventListener(
        "submit",
        function (event) {

            if (
                !form.checkValidity()
            ) {

                event.preventDefault();

                form.reportValidity();

                return;

            }


            /*
             * Normal submission continues.
             */

            const button =
                form.querySelector(
                    ".submit"
                );


            if (button) {

                button.disabled =
                    true;

                button.innerHTML =
                    "&gt; TRANSMITTING...";

            }


            addTerminalLog(
                "submission_data -- transmitting"
            );

        }
    );

}
```

);

/* =========================================================
TERMINAL LOG
========================================================= */

const terminalOutput =
document.getElementById(
"terminalOutput"
);

function addTerminalLog(
message
) {

```
if (!terminalOutput) {

    return;

}


const line =
    document.createElement(
        "div"
    );


const prefix =
    document.createElement(
        "b"
    );


prefix.textContent =
    "root@usha:~$";


line.appendChild(
    prefix
);


line.appendChild(
    document.createTextNode(
        " " + message
    )
);


terminalOutput.appendChild(
    line
);


terminalOutput.scrollTop =
    terminalOutput.scrollHeight;
```

}

/* =========================================================
RANDOM TERMINAL LOGS
========================================================= */

const randomLogs = [

```
"network --stable",

"ai_core --online",

"security --active",

"database --connected",

"admission_api --ready",

"system_monitor --running"
```

];

setInterval(
function () {

```
    if (
        Math.random() > .45
    ) {

        const random =
            randomLogs[
                Math.floor(
                    Math.random() *
                    randomLogs.length
                )
            ];


        addTerminalLog(
            random
        );

    }

},
5000
```

);

/* =========================================================
GLITCH HERO
========================================================= */

const heroTitle =
document.querySelector(
".hero h1"
);

if (heroTitle) {

```
setInterval(
    function () {

        heroTitle.classList.add(
            "glitch-active"
        );


        setTimeout(
            function () {

                heroTitle.classList.remove(
                    "glitch-active"
                );

            },
            180
        );

    },
    6500
);
```

}

/* =========================================================
SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(
function (link) {

```
    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute(
                    "href"
                );


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}
```

);

/* =========================================================
CONSOLE MESSAGE
========================================================= */

console.log(
"%c USHA.AI ",
"background:#00ff88;color:#001208;font-weight:bold;padding:5px;"
);

console.log(
"%c SYSTEM ONLINE // ACCESS GRANTED ",
"color:#00ff88;font-family:monospace;"
);

/* =========================================================
FINAL SYSTEM STATUS
========================================================= */

document.body.classList.add(
"system-ready"
);
