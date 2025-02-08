import * as process from "process";
import * as fs from "fs";
import * as readline from "readline-sync";

// JSON-bestand inlezen
const filePath = "characters.json";
if (!fs.existsSync(filePath)) {
    console.log("Error: characters.json not found!");
    process.exit(1);
}

// Interfaces voor data types
interface Adres {
    id: number;
    straat: string;
    stad: string;
    postcode: string;
    land: string;
}

interface Character {
    id: number;
    naam: string;
    beschrijving: string;
    leeftijd: number;
    actief: boolean;
    geboortedatum: string;
    profielAfbeelding: string;
    rol: string;
    hobbies: string[];
    adres: Adres;
}

// JSON inlezen en casten naar Character[]
const jsonData = fs.readFileSync(filePath, "utf-8");
const characters: Character[] = JSON.parse(jsonData);

// Functie om het menu weer te geven
function showMenu(): void {
    console.log("\nWelcome to the JSON data viewer!\n");
    console.log("1. View all characters");
    console.log("2. Filter by ID");
    console.log("3. Exit");
}

// Functie om alle characters te tonen
function displayAllCharacters(): void {
    console.clear();
    console.log("All Characters:\n");
    characters.forEach(character => {
        console.log(`- ${character.naam} (ID: ${character.id})`);
    });
    readline.question("\nPress Enter to return to the menu...");
}

// Functie om op ID te filteren
function filterById(): void {
    console.clear();
    const id = readline.questionInt("Please enter the ID you want to filter by: ");

    const character = characters.find(c => c.id === id);
    if (character) {
        console.clear();
        console.log(`- ${character.naam} (ID: ${character.id})`);
        console.log(`  - Description: ${character.beschrijving}`);
        console.log(`  - Age: ${character.leeftijd}`);
        console.log(`  - Active: ${character.actief}`);
        console.log(`  - Birthdate: ${character.geboortedatum}`);
        console.log(`  - Role: ${character.rol}`);
        console.log(`  - Hobbies: ${character.hobbies.join(", ")}`);
        console.log(`  - Address: ${character.adres.straat}, ${character.adres.stad}, ${character.adres.land}`);
    } else {
        console.log("\nCharacter not found. Please try again.");
    }

    readline.question("\nPress Enter to return to the menu...");
}

// Hoofdprogramma loop
while (true) {
    console.clear();
    showMenu();
    let choice = readline.questionInt("\nPlease enter your choice: ");

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
