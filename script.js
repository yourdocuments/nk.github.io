"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("mainForm");
    const imageInput = document.getElementById("image");
    const preview = document.getElementById("preview");
    const previewImage = document.getElementById("previewImage");
    const removeImage = document.getElementById("removeImage");

    const submitButton = document.getElementById("submitButton");
    const status = document.getElementById("status");

    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelector(".nav-links");

    const particles = document.getElementById("particles");


    /* =========================
       MOBILE MENU
    ========================= */

    if (mobileMenu && navLinks) {

        mobileMenu.addEventListener("click", function () {

            const isOpen =
                navLinks.classList.toggle("mobile-open");

            mobileMenu.textContent =
                isOpen ? "×" : "☰";

        });


        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("mobile-open");

                mobileMenu.textContent = "☰";

            });

        });

    }


    /* =========================
       IMAGE PREVIEW
    ========================= */

    if (imageInput) {

        imageInput.addEventListener("change", function () {

            const file = this.files && this.files[0];

            if (!file) {
                return;
            }


            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];


            if (!allowedTypes.includes(file.type)) {

                showStatus(
                    "That picture format is having an identity crisis. Please choose JPG, PNG or WebP. 😄",
                    "error"
                );

                this.value = "";

                hidePreview();

                return;
            }


            const maxSize =
                5 * 1024 * 1024;


            if (file.size > maxSize) {

                showStatus(
                    "That image is a little too big. Please keep it under 5 MB. 📦",
                    "error"
                );

                this.value = "";

                hidePreview();

                return;
            }


            const reader =
                new FileReader();


            reader.addEventListener(
                "load",
                function (event) {

                    if (previewImage) {
                        previewImage.src =
                            event.target.result;
                    }

                    if (preview) {
                        preview.classList.add("show");
                    }

                    clearStatus();

                }
            );


            reader.readAsDataURL(file);

        });

    }


    /* =========================
       REMOVE IMAGE
    ========================= */

    if (removeImage) {

        removeImage.addEventListener(
            "click",
            function () {

                if (imageInput) {
                    imageInput.value = "";
                }

                hidePreview();

            }
        );

    }


    function hidePreview() {

        if (preview) {
            preview.classList.remove("show");
        }

        if (previewImage) {
            previewImage.removeAttribute("src");
        }

    }


    /* =========================
       FORM VALIDATION
    ========================= */

    if (form) {

        form.addEventListener("submit", function (event) {

            const name =
                document.getElementById("name");

            const number =
                document.getElementById("number");

            const message =
                document.getElementById("message");


            if (!name || !number || !message) {
                return;
            }


            const nameValue =
                name.value.trim();

            const numberValue =
                number.value.trim();

            const messageValue =
                message.value.trim();


            if (!nameValue) {

                event.preventDefault();

                showStatus(
                    "We need a name first. Even mysterious people need names. 😄",
                    "error"
                );

                name.focus();

                return;
            }


            if (!numberValue) {

                event.preventDefault();

                showStatus(
                    "The number field is feeling lonely. Give it a number. 📱",
                    "error"
                );

                number.focus();

                return;
            }


            if (!messageValue) {

                event.preventDefault();

                showStatus(
                    "You came all this way and forgot the message. 😅",
                    "error"
                );

                message.focus();

                return;
            }


            if (nameValue.length < 2) {

                event.preventDefault();

                showStatus(
                    "That name is suspiciously short. Try a little more. 😄",
                    "error"
                );

                name.focus();

                return;
            }


            if (messageValue.length < 2) {

                event.preventDefault();

                showStatus(
                    "A message with only one character is technically a message... but let's do better. 😄",
                    "error"
                );

                message.focus();

                return;
            }


            /*
             IMPORTANT:

             Do NOT use preventDefault() here.

             FormSubmit needs the browser's normal
             POST request to submit the form.
            */


            if (submitButton) {

                submitButton.disabled = true;

                const buttonText =
                    submitButton.querySelector(".button-text");

                if (buttonText) {
                    buttonText.textContent =
                        "Sending...";
                }

            }

        });

    }


    /* =========================
       STATUS MESSAGE
    ========================= */

    function showStatus(message, type) {

        if (!status) {
            return;
        }

        status.textContent = message;

        status.className =
            "status show " + type;

    }


    function clearStatus() {

        if (!status) {
            return;
        }

        status.textContent = "";

        status.className =
            "status";

    }


    /* =========================
       INPUT FEEDBACK
    ========================= */

    const inputs =
        document.querySelectorAll(
            ".field input, .field textarea"
        );


    inputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                if (status && status.classList.contains("error")) {
                    clearStatus();
                }

            }
        );

    });


    /* =========================
       BACKGROUND PARTICLES
    ========================= */

    if (particles) {

        const particleCount =
            window.innerWidth < 600 ? 18 : 32;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement("span");


            particle.className =
                "floating-particle";


            particle.style.left =
                Math.random() * 100 + "%";


            particle.style.top =
                Math.random() * 100 + "%";


            particle.style.animationDelay =
                Math.random() * 8 + "s";


            particle.style.animationDuration =
                6 + Math.random() * 8 + "s";


            particle.style.opacity =
                0.15 + Math.random() * 0.35;


            particles.appendChild(
                particle
            );

        }

    }


    /* =========================
       MOUSE GLOW
    ========================= */

    const mouseGlow =
        document.createElement("div");


    mouseGlow.className =
        "mouse-glow";


    document.body.appendChild(
        mouseGlow
    );


    let mouseTimer;


    document.addEventListener(
        "mousemove",
        function (event) {

            mouseGlow.style.left =
                event.clientX + "px";

            mouseGlow.style.top =
                event.clientY + "px";

            mouseGlow.style.opacity =
                "1";


            clearTimeout(mouseTimer);


            mouseTimer =
                setTimeout(
                    function () {

                        mouseGlow.style.opacity =
                            "0";

                    },
                    1200
                );

        }
    );


    /* =========================
       SIMPLE SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".create-copy, .form-card, .about-content"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    }


});
