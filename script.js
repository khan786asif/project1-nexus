const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formTitle = document.getElementById("form-title");

function toggleForm() {
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        formTitle.textContent = "Login";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        formTitle.textContent = "Sign Up";
    }
}

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters long";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        // Proceed with form submission (e.g., send data to the server)
    }
});
