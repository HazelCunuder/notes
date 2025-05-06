"use strict"

// Exercices javascript.info 2.4

// Exercice 1

let admin, name;

let name = "John";
let admin = name;

alert(admin);

// Exercice 2

let ourPlanetName = "Earth";

let currentUsername = "John";

// Exercice 3

const BIRTHDAY = '18.04.1982'; // This is correct --> DoB will never change

const AGE = someCode(BIRTHDAY); // This is wrong --> Age will change on page reload at Bday --> should be const age
