let compteur = 0;

// Fonction de création d'un nouveau contact
function createContact(nomContact, prenomContact) {
    const contactHTML = `
        <div class="contact">
        <input type ="checkbox" id="checkbox-${compteur}" hidden>
        <i class="fas fa-smile-beam"></i>
        <label for="checkbox">${nomContact} ${prenomContact}</label>
        <button onclick="supprimeContact(this.previousElementSibling.previousElementSibling, this.parentNode)" class="btn-close btn-dark">&times;</button>
        </div>    
    `

    document.querySelector('.texteDeDepart').innerHTML = "";
    document.querySelector('#listeContacts').innerHTML += contactHTML;
}

// Fonction de vérification de la longueur de l'entrée
function checkValue(val) {
    return val.length > 2;
}

// Fonction de suppression d'un contact
function supprimeContact(checkboxTag, contactTag) {
    document.querySelector('#listeContacts').removeChild(contactTag);
}

// Fonction d'écoute d'événement
document.formAddContact.addEventListener(
    'submit',
    function (e) {
        e.preventDefault();
        if (checkValue(this.nomContact.value) && checkValue(this.prenomContact.value)) {
            createContact(this.nomContact.value, this.prenomContact.value);
            compteur++;
        }
        else {
            const errorTxt = document.querySelector('.error');
            errorTxt.style.display = 'block';
            setTimeout(() => {
                errorTxt.style.display = 'none';
            }, 1500);
        }
    }
);