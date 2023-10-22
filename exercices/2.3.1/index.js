const formulaire = document.getElementById("formulaire");
const souhaitInput = document.getElementById("souhaitInput");
const resultat = document.getElementById("resultat");
const resultText = document.getElementById("resultatText");

formulaire.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    
    resultText.textContent = souhaitInput.value;
        

    formulaire.style.display = "none";
    resultat.style.display = "block";
});