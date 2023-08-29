// Referencias a elementos HTML
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const userInfo = document.getElementById("user-info");
const loggedInUser = document.getElementById("logged-in-user");
const logoutButton = document.getElementById("logout-button");

// Función para manejar el inicio de sesión
function login() {
    const username = usernameInput.value;
    const password = passwordInput.value;

// Simulación de autenticación
if (username === "usuario" && password === "contraseña") {
    // Almacenar en localStorage
    localStorage.setItem("loggedInUser", username);

    // Mostrar información del usuario
    loggedInUser.textContent = username;
    loginForm.style.display = "none";
    userInfo.style.display = "block";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
}

// Función para manejar el cierre de sesión
function logout() {
    localStorage.removeItem("loggedInUser");
    loginForm.style.display = "block";
    userInfo.style.display = "none";
}

// Verificar si hay un usuario ya autenticado
const storedUser = localStorage.getItem("loggedInUser");
if (storedUser) {
    loggedInUser.textContent = storedUser;
    loginForm.style.display = "none";
    userInfo.style.display = "block";
}

// Agregar eventos a los botones
loginButton.addEventListener("click", login);
logoutButton.addEventListener("click", logout);

const registerUsernameInput = document.getElementById("register-username");
const registerPasswordInput = document.getElementById("register-password");
const registerButton = document.getElementById("register-button");

registerButton.addEventListener("click", () => {
    const username = registerUsernameInput.value;
    const password = registerPasswordInput.value;

    // Verificar si el usuario ya existe en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert("El usuario ya existe. Por favor, elija otro nombre de usuario.");
    } else {
        // Agregar el nuevo usuario
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
        // Puedes redirigir a la página de inicio de sesión aquí si lo deseas
    }
});

const showRegisterButton = document.getElementById("show-register-form");
const registrationForm = document.getElementById("registration-form");

showRegisterButton.addEventListener("click", () => {
    registrationForm.style.display = "block";
    showRegisterButton.style.display = "none";
});