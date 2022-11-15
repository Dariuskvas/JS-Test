/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const printOutput = document.getElementById("output")


document.getElementById("btn").addEventListener("click", () => {
    printOutput.innerHTML = "";
    fetchData();
})

async function fetchData() {
    try {
        let response = await fetch(ENDPOINT);
        if (response.ok) {
            let users = await response.json();
            atvaizduoti(users);
        }
    } catch (error) {
        console.error("error");
    }
}

function atvaizduoti(users) {
    users.forEach(user => {   
    
    let avatarDiv = document.createElement("div");
    avatarDiv.setAttribute("class", "avarai");

    let pic = document.createElement("img");
    pic.src = user.avatar_url;

    avatarDiv.append(user.login, pic);
    printOutput.append(avatarDiv);
})
};
