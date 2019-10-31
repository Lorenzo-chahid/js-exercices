/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        
        for(i=1; i< 21; i++) {
            i%2;
            if(i==0){

               let x= Math.pow(i,2);

               let exposants=[];

               alert(exposants.push(x));
               
            }

           



            
        }




























        

            // ici déclaration de mon array vide
            let x =[];

            // Boucle for pour itérer d'un nombre de 0 à 21 
            for (let i = 0; i < 21; i++) {

            // ici module sur chacun des éléments
            i %2;

            // Condition pour vérifier si le reste de mon modulo est == 0
            if(i % 2 == 0){

                // si modulo == 0 alors je crée une variable qui elle grâce à la méthode Mayh.pow fait la puissance de i (donc de 1 à 21)
                const carre = Math.pow(i,2);
                
                //ici je pousse mion élément dans mon tableau de base 
                x.push(carre);

                //enfin j'affiche ma variable
                alert(x);
            }
        }
        
    });
})();
