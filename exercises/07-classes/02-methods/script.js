/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    document.getElementById("run").addEventListener('click', function(){
        let flufie = new Person("FLufie", "Stalons");
        console.log(flufie)
        console.log(typeof(flufie))
        alert("Hello "+ flufie.firstName + " "+ flufie.lastName + " !")
    })
})();
