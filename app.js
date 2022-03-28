function calcul(){
let longueur = parseFloat(document.getElementById("longueur").value);
let largeur = parseFloat(document.getElementById("largeur").value);
let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    document.getElementById('resultat').value = longueur*largeur+" m2";
    if(isNaN(longueur) || isNaN(largeur)){
        document.getElementById('resultat').value = "Veuillez saisir des nombres"
    }
});
}