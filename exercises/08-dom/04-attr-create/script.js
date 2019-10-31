/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   //récupérer la balise 
   const source = document.getElementById('source');
   //récupérer la valeur de attribut data-image
   let data_image = source.dataset.image;
   //créer une balise image 
   let img = document.createElement('div');
   img.textContent = data_image;
   document.getElementById('target').appendChild(img);

   //supprimer balise source 
   source.parentNode.removeChild(source);
})();
