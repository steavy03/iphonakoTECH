document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Animation de l'image flottante
    const floatingImage = document.querySelector('.floating');
    if (floatingImage) {
        // L'animation est gérée par CSS
    }

   
    });


// Sélectionner l'icône du menu burger et le menu
const menubar = document.querySelector('.menubar');
const menu = document.querySelector('.menu');

// Ajouter un écouteur d'événement pour le clic sur l'icône
menubar.addEventListener('click', () => {
    // Basculer la classe 'active' sur le menu
    menu.classList.toggle('active');
});