/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        alert(+document.getElementById("op-one").value + +document.getElementById("op-two").value);
       
    });











    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
       alert(+document.getElementById("op-one").value - +document.getElementById("op-two").value);
        
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        const input1 = document.getElementById("op-one").value;
        const input2 = document.getElementById("op-two").value;
        return alert(+input1  * +input2);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        const input1 = document.getElementById("op-one").value;
        const input2 = document.getElementById("op-two").value;
        return alert(+input1  / +input2);
    });
})();
