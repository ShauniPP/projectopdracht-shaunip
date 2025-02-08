import { CharacterList } from './interfaces';
import charactersData from './characters.json';  // Correcte JSON-import

const characters: CharacterList = charactersData as CharacterList;  // Zorgt voor typeveiligheid

console.log(characters);
