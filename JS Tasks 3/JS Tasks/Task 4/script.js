/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const printOutput = document.getElementById("output");

// printOutput.innerHTML = "";
fetchData();

async function fetchData() {
    try {
        let response = await fetch(ENDPOINT);
        if (response.ok) {
            let cars = await response.json();
            atvaizduoti(cars);
        }
    } catch (error) {
        console.error("error");
    }
}

function atvaizduoti(cars) {
    cars.forEach(car => {

        let carDiv = document.createElement("div");
        carDiv.setAttribute("class", "masinos");
        carDiv.innerText = car.brand;
        let ulModel = document.createElement("ul");

        let listcar = document.createElement("li");
        listcar.setAttribute("id", "a");


        for (let i = 0; i < car.models.length; i++) {
            let listcar = document.createElement("li");
            listcar.innerText = car.models[i];
            ulModel.append(listcar);

        }
        ulModel.append(listcar);
        carDiv.append(ulModel);
        printOutput.append(carDiv);
    })
};


