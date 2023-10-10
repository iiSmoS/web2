const messageDiv = document.getElementById('message');
const compteur = document.getElementById('compteur');

window.addEventListener("click",inc);

var message = "";

function inc() {

    var counter = compteur.innerHTML;
    
    counter++;

    if(counter >= 5 && counter <= 9) {
        message = 'Bravo, bel échauffement !';
    }
    else if(counter >= 10) {
        message = 'Vous êtes passé maître en l"art du clic !';
    }


    messageDiv.textContent = message;
    compteur.textContent = counter;
    
}

