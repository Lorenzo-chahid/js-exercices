/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function Person(firstName, lastName, age, city, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.country = country;
      }
    document.getElementById('run').addEventListener('click',function(){
        const listInfo =[
            {
                lastname: "Jean",
                firstname: "Dupont",
                age: 48,
                city: "Paris",
                country: "France",
            }
        ]
        let new_personne = new Person("Jean", "Dupont", 48, "Paris", "France");
        console.log(new_personne);
        for(element of listInfo){
            console.log(element)
        }
        
    })
})();
