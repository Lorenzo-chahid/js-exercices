/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let ajd = new Date
    let test = ajd.getHours()
    let new_test = ajd.getMinutes()
    let final ="Il est  "+ test+ ":" + new_test
    console.log(final)

    let bonsoir =document.getElementById("target")
    if(test == 17 && new_test > 29){
        bonsoir.textContent="Bonsoir"
    }else if( test == 17 && new_test < 29){
        
        bonsoir.textContent="Bonjour"
    }else{
        bonsoir.textContent="Bonjour"
    }
})();
