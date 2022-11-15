/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwners" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];

//    ---------  1 ----------------------------------------
let userWithDog = [];
function filterDogOwners() {
  for (let KeyUser in users) {
    if (users[KeyUser].hasDog == true) {
      userWithDog.push(users[KeyUser]);       //Jei users turi suni ji prideda i nauja masyva
    }
  }
  // return new Array with User with Dogs to console
  console.log(userWithDog);
}

filterDogOwners();


//    ---------  2 -----------------------------------------
let user18 = [];                            //naujas masyvas user'ems, kurie bus vyresni.
function filterAdults() {
  for (let AdultsUser in users) {
    if (users[AdultsUser].age >= 18) {
      user18.push(users[AdultsUser]);       //jei users turi 18 ar daugiau juos ikeliu i nauja masyva
    }
  }
  // return new Array with Adult User with to console
  console.log(user18);
}

filterAdults();