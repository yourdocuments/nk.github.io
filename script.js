<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>YOUR SHAFA — Submit Your Message</title>

  <meta
    name="description"
    content="YOUR SHAFA — মনের কথা, অচেনা ঠিকানায়।"
  >

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  >

  <style>

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --green: #16b875;
      --green-dark: #0d8b58;
      --green-light: #e9faf2;
      --black: #07130e;
      --text: #24332c;
      --muted: #7b8982;
      --border: #dfeae4;
      --bg: #f5faf7;
      --white: #ffffff;
    }

    body {
      font-family: "Hind Siliguri", sans-serif;
      background:
        radial-gradient(
          circle at 10% 0%,
          rgba(22,184,117,.12),
          transparent 32%
        ),
        radial-gradient(
          circle at 90% 100%,
          rgba(22,184,117,.10),
          transparent 35%
        ),
        var(--bg);

      color: var(--text);
      min-height: 100vh;
      padding: 25px 15px;
    }

    /* =========================
       CONTAINER
    ========================= */

    .container {
      width: 100%;
      max-width: 650px;
      margin: auto;
    }

    /* =========================
       BRAND
    ========================= */

    .brand {
      text-align: center;
      margin-bottom: 25px;
    }

    .logo {
      width: 62px;
      height: 62px;

      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--black);
      color: var(--green);

      border-radius: 20px;

      font-size: 30px;

      box-shadow:
        0 15px 35px rgba(0,0,0,.12);
    }

    .brand h1 {
      margin-top: 12px;

      font-size: 30px;
      font-weight: 700;

      letter-spacing: -.5px;
    }

    .brand h1 span {
      color: var(--green);
    }

    .brand p {
      margin-top: 2px;

      font-size: 14px;
      color: var(--muted);
    }

    /* =========================
       FORM CARD
    ========================= */

    .form-card {
      background: rgba(255,255,255,.95);

      border: 1px solid var(--border);

      border-radius: 28px;

      padding: 28px;

      box-shadow:
        0 25px 70px rgba(10,40,25,.08);
    }

    /* =========================
       FORM INTRO
    ========================= */

    .form-header {
      background: var(--green-light);

      border: 1px solid #d5f1e2;

      border-radius: 18px;

      padding: 17px;

      margin-bottom: 25px;
    }

    .form-header h2 {
      font-size: 18px;
      margin-bottom: 4px;
      color: var(--green-dark);
    }

    .form-header p {
      font-size: 13px;
      line-height: 1.7;
      color: #527064;
    }

    /* =========================
       FORM GROUP
    ========================= */

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;

      margin-bottom: 8px;

      font-size: 15px;
      font-weight: 600;

      color: var(--text);
    }

    .required {
      color: #e34c4c;
    }

    .optional {
      color: #9aa59f;
      font-size: 12px;
      font-weight: 400;
    }

    /* =========================
       INPUT
    ========================= */

    input,
    textarea {
      width: 100%;

      border: 1px solid var(--border);

      background: #fcfefd;

      border-radius: 14px;

      padding: 14px;

      font-family: inherit;
      font-size: 15px;

      color: var(--text);

      outline: none;

      transition: .25s;
    }

    input::placeholder,
    textarea::placeholder {
      color: #a5afa9;
    }

    input:focus,
    textarea:focus {
      border-color: var(--green);

      background: #ffffff;

      box-shadow:
        0 0 0 4px rgba(22,184,117,.10);
    }

    textarea {
      min-height: 180px;

      resize: vertical;

      line-height: 1.8;
    }

    /* =========================
       EMAIL ICON INPUT
    ========================= */

    .input-wrapper {
      position: relative;
    }

    .input-icon {
      position: absolute;

      left: 14px;
      top: 13px;

      font-size: 17px;

      pointer-events: none;
    }

    .input-wrapper input {
      padding-left: 43px;
    }

    /* =========================
       WHATSAPP
    ========================= */

    .whatsapp-note {
      font-size: 11px;
      color: var(--muted);

      margin-top: 6px;
    }

    /* =========================
       FILE UPLOAD
    ========================= */

    .upload-box {
      border: 1.5px dashed #bddccc;

      background: #f8fcfa;

      border-radius: 17px;

      padding: 23px 15px;

      text-align: center;

      cursor: pointer;

      transition: .25s;
    }

    .upload-box:hover {
      background: #f0faf5;

      border-color: var(--green);
    }

    .upload-box .icon {
      font-size: 30px;
      margin-bottom: 5px;
    }

    .upload-box strong {
      display: block;

      font-size: 14px;
    }

    .upload-box small {
      display: block;

      color: var(--muted);

      margin-top: 3px;

      font-size: 11px;
    }

    input[type="file"] {
      display: none;
    }

    /* =========================
       ANONYMOUS
    ========================= */

    .anonymous-box {
      display: flex;

      align-items: center;

      gap: 12px;

      background: #f8faf9;

      border: 1px solid #e5ece8;

      padding: 14px;

      border-radius: 15px;

      margin-bottom: 20px;
    }

    .switch {
      position: relative;

      width: 45px;
      height: 25px;

      flex-shrink: 0;
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

      transition: .3s;
    }

    .slider:before {
      content: "";

      position: absolute;

      width: 19px;
      height: 19px;

      left: 3px;
      top: 3px;

      background: white;

      border-radius: 50%;

      transition: .3s;
    }

    .switch input:checked + .slider {
      background: var(--green);
    }

    .switch input:checked + .slider:before {
      transform: translateX(20px);
    }

    .anonymous-text strong {
      display: block;

      font-size: 14px;
    }

    .anonymous-text small {
      color: var(--muted);

      font-size: 11px;
    }

    /* =========================
       SUBMIT BUTTON
    ========================= */

    .submit-btn {
      width: 100%;

      border: 0;

      border-radius: 15px;

      padding: 15px;

      background: var(--black);

      color: white;

      font-family: inherit;

      font-size: 16px;

      font-weight: 600;

      cursor: pointer;

      transition: .3s;
    }

    .submit-btn:hover {
      background: var(--green-dark);

      transform: translateY(-2px);

      box-shadow:
        0 12px 25px rgba(13,139,88,.20);
    }

    /* =========================
       PRIVACY
    ========================= */

    .privacy {
      text-align: center;

      margin-top: 17px;

      color: #89958f;

      font-size: 11px;

      line-height: 1.7;
    }

    /* =========================
       SUCCESS
    ========================= */

    .success {
      display: none;

      text-align: center;

      padding: 25px 10px;
    }

    .success-icon {
      width: 72px;
      height: 72px;

      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: var(--green-light);

      font-size: 35px;

      color: var(--green-dark);
    }

    .success h2 {
      margin-top: 15px;

      font-size: 23px;
    }

    .success p {
      color: var(--muted);

      font-size: 14px;

      line-height: 1.8;

      margin-top: 7px;
    }

    .again-btn {
      margin-top: 20px;

      border: 0;

      padding: 11px 23px;

      border-radius: 30px;

      background: var(--black);

      color: white;

      font-family: inherit;

      cursor: pointer;
    }

    /* =========================
       FOOTER
    ========================= */

    footer {
      text-align: center;

      color: #98a39e;

      font-size: 12px;

      margin-top: 20px;
    }

    footer strong {
      color: var(--green-dark);
    }

    /* =========================
       MOBILE
    ========================= */

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

      .form-card {
        padding: 19px 15px;

        border-radius: 23px;
      }

      .form-header {
        padding: 14px;
      }

      textarea {
        min-height: 150px;
      }
    }

  </style>
</head>

<body>

  <div class="container">

    <!-- =========================
         BRAND
    ========================== -->

    <div class="brand">

      <div class="logo">
        🤫
      </div>

      <h1>
        YOUR <span>SHAFA</span>
      </h1>

      <p>
        মনের কথা, অচেনা ঠিকানায়।
      </p>

    </div>


    <!-- =========================
         FORM CARD
    ========================== -->

    <div class="form-card">

      <!-- FORM -->

      <form id="shafaForm">

        <div class="form-header">

          <h2>
            🤫 গোপনে আপনার কথাটি পাঠান
          </h2>

          <p>
            নিচের ফর্মটি পূরণ করুন।
            যার কাছে পাঠাতে চান তার Email অথবা
            WhatsApp Link দিন।
          </p>

        </div>


        <!-- EMAIL -->

        <div class="form-group">

          <label>
            Send Email
            <span class="required">*</span>
          </label>

          <div class="input-wrapper">

            <span class="input-icon">📧</span>

            <input
              type="email"
              id="sendEmail"
              name="send_email"
              placeholder="যার কাছে পাঠাবেন তার Email"
              required
            >

          </div>

        </div>


        <!-- WHATSAPP 1 -->

        <div class="form-group">

          <label>
            WhatsApp Link 1
            <span class="optional">(Optional)</span>
          </label>

          <div class="input-wrapper">

            <span class="input-icon">💬</span>

            <input
              type="url"
              id="whatsapp1"
              name="whatsapp_1"
              placeholder="https://wa.me/..."
            >

          </div>

          <div class="whatsapp-note">
            উদাহরণ: https://wa.me/8801XXXXXXXXX
          </div>

        </div>


        <!-- WHATSAPP 2 -->

        <div class="form-group">

          <label>
            WhatsApp Link 2
            <span class="optional">(Optional)</span>
          </label>

          <div class="input-wrapper">

            <span class="input-icon">💬</span>

            <input
              type="url"
              id="whatsapp2"
              name="whatsapp_2"
              placeholder="https://wa.me/..."
            >

          </div>

        </div>


        <!-- MESSAGE -->

        <div class="form-group">

          <label>
            আপনার কথা / অভিযোগ
            <span class="required">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            maxlength="2000"
            placeholder="আপনার মনের কথাটি এখানে লিখুন..."
            required
          ></textarea>

          <div
            style="
              text-align:right;
              font-size:11px;
              color:#9aa59f;
              margin-top:5px;
            "
          >
            <span id="counter">0</span>/2000
          </div>

        </div>


        <!-- IMAGE -->

        <div class="form-group">

          <label>
            ছবি সংযুক্ত করুন
            <span class="optional">(Optional)</span>
          </label>

          <label
            class="upload-box"
            for="imageFile"
          >

            <div class="icon">
              🖼️
            </div>

            <strong id="imageText">
              ছবি নির্বাচন করুন
            </strong>

            <small>
              JPG, PNG, WEBP
            </small>

          </label>

          <input
            type="file"
            id="imageFile"
            name="image"
            accept="image/*"
          >

        </div>


        <!-- VIDEO -->

        <div class="form-group">

          <label>
            ভিডিও সংযুক্ত করুন
            <span class="optional">(Optional)</span>
          </label>

          <label
            class="upload-box"
            for="videoFile"
          >

            <div class="icon">
              🎥
            </div>

            <strong id="videoText">
              ভিডিও নির্বাচন করুন
            </strong>

            <small>
              MP4, MOV, WEBM
            </small>

          </label>

          <input
            type="file"
            id="videoFile"
            name="video"
            accept="video/*"
          >

        </div>


        <!-- ANONYMOUS -->

        <div class="anonymous-box">

          <label class="switch">

            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked
            >

            <span class="slider"></span>

          </label>

          <div class="anonymous-text">

            <strong>
              🔒 পরিচয় গোপন রাখতে চাই
            </strong>

            <small>
              আপনার পরিচয় প্রকাশ না করার অনুরোধ।
            </small>

          </div>

        </div>


        <!-- HIDDEN UPCOMING -->

        <input
          type="hidden"
          name="upcoming"
          value="YOUR_SHAFA"
        >


        <!-- SUBMIT -->

        <button
          type="submit"
          class="submit-btn"
        >
          🤫 কথাটি জমা দিন
        </button>


        <div class="privacy">

          🔐 আপনার তথ্য গোপন রাখা হবে।<br>

          শুধুমাত্র নির্ধারিত ব্যক্তির কাছে
          আপনার কথাটি পৌঁছানোর উদ্দেশ্যে
          ব্যবহার করা হবে।

        </div>

      </form>


      <!-- =========================
           SUCCESS MESSAGE
      ========================== -->

      <div
        class="success"
        id="success"
      >

        <div class="success-icon">
          ✓
        </div>

        <h2>
          আপনার কথাটি জমা হয়েছে 💚
        </h2>

        <p>
          আপনার submission সফলভাবে গ্রহণ করা হয়েছে।
          <br>
          খুব শীঘ্রই এটি নির্ধারিত ব্যক্তির কাছে
          পৌঁছানোর ব্যবস্থা করা হবে।
        </p>

        <button
          class="again-btn"
          onclick="newMessage()"
        >
          আবার একটি কথা লিখুন
        </button>

      </div>

    </div>


    <footer>
      © 2026 <strong>YOUR SHAFA</strong>
      · মনের কথা, অচেনা ঠিকানায়।
    </footer>

  </div>


  <!-- =========================
       JAVASCRIPT
  ========================== -->

  <script>

    /* =========================
       MESSAGE COUNTER
    ========================== */

    const message =
      document.getElementById("message");

    const counter =
      document.getElementById("counter");

    message.addEventListener(
      "input",
      function () {

        counter.textContent =
          this.value.length;

      }
    );


    /* =========================
       IMAGE FILE NAME
    ========================== */

    const imageFile =
      document.getElementById("imageFile");

    imageFile.addEventListener(
      "change",
      function () {

        if (this.files.length > 0) {

          document.getElementById(
            "imageText"
          ).textContent =
            this.files[0].name;

        }

      }
    );


    /* =========================
       VIDEO FILE NAME
    ========================== */

    const videoFile =
      document.getElementById("videoFile");

    videoFile.addEventListener(
      "change",
      function () {

        if (this.files.length > 0) {

          document.getElementById(
            "videoText"
          ).textContent =
            this.files[0].name;

        }

      }
    );


    /* =========================
       FORM SUBMIT
    ========================== */

    const form =
      document.getElementById("shafaForm");

    form.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const email =
          document.getElementById(
            "sendEmail"
          ).value.trim();

        const text =
          document.getElementById(
            "message"
          ).value.trim();

        if (!email || !text) {

          alert(
            "দয়া করে Email এবং আপনার কথাটি পূরণ করুন।"
          );

          return;

        }


        /*
          এখানে ভবিষ্যতে আপনার
          Email / Backend API যুক্ত করবেন।
        */


        form.style.display = "none";

        document.getElementById(
          "success"
        ).style.display = "block";

      }
    );


    /* =========================
       NEW MESSAGE
    ========================== */

    function newMessage() {

      form.reset();

      counter.textContent = "0";

      document.getElementById(
        "imageText"
      ).textContent =
        "ছবি নির্বাচন করুন";

      document.getElementById(
        "videoText"
      ).textContent =
        "ভিডিও নির্বাচন করুন";

      form.style.display = "block";

      document.getElementById(
        "success"
      ).style.display = "none";

    }

  </script>

</body>
</html>
