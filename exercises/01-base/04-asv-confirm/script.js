/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function ask(){
        let age = prompt("ton age ?");
        let nom = prompt("ton nom ?");
        let ville = prompt("ville ?");
        let i = confirm(" Vous informations sont elle exactes ? Tu t'appelles :"+ nom + " tu as : "+ age + "ans, et tu habites à : " + ville)
      }
    confirmation = 0;
      
    while (confirmation == 0){
        let age = prompt("ton age ?");
        let nom = prompt("ton nom ?");
        let ville = prompt("ville ?");
        let i = confirm(" Vous informations sont elle exactes ? Tu t'appelles :"+ nom + " tu as : "+ age + "ans, et tu habites à : " + ville)
        if(i == false){
            }else if (i == true){
                confirmation = 1;
            }
        };
      




    // zagfahflaekfhaefmkae

    
    
   
   
})();


