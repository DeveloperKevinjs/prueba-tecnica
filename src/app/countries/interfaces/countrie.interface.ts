

export interface CountriesResponse {
    countries: Countrie[];
}

export interface Countrie{
    code: string;
    name: string;
    capital:string;
    continent:Continent;
    languages:Languages[];
    currency:string;
    states:states[];
    imageUrl?: string;
}

export interface Continent{
    name:string;
}

export interface Languages{
    name:string;
}

export interface states{
    name:string;
}