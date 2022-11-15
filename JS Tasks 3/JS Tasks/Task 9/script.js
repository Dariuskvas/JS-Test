/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(name, direktorius, budget) {
        this.title = name;
        this.director = direktorius;
        this.budget = +budget;
    }
    wasExpensive() {
        return this.budget > 0 ? true : false;
    }
}

let filmas = new Movie("Nasrai", "Spilbergas", 10000000);
console.log(filmas);
console.log(filmas.wasExpensive());