export interface Adres {
    id: number;
    straat: string;
    stad: string;
    postcode: string;
    land: string;
}

export interface ExtraInfo {
    id: number;
    favorieteFruit: string;
    status: boolean;
    afbeelding: string;
    kracht: string;
    gevechtStijl: string;
}

export interface Character {
    id: number;
    naam: string;
    beschrijving: string;
    leeftijd: number;
    actief: boolean;
    geboortedatum: string;
    profielAfbeelding: string;
    schip?: "Going Merry" | "Thousand Sunny" | "Red Force";  // Optioneel
    hobbies: string[];
    extraInfo?: ExtraInfo; // Optioneel
    adres: Adres;
}

export type CharacterList = Character[];
