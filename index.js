"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var fs = require("fs");
var readline = require("readline-sync");
// JSON-bestand inlezen
var filePath = "characters.json";
if (!fs.existsSync(filePath)) {
    console.log("Error: characters.json not found!");
    process.exit(1);
}
// JSON inlezen en casten naar Character[]
var jsonData = fs.readFileSync(filePath, "utf-8");
var characters = JSON.parse(jsonData);
// Functie om het menu weer te geven
function showMenu() {
    console.log("\nWelcome to the JSON data viewer!\n");
    console.log("1. View all characters");
    console.log("2. Filter by ID");
    console.log("3. Exit");
}
// Functie om alle characters te tonen
function displayAllCharacters() {
    console.clear();
    console.log("All Characters:\n");
    characters.forEach(function (character) {
        console.log("- ".concat(character.naam, " (ID: ").concat(character.id, ")"));
    });
    readline.question("\nPress Enter to return to the menu...");
}
// Functie om op ID te filteren
function filterById() {
    console.clear();
    var id = readline.questionInt("Please enter the ID you want to filter by: ");
    var character = characters.find(function (c) { return c.id === id; });
    if (character) {
        console.clear();
        console.log("- ".concat(character.naam, " (ID: ").concat(character.id, ")"));
        console.log("  - Description: ".concat(character.beschrijving));
        console.log("  - Age: ".concat(character.leeftijd));
        console.log("  - Active: ".concat(character.actief));
        console.log("  - Birthdate: ".concat(character.geboortedatum));
        console.log("  - Role: ".concat(character.rol));
        console.log("  - Hobbies: ".concat(character.hobbies.join(", ")));
        console.log("  - Address: ".concat(character.adres.straat, ", ").concat(character.adres.stad, ", ").concat(character.adres.land));
    }
    else {
        console.log("\nCharacter not found. Please try again.");
    }
    readline.question("\nPress Enter to return to the menu...");
}
// Hoofdprogramma loop
while (true) {
    console.clear();
    showMenu();
    var choice = readline.questionInt("\nPlease enter your choice: ");
    switch (choice) {
        case 1:
            displayAllCharacters();
            break;
        case 2:
            filterById();
            break;
        case 3:
            console.log("\nExiting program...");
            process.exit(0);
        default:
            console.log("\nInvalid choice. Please try again.");
    }
}
