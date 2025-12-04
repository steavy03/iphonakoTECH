function submitImei(inputNumber) {
    const imeiInput = document.getElementById(`imei${inputNumber}`);
    const successMessage = document.getElementById(`success${inputNumber}`);
    
    // Vérifier si le champ n'est pas vide
    if (imeiInput.value.trim() === '') {
        alert('Veuillez entrer un SN/IMEI');
        return;
    }
    
    // Simulation d'envoi (à remplacer par un vrai système)
    console.log(`SN/IMEI envoyé: ${imeiInput.value}`);
    
    // Afficher le message de succès
    successMessage.style.display = 'block';
    
    // Cacher le message après 3 secondes
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    
    /* 
    // Pour un vrai envoi par email avec EmailJS:
    emailjs.send("votre_service_id", "votre_template_id", {
        imei: imeiInput.value,
        from_name: "Registre IMEI",
        to_email: "votre@email.com"
    }).then(() => {
        successMessage.style.display = 'block';
    }, (error) => {
        alert("Erreur d'envoi: " + error);
    });
    */
}

// Initialisation d'EmailJS (décommentez si vous utilisez ce service)
/*
(function() {
    emailjs.init("votre_user_id");
})();
*/