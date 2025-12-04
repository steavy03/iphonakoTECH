// === Import Firebase (VERSION NAVIGATEUR) ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// === CONFIG FIREBASE DE TON PROJET ===
const firebaseConfig = {
  apiKey: "AIzaSyAGyCkZWNt-bcItYZzm7eSc4oUAp79tUgA",
  authDomain: "iphonakotech.firebaseapp.com",
  projectId: "iphonakotech",
  storageBucket: "iphonakotech.firebasestorage.app",
  messagingSenderId: "1020856457922",
  appId: "1:1020856457922:web:d012346a15768b9f4c795b",
  measurementId: "G-9WCHXKMX10"
};


// === INITIALISATION FIREBASE ===
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// -------------------- LOGIN --------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                localStorage.setItem("userLogged", "true");
                window.location.href = "accueil.html"; 
            })
            .catch((error) => {
                console.log(error);
                document.getElementById("errorMessage").textContent =
                    "Identifiants incorrects !";
            });
    });
}


// -------------------- REGISTER --------------------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email_register").value;
        const pass = document.getElementById("password_register").value;

        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                alert("Compte créé avec succès !");
                window.location.href = "login.html";
            })
            .catch((error) => {
                console.log(error);
                document.getElementById("errorMessage").textContent =
                    "Erreur : email déjà utilisé ou mot de passe trop faible.";
            });
    });
}
