document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
   
    // Credentials valides
    const validUsername = 'steavynash03';
    const validPassword = '123666';
   
    if (username === validUsername && password === validPassword) {
        // Redirection vers la page d'accueil
        window.location.href = 'accueil.html';
    } else {
        errorMessage.textContent = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
});