/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
let ajd = new Date
let test = ajd.getHours()
let new_test = ajd.getMinutes()
let final ="Il est  "+ test+ ":" + new_test
console.log(final)
console.log(test)

if(test > 18){
    let bonsoir =document.getElementById("target")
    bonsoir.textContent="Bonsoir"
}else{
    let bonsoir =document.getElementById("target")
    bonsoir.textContent="Bonjour"
   
}