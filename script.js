/* =====================================
USHA.AI // SYSTEM JAVASCRIPT
===================================== */

/* =====================================
MATRIX BACKGROUND
===================================== */

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

let columns = 0;
let drops = [];

function resizeCanvas() {

```
canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

columns =
    Math.floor(
        window.innerWidth / 14
    );

drops =
    Array(columns).fill(1);
```

}

resizeCanvas();

const matrixChars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&<>";

function matrixRain() {

```
ctx.fillStyle =
    "rgba(1,5,3,.08)";

ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
);


ctx.fillStyle =
    "#00ff88";

ctx.font =
    "14px monospace";


for (
    let i = 0;
    i < drops.length;
    i++
) {

    const char =
        matrixChars[
            Math.floor(
                Math.random() *
                matrixChars.length
            )
        ];


    ctx.fillText(
        char,
        i * 14,
        drops[i] * 14
    );


    if (
        drops[i] * 14 >
            canvas.height &&
        Math.random() > .975
    ) {

        drops[i] = 0;

    }


    drops[i]++;

}
```

}

setInterval(
matrixRain,
45
);

window.addEventListener(
"resize",
resizeCanvas
);

/* =====================================
SIDEBAR TYPING
===================================== */

const sideTyping =
document.getElementById(
"sideTyping"
);

const sideCommands = [

```
"boot_system",

"load_ai_core",

"check_security",

"scan_network",

"initialize_future"
```

];

let sideCommand = 0;
let sidePosition = 0;
let sideDelete = false;

function sideType() {

```
if (!sideTyping) return;


const text =
    sideCommands[sideCommand];


if (!sideDelete) {

    sidePosition++;


    sideTyping.textContent =
        text.substring(
            0,
            sidePosition
        );


    if (
        sidePosition >=
        text.length
    ) {

        sideDelete = true;

        setTimeout(
            sideType,
            1000
        );

        return;

    }

} else {

    sidePosition--;


    sideTyping.textContent =
        text.substring(
            0,
            sidePosition
        );


    if (
        sidePosition <= 0
    ) {

        sideDelete = false;

        sideCommand =
            (
                sideCommand + 1
            ) %
            sideCommands.length;

    }

}


setTimeout(
    sideType,
    sideDelete ? 35 : 70
);
```

}

sideType();

/* =====================================
HERO TYPING
===================================== */

const heroTyping =
document.getElementById(
"heroTyping"
);

const heroText =
"initialize_future.exe";

let heroPosition = 0;

function heroType() {

```
if (!heroTyping) return;


if (
    heroPosition <
    heroText.length
) {

    heroTyping.textContent +=
        heroText.charAt(
            heroPosition
        );


    heroPosition++;


    setTimeout(
        heroType,
        70
    );

}
```

}

setTimeout(
heroType,
700
);

/* =====================================
COUNTERS
===================================== */

const counters =
document.querySelectorAll(
".counter"
);

const counterObserver =
new IntersectionObserver(

```
    entries => {

        entries.forEach(
            entry => {

                if (
                    !entry.isIntersecting
                ) {
                    return;
                }


                const element =
                    entry.target;


                const target =
                    Number(
                        element.dataset.target
                    );


                let current = 0;


                const timer =
                    setInterval(
                        () => {

                            current +=
                                Math.ceil(
                                    target / 40
                                );


                            if (
                                current >=
                                target
                            ) {

                                current =
                                    target;

                                clearInterval(
                                    timer
                                );

                            }


                            element.textContent =
                                current;

                        },
                        30
                    );


                counterObserver.unobserve(
                    element
                );

            }
        );

    },

    {
        threshold: .5
    }

);
```

counters.forEach(
counter =>
counterObserver.observe(counter)
);

/* =====================================
LIVE TERMINAL
===================================== */

const terminal =
document.getElementById(
"terminalOutput"
);

const messages = [

```
"[SYSTEM] Secure network connected.",

"[FIREWALL] Security layer active.",

"[AI] Intelligence engine detected.",

"[NETWORK] 24 nodes online.",

"[CORE] All systems operational.",

"[SECURITY] No critical alerts.",

"[USHA] Future protocol initialized."
```

];

let messageIndex = 0;

function addTerminalMessage() {

```
if (!terminal) return;


const line =
    document.createElement(
        "div"
    );


line.innerHTML =
    `<b>root@usha:~$</b> ${
        messages[messageIndex]
    }`;


terminal.appendChild(line);


if (
    terminal.children.length > 9
) {

    terminal.removeChild(
        terminal.firstElementChild
    );

}


messageIndex =
    (
        messageIndex + 1
    ) %
    messages.length;
```

}

setInterval(
addTerminalMessage,
1700
);

/* =====================================
MOBILE MENU
===================================== */

const menuBtn =
document.getElementById(
"menuBtn"
);

const sidebar =
document.getElementById(
"sidebar"
);

if (menuBtn && sidebar) {

```
menuBtn.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );


        menuBtn.textContent =
            sidebar.classList.contains(
                "open"
            )
                ? "×"
                : "☰";

    }
);
```

}

/* CLOSE MOBILE MENU */

document.querySelectorAll(
".nav-link"
).forEach(
link => {

```
    link.addEventListener(
        "click",
        () => {

            sidebar.classList.remove(
                "open"
            );


            if (menuBtn) {

                menuBtn.textContent =
                    "☰";

            }

        }
    );

}
```

);

/* =====================================
ACTIVE NAVIGATION
===================================== */

const navLinks =
document.querySelectorAll(
".nav-link"
);

const sections =
document.querySelectorAll(
"section[id]"
);

function updateNav() {

```
let current = "";


sections.forEach(
    section => {

        const top =
            section.offsetTop - 250;


        if (
            window.scrollY >= top
        ) {

            current =
                section.id;

        }

    }
);


navLinks.forEach(
    link => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute(
                "href"
            ) ===
            "#" + current
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
updateNav
);

updateNav();

/* =====================================
ADMISSION FORM
===================================== */

const admissionForm =
document.getElementById(
"admissionForm"
);

if (admissionForm) {

```
admissionForm.addEventListener(
    "submit",
    () => {

        const button =
            admissionForm.querySelector(
                ".submit"
            );


        if (!button) return;


        button.disabled = true;


        button.textContent =
            "> TRANSMITTING_APPLICATION...";

    }
);
```

}
