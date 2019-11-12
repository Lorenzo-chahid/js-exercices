/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    run.addEventListener("click", e => {    
        
        fetch('http://localhost:3000/heroes')
            .then(function(reponse) {
                return reponse.json();
            })
            .then(function(data) {
                let target = document.getElementById("hero-id").value;
                let targetNumber = +target
                const targetI = document.getElementById("target");
    

                

                let i = 0;
                data.forEach( data => {
                    console.log(targetNumber)
                    i++
                    let template = document.getElementById("tpl-hero").cloneNode(true);
                    let clone2= document.importNode(template.content, true);
                    targetI.appendChild(clone2);
                    
                   
                    document.querySelector(`.hero:nth-child(0n+${targetNumber})>.title>strong.name`).innerHTML  = data.name;
                    document.querySelector(`.hero:nth-child(0n+${targetNumber})>.title>em.alter-ego`).innerHTML = data.alterEgo;
                    document.querySelector(`.hero:nth-child(0n+${targetNumber})>p.powers`).innerHTML = data.abilities;
                })
            });
    })
})();
