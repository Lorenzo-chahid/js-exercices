/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const buttons = document.getElementsByTagName('button'); //dans ce cas fonctionne bien
    for(let button_element of buttons){
        button_element.addEventListener('click', function(a){
        let button_element_color = this.getAttribute('id');
        document.body.style.backgroundColor = button_element_color;
      })
    }

    
    
   
})();
