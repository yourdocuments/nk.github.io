/* ==========================
USHA.AI CYBER INTERFACE
========================== */

/* TYPING EFFECT */

const typingElement = document.getElementById("typing");

const commands = [
"boot_system",
"load_ai_engine",
"check_security",
"initialize_future"
];

let commandIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeCommand() {

```
if (!typingElement) return;

const command = commands[commandIndex];

if (!deleting) {

    typingElement.textContent =
        command.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === command.length) {

        deleting = true;

        setTimeout(typeCommand, 1300);

        return;
    }

} else {

    typingElement.textContent =
        command.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {

        deleting = false;

        commandIndex =
            (commandIndex + 1) % commands.length;
    }
}

setTimeout(
    typeCommand,
    deleting ? 45 : 85
);
```

}

typeCommand();

/* HERO TERMINAL */

const heroTyping =
document.getElementById("heroTyping");

const heroText =
"secure_future --initialize";

let heroIndex = 0;

function heroType() {

```
if (!heroTyping) return;

if (heroIndex < heroText.length) {

    heroTyping.textContent +=
        heroText.charAt(heroIndex);

    heroIndex++;

    setTimeout(heroType, 70);
}
```

}

setTimeout(heroType, 800);

/* MATRIX RAIN */

const canvas =
document.getElementById("matrix");

const ctx =
canvas.getContext("2d");

let width;
let height;
let columns;
let drops;

const characters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&<>/";

function resizeMatrix() {

```
width =
    canvas.width =
    window.innerWidth;

height =
    canvas.height =
    window.innerHeight;

const fontSize = 14;

columns =
    Math.floor(width / fontSize);

drops =
    Array(columns).fill(1);
```

}

function drawMatrix() {

```
ctx.fillStyle =
    "rgba(2, 6, 4, 0.08)";

ctx.fillRect(
    0,
    0,
    width,
    height
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

    const text =
        characters[
            Math.floor(
                Math.random() *
                characters.length
            )
        ];

    ctx.fillText(
        text,
        i * 14,
        drops[i] * 14
    );

    if (
        drops[i] * 14 > height &&
        Math.random() > 0.975
    ) {
        drops[i] = 0;
    }

    drops[i]++;
}
```

}

resizeMatrix();

setInterval(drawMatrix, 45);

window.addEventListener(
"resize",
resizeMatrix
);

/* FILE NAME */

const imageInput =
document.getElementById("image");

const fileName =
document.getElementById("fileName");

if (imageInput) {

```
imageInput.addEventListener(
    "change",
    function () {

        if (this.files.length > 0) {

            fileName.textContent =
                "FILE: " +
                this.files[0].name;

            fileName.style.color =
                "#00ff88";

        } else {

            fileName.textContent =
                "SELECT IMAGE FILE";

            fileName.style.color =
                "";
        }
    }
);
```

}

/* NAV ACTIVE STATE */

const navLinks =
document.querySelectorAll(".nav-link");

const sections =
document.querySelectorAll("section[id]");

function updateActiveNav() {

```
let current = "";

sections.forEach(section => {

    const top =
        section.offsetTop - 250;

    if (
        window.scrollY >= top
    ) {
        current =
            section.getAttribute("id");
    }
});

navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href") ===
        "#" + current
    ) {
        link.classList.add("active");
    }
});
```

}

window.addEventListener(
"scroll",
updateActiveNav
);

/* FORM SUBMIT UX */

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

```
form.addEventListener(
    "submit",
    function () {

        const button =
            this.querySelector(
                ".submit-btn"
            );

        if (!button) return;

        button.disabled = true;

        button.textContent =
            "> TRANSMITTING...";

    }
);
```

});

/* TERMINAL RANDOM STATUS */

const statusMessages = [
"SYSTEM ONLINE",
"SECURE CONNECTION",
"AI ENGINE READY",
"FIREWALL ACTIVE"
];

const status =
document.querySelector(
".brand-status"
);

let statusIndex = 0;

setInterval(() => {

```
if (!status) return;

statusIndex =
    (statusIndex + 1) %
    statusMessages.length;

status.textContent =
    "● " +
    statusMessages[statusIndex];
```

}, 3000);
