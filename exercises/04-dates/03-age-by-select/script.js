/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let dateCal = new Date;
    let jourD = dateCal.getDay()
    let moisD = dateCal.getMonth()
    let anneeD = dateCal.getFullYear()
    document.getElementById('run').addEventListener('click', function(){
        let jour = document.getElementById("dob-day").value;
        let mois = document.getElementById("dob-month").value;
        let annee = document.getElementById("dob-year").value;
        let numJour = parseInt(jour);
        let numMois = parseInt(mois);
        let numAnnee = parseInt(annee);
        if(anneeD > annee){
            let age = anneeD - annee;
            let ageM =  moisD- mois;
            alert("Vous avez : "+ age+ " ans," + ageM +" mois,"+ jour +" jours !")
        }
    })
    
    console.log(moisD)
    console.log(anneeD)

})();
