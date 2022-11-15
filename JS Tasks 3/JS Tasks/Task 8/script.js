/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a, b) {
    this.a = +a;
    this.b = +b;
    this.Sum = () => this.a + this.b;
    this.Subtraction = () => this.a - this.b;
    this.Multiplication = () => this.a * this.b;
    this.Division = () => this.a / this.b;
}

let newProduct = new Calculator(10, 5);                              //"paduodu skaicius i šabloną"

console.log(newProduct);
console.log(newProduct.Sum());
console.log(newProduct.Subtraction());
console.log(newProduct.Multiplication());
console.log(newProduct.Division());