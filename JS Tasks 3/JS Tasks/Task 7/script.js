/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// Nesu tikras ar suprantu "grąžins", jei gerai supratau, tai gražinu( kitaip išvedu) i console

for (let key in audi) {
  console.log(key);
}




