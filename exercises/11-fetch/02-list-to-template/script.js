/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    run.addEventListener("click", () => {    
        
        fetch('http://localhost:3000/heroes')
            .then(function(reponse) {
                return reponse.json();
            })
            .then(function(data) {
                const target = document.getElementById("target");
                let i = 0;
                data.forEach( data => {
                    i++
                    let template = document.getElementById("tpl-hero").cloneNode(true);
                    let clone2= document.importNode(template.content, true);
                    target.appendChild(clone2);
                    
                   
                    document.querySelector(`.hero:nth-child(0n+${i})>.title>strong.name`).innerHTML  = data.name;
                    document.querySelector(`.hero:nth-child(0n+${i})>.title>em.alter-ego`).innerHTML = data.alterEgo;
                    document.querySelector(`.hero:nth-child(0n+${i})>p.powers`).innerHTML = data.abilities;
                })
            });
    })
    
        
})(); 