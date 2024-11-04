document.addEventListener("DOMContentLoaded", () => {
    const formOpenBtn = document.querySelector("#login-btn"),
        home = document.querySelector(".home"),
        loginformContainer = document.querySelector(".login-form_container"),
        formCloseBtn = document.querySelector(".form-close"),
        SignupBtn = document.querySelector("#signup"),
        LoginBtn = document.querySelector("#login"),
        pwShowHide = document.querySelectorAll(".pw-hide"),
        userProfileBtn = document.querySelector("#profile-btn"),
        logoutBtn = document.querySelector("#logout-btn"), // Add a logout button reference
        userDropdown = document.querySelector("#dropdown-menu");

    let isLoggedIn = false; // Flag to track the login state

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

    pwShowHide.forEach(icon => {
        icon.addEventListener("click", () => {
            let getPwInput = icon.parentElement.querySelector("input");
            if (getPwInput.type === "password") {
                getPwInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                getPwInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });

    SignupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginformContainer.classList.add("active");
    });

    LoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginformContainer.classList.remove("active");
    });

    // Handle login and logout functionality
    const handleLogin = () => {
        isLoggedIn = true;
        updateUI();
    };

    const handleLogout = () => {
        isLoggedIn = false;
        updateUI();
    };

    const updateUI = () => {
        const loginButton = document.querySelector("#login-btn");
        if (isLoggedIn) {
            loginButton.textContent = "Logout";
            loginButton.removeEventListener("click", openLoginForm); // Remove the login event
            loginButton.addEventListener("click", handleLogout); // Add logout event
            userDropdown.style.display = "block"; // Show user dropdown
        } else {
            loginButton.textContent = "Login";
            loginButton.removeEventListener("click", handleLogout); // Remove the logout event
            loginButton.addEventListener("click", openLoginForm); // Add login event
            userDropdown.style.display = "none"; // Hide user dropdown
        }
    };

    const openLoginForm = () => {
        home.classList.add("show");
    };

    loginformContainer.querySelector(".button_login").addEventListener("click", (e) => {
        e.preventDefault();
        handleLogin(); // Call handleLogin on successful login
        home.classList.remove("show"); // Hide login form after login
    });
    
    updateUI(); // Initialize UI based on the login state
});
