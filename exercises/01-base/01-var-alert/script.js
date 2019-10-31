/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function demande(){
        const age = prompt("Quel est ton âge ? ");
        const sexe = prompt("Quel est ton sexe ? ");
        const ville = prompt("Ou habites-tu ?");
        return alert("tu as "+ age+ " , tu habites à " + ville + " et tu es un(e) " + sexe)
    }
   

    demande();

})();
