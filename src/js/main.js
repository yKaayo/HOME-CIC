// Toggle Button
const btnToggler = document.querySelector('#btn-togler');

btnToggler.addEventListener("click", () => {
    if (btnToggler.classList.contains("bi-justify-left")) {
        btnToggler.classList.replace("bi-justify-left", "bi-x");
    } else {
        btnToggler.classList.replace("bi-x", "bi-justify-left");
    }
})

// Show or Hide Password
const eye = document.querySelector("#eye");
const inputPassword = document.querySelector("#password");

eye.addEventListener("click", () => {
    if (inputPassword.type === "password") {
        inputPassword.setAttribute("type", "text");
        eye.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        inputPassword.setAttribute("type", "password");
        eye.classList.replace("bi-eye-slash", "bi-eye");
    }
})