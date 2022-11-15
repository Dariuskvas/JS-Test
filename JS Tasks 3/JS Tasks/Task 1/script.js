/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */


document.getElementById("submit-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const inputkg = document.querySelector("input");
    let svarai = "Svarai (lb):  " + inputkg.value * 2.2046 + "<br/>";
    let gramai = "Gramai (g):   " + inputkg.value * 1000 + "<br/>";
    let uncijos = "Uncijos (oz): " + inputkg.value * 35.274;

    let outputWeight = document.getElementById("output");
    outputWeight.setAttribute("id", "search");
    outputWeight.innerHTML = svarai + gramai + uncijos
})
