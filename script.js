/* =========================================================
   USHA.AI — COMPLETE SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const form = document.getElementById("submissionForm");
    const submitButton = document.getElementById("submitButton");
    const status = document.getElementById("status");

    const navLinks = document.querySelectorAll(
        ".nav-menu a[href^='#']"
    );


    /* =====================================================
       SMOOTH NAVIGATION
       ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll(
        "section[id], main[id]"
    );

    if (sections.length && navLinks.length) {

        const updateActiveNav = () => {

            const scrollPosition =
                window.scrollY + 180;

            let currentSection = "";

            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition <
                    sectionTop + sectionHeight
                ) {
                    currentSection =
                        section.getAttribute("id");
                }

            });

            navLinks.forEach((link) => {

                const href =
                    link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    href === `#${currentSection}`
                );

            });

        };

        window.addEventListener(
            "scroll",
            updateActiveNav,
            { passive: true }
        );

        updateActiveNav();
    }


    /* =====================================================
       FORM HELPERS
       ===================================================== */

    function showStatus(message, type = "normal") {

        if (!status) {
            return;
        }

        status.textContent = message;

        status.style.color =
            type === "success"
                ? "#00e6a8"
                : type === "error"
                    ? "#ff6b81"
                    : "#aab5d1";

    }


    function setButtonLoading(isLoading) {

        if (!submitButton) {
            return;
        }

        if (isLoading) {

            submitButton.disabled = true;

            submitButton.dataset.originalText =
                submitButton.textContent;

            submitButton.textContent =
                "Submitting...";

            submitButton.style.opacity =
                "0.7";

            submitButton.style.cursor =
                "wait";

        } else {

            submitButton.disabled = false;

            submitButton.textContent =
                submitButton.dataset.originalText ||
                "Submit";

            submitButton.style.opacity =
                "1";

            submitButton.style.cursor =
                "pointer";

        }

    }


    /* =====================================================
       INPUT VALIDATION
       ===================================================== */

    function validateForm() {

        if (!form) {
            return false;
        }

        const requiredFields =
            form.querySelectorAll(
                "input[required], select[required], textarea[required]"
            );

        for (const field of requiredFields) {

            if (!field.value.trim()) {

                field.focus();

                showStatus(
                    "Please fill in all required fields.",
                    "error"
                );

                return false;
            }

        }


        /* Email validation */

        const email =
            form.querySelector(
                'input[type="email"]'
            );

        if (email && email.value.trim()) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {

                email.focus();

                showStatus(
                    "Please enter a valid email address.",
                    "error"
                );

                return false;
            }

        }


        /* File validation */

        const fileInput =
            form.querySelector(
                'input[type="file"]'
            );

        if (
            fileInput &&
            fileInput.files &&
            fileInput.files.length > 0
        ) {

            const file =
                fileInput.files[0];

            const maxSize =
                10 * 1024 * 1024; // 10 MB

            if (file.size > maxSize) {

                fileInput.value = "";

                showStatus(
                    "File size must be 10 MB or less.",
                    "error"
                );

                return false;
            }

        }


        return true;
    }


    /* =====================================================
       FORM SUBMISSION
       ===================================================== */

    if (form) {

        form.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();

                showStatus("");

                if (!validateForm()) {
                    return;
                }

                setButtonLoading(true);

                showStatus(
                    "Submitting your application..."
                );


                try {

                    /*
                     * IMPORTANT:
                     *
                     * Replace this section with your real
                     * backend / Formspree / Apps Script /
                     * Firebase endpoint if required.
                     *
                     * The current version prepares the
                     * FormData and gives a successful UI
                     * response without pretending that a
                     * server received it.
                     */


                    const formData =
                        new FormData(form);

                    console.log(
                        "USHA.AI submission:",
                        Object.fromEntries(
                            formData.entries()
                        )
                    );


                    /*
                     * Small delay so the UI feels natural.
                     * Remove this when connecting a backend.
                     */

                    await new Promise(
                        (resolve) =>
                            setTimeout(resolve, 900)
                    );


                    showStatus(
                        "Submission received successfully.",
                        "success"
                    );


                    /*
                     * Reset form after successful submit.
                     */

                    form.reset();


                    /*
                     * Redirect if a success page exists.
                     *
                     * Change this path if your success.html
                     * is located somewhere else.
                     */

                    setTimeout(() => {

                        window.location.href =
                            "success.html";

                    }, 1000);


                } catch (error) {

                    console.error(
                        "Submission error:",
                        error
                    );

                    showStatus(
                        "Something went wrong. Please try again.",
                        "error"
                    );

                } finally {

                    setButtonLoading(false);

                }

            }
        );

    }


    /* =====================================================
       FILE NAME DISPLAY
       ===================================================== */

    const fileInputs =
        document.querySelectorAll(
            'input[type="file"]'
        );

    fileInputs.forEach((input) => {

        input.addEventListener(
            "change",
            () => {

                const info =
                    input.parentElement
                        ?.querySelector(".file-info");

                if (!info) {
                    return;
                }

                if (
                    input.files &&
                    input.files.length
                ) {

                    const file =
                        input.files[0];

                    const size =
                        (
                            file.size /
                            (1024 * 1024)
                        ).toFixed(2);

                    info.textContent =
                        `${file.name} • ${size} MB`;

                } else {

                    info.textContent =
                        "No file selected.";

                }

            }
        );

    });


    /* =====================================================
       PREVENT DOUBLE SUBMISSION
       ===================================================== */

    if (form && submitButton) {

        form.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" &&
                    event.target.tagName !== "TEXTAREA"
                ) {

                    /*
                     * Let normal form submission handle
                     * Enter, but don't trigger accidental
                     * duplicate clicks.
                     */

                    if (submitButton.disabled) {
                        event.preventDefault();
                    }

                }

            }
        );

    }


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    if (submitButton) {

        submitButton.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                const rect =
                    this.getBoundingClientRect();

                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );

                const x =
                    event.clientX -
                    rect.left -
                    size / 2;

                const y =
                    event.clientY -
                    rect.top -
                    size / 2;

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${x}px`;

                ripple.style.top =
                    `${y}px`;

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,0.25)";

                ripple.style.transform =
                    "scale(0)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.animation =
                    "buttonRipple 0.6s ease-out";

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 650);

            }
        );

    }


    /* =====================================================
       ADD RIPPLE ANIMATION
       ===================================================== */

    const rippleStyle =
        document.createElement("style");

    rippleStyle.textContent = `
        @keyframes buttonRipple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(rippleStyle);


    /* =====================================================
       INTERSECTION OBSERVER
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".coming-card, .form-section"
        );

    if (
        "IntersectionObserver" in window &&
        animatedElements.length
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        animatedElements.forEach(
            (element) =>
                observer.observe(element)
        );

    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (status) {
                    showStatus("");
                }

            }

        }
    );


    /* =====================================================
       PAGE READY
       ===================================================== */

    console.log(
        "%cUSHA.AI",
        `
        color:#00e5ff;
        font-size:24px;
        font-weight:900;
        text-shadow:0 0 15px #00e5ff;
        `
    );

    console.log(
        "Website initialized successfully."
    );

});
