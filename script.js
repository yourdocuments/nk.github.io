/* =========================================
   YOUR SHAFA — FORM CSS
   ========================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --green: #16b875;
  --green-dark: #0b8b57;
  --green-light: #eafaf2;

  --black: #07130e;
  --text: #25342d;
  --muted: #7d8984;

  --border: #dce9e2;
  --bg: #f5faf7;
  --white: #ffffff;

  --danger: #e05252;
}

/* =========================================
   BODY
   ========================================= */

body {
  min-height: 100vh;

  font-family: "Hind Siliguri", sans-serif;

  color: var(--text);

  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(22, 184, 117, 0.13),
      transparent 30%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(22, 184, 117, 0.10),
      transparent 32%
    ),
    var(--bg);

  padding: 25px 15px;
}


/* =========================================
   MAIN CONTAINER
   ========================================= */

.container {
  width: 100%;
  max-width: 650px;

  margin: 0 auto;
}


/* =========================================
   BRAND
   ========================================= */

.brand {
  text-align: center;
  margin-bottom: 25px;
}

.logo {
  width: 62px;
  height: 62px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--black);

  color: var(--green);

  border-radius: 20px;

  font-size: 29px;

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.12);
}

.brand h1 {
  margin-top: 12px;

  font-size: 30px;

  font-weight: 700;

  letter-spacing: -0.6px;
}

.brand h1 span {
  color: var(--green);
}

.brand p {
  margin-top: 3px;

  color: var(--muted);

  font-size: 14px;
}


/* =========================================
   FORM CARD
   ========================================= */

.form-card {
  width: 100%;

  background: rgba(255, 255, 255, 0.96);

  border: 1px solid var(--border);

  border-radius: 28px;

  padding: 28px;

  box-shadow:
    0 25px 70px rgba(10, 40, 25, 0.08);
}


/* =========================================
   FORM HEADER
   ========================================= */

.form-header {
  background: var(--green-light);

  border: 1px solid #d4f1e1;

  border-radius: 18px;

  padding: 17px;

  margin-bottom: 25px;
}

.form-header h2 {
  color: var(--green-dark);

  font-size: 18px;

  margin-bottom: 4px;
}

.form-header p {
  color: #527064;

  font-size: 13px;

  line-height: 1.7;
}


/* =========================================
   FORM GROUP
   ========================================= */

.form-group {
  margin-bottom: 20px;
}


/* =========================================
   LABEL
   ========================================= */

label {
  display: block;

  margin-bottom: 8px;

  color: var(--text);

  font-size: 15px;

  font-weight: 600;
}

.required {
  color: var(--danger);
}

.optional {
  color: #9ba59f;

  font-size: 12px;

  font-weight: 400;
}


/* =========================================
   INPUT & TEXTAREA
   ========================================= */

input,
textarea,
select {
  width: 100%;

  border: 1px solid var(--border);

  background: #fcfefd;

  border-radius: 14px;

  padding: 14px;

  color: var(--text);

  font-family: inherit;

  font-size: 15px;

  outline: none;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

input::placeholder,
textarea::placeholder {
  color: #a6b0ab;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--green);

  background: var(--white);

  box-shadow:
    0 0 0 4px rgba(22, 184, 117, 0.10);
}


/* =========================================
   TEXTAREA
   ========================================= */

textarea {
  min-height: 180px;

  resize: vertical;

  line-height: 1.8;
}


/* =========================================
   INPUT ICON
   ========================================= */

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;

  left: 14px;
  top: 50%;

  transform: translateY(-50%);

  font-size: 17px;

  pointer-events: none;
}

.input-wrapper input {
  padding-left: 43px;
}


/* =========================================
   WHATSAPP NOTE
   ========================================= */

.whatsapp-note {
  margin-top: 6px;

  color: var(--muted);

  font-size: 11px;

  line-height: 1.5;
}


/* =========================================
   FILE UPLOAD
   ========================================= */

.upload-box {
  width: 100%;

  display: block;

  text-align: center;

  padding: 23px 15px;

  background: #f8fcfa;

  border: 1.5px dashed #bcdccc;

  border-radius: 17px;

  cursor: pointer;

  transition: 0.25s ease;
}

.upload-box:hover {
  background: #f0faf5;

  border-color: var(--green);

  transform: translateY(-1px);
}

.upload-box .icon {
  font-size: 30px;

  margin-bottom: 5px;
}

.upload-box strong {
  display: block;

  font-size: 14px;

  color: var(--text);
}

.upload-box small {
  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 11px;
}

input[type="file"] {
  display: none;
}


/* =========================================
   ANONYMOUS BOX
   ========================================= */

.anonymous-box {
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 14px;

  margin-bottom: 20px;

  background: #f8faf9;

  border: 1px solid #e4ece8;

  border-radius: 15px;
}


/* =========================================
   SWITCH
   ========================================= */

.switch {
  position: relative;

  width: 45px;
  height: 25px;

  flex-shrink: 0;

  margin: 0;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;

  inset: 0;

  background: #cbd6d0;

  border-radius: 30px;

  cursor: pointer;

  transition: 0.3s;
}

.slider::before {
  content: "";

  position: absolute;

  width: 19px;
  height: 19px;

  left: 3px;
  top: 3px;

  background: white;

  border-radius: 50%;

  transition: 0.3s;
}

.switch input:checked + .slider {
  background: var(--green);
}

.switch input:checked + .slider::before {
  transform: translateX(20px);
}


/* =========================================
   ANONYMOUS TEXT
   ========================================= */

.anonymous-text {
  margin: 0;
}

.anonymous-text strong {
  display: block;

  color: var(--text);

  font-size: 14px;
}

.anonymous-text small {
  display: block;

  color: var(--muted);

  font-size: 11px;

  margin-top: 2px;
}


/* =========================================
   SUBMIT BUTTON
   ========================================= */

.submit-btn {
  width: 100%;

  border: none;

  border-radius: 15px;

  padding: 15px;

  background: var(--black);

  color: white;

  font-family: inherit;

  font-size: 16px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.3s ease;
}

.submit-btn:hover {
  background: var(--green-dark);

  transform: translateY(-2px);

  box-shadow:
    0 12px 28px rgba(13, 139, 88, 0.22);
}

.submit-btn:active {
  transform: translateY(0);
}


/* =========================================
   PRIVACY
   ========================================= */

.privacy {
  text-align: center;

  margin-top: 17px;

  color: #89958f;

  font-size: 11px;

  line-height: 1.7;
}


/* =========================================
   SUCCESS MESSAGE
   ========================================= */

.success {
  display: none;

  text-align: center;

  padding: 30px 10px;
}

.success-icon {
  width: 72px;
  height: 72px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--green-light);

  color: var(--green-dark);

  border-radius: 50%;

  font-size: 34px;
}

.success h2 {
  margin-top: 15px;

  color: var(--text);

  font-size: 23px;
}

.success p {
  margin-top: 8px;

  color: var(--muted);

  font-size: 14px;

  line-height: 1.8;
}

.again-btn {
  margin-top: 20px;

  border: none;

  padding: 11px 23px;

  background: var(--black);

  color: white;

  border-radius: 30px;

  font-family: inherit;

  cursor: pointer;

  transition: 0.25s;
}

.again-btn:hover {
  background: var(--green-dark);
}


/* =========================================
   FOOTER
   ========================================= */

footer {
  text-align: center;

  margin-top: 20px;

  color: #98a39e;

  font-size: 12px;
}

footer strong {
  color: var(--green-dark);
}


/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 520px) {

  body {
    padding: 15px 10px;
  }

  .brand {
    margin-bottom: 20px;
  }

  .logo {
    width: 55px;
    height: 55px;

    border-radius: 17px;

    font-size: 26px;
  }

  .brand h1 {
    font-size: 26px;
  }

  .brand p {
    font-size: 13px;
  }

  .form-card {
    padding: 19px 15px;

    border-radius: 23px;
  }

  .form-header {
    padding: 14px;

    border-radius: 16px;
  }

  .form-header h2 {
    font-size: 17px;
  }

  .form-header p {
    font-size: 12px;
  }

  input,
  textarea,
  select {
    font-size: 14px;
  }

  textarea {
    min-height: 150px;
  }

  .submit-btn {
    padding: 14px;

    font-size: 15px;
  }

}


/* =========================================
   VERY SMALL DEVICES
   ========================================= */

@media (max-width: 350px) {

  body {
    padding: 10px 7px;
  }

  .form-card {
    padding: 16px 12px;
  }

  .brand h1 {
    font-size: 23px;
  }

}
