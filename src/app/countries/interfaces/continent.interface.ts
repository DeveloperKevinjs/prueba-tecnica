export interface ContinentResponse {
    continents: Continent[];
}

export interface Continent{
    code: string;
    name: string;
    selected: boolean;
}