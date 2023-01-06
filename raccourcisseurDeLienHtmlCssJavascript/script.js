let error = document.querySelector ('.error_message');
let longLink = document.querySelector('.long_Link');
let short = document.querySelector('.result');

function shortLinkFunct(){
    // vérification input
    if (!longLink.value == "") {
        //vider l' erreur
        error.innerHTML = "";
        //connection API
        let url = `https://api.shrtco.de/v2/shorten?url=${longLink.value}`;
        fetch(url)
        .then(response => response.json() )
        .then(data => short.innerHTML = data.result.short_link);
        // afficher le résultat
        short.style.display ="block";
        if (short.innerHTML.length == 0) {
            short.innerHTML="lien non valide";

            
        }
    }else{
        //error
        error.innerHTML ="Veuillez remplir le champ";
        short.style.display = "none";


 }
}