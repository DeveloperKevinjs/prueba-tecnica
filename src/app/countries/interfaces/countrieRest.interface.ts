export interface CountrieRest {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
    borders?: string[];
    gini?: { [key: string]: number };
  }
  
  export interface CapitalInfo {
    latlng: number[];
  }
  
  export interface Car {
    signs: string[];
    side: string;
  }
  
  export interface CoatOfArms {
    png?: string;
    svg?: string;
  }
  
  export interface Currencies {
    USD?: Clp;
    EUR?: Clp;
    CRC?: Clp;
    YER?: Clp;
    DOP?: Clp;
    CLP?: Clp;
  }
  
  export interface Clp {
    name: string;
    symbol: string;
  }
  
  export interface Demonyms {
    eng: Eng;
    fra: Eng;
  }
  
  export interface Eng {
    f: string;
    m: string;
  }
  
  export interface Flags {
    png: string;
    svg: string;
    alt?: string;
  }
  
  export interface Idd {
    root: string;
    suffixes: string[];
  }
  
  export interface Languages {
    eng?: string;
    spa?: string;
    ita?: string;
    ara?: string;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
  }
  
  export interface NativeName {
    eng?: Translation;
    spa?: Translation;
    ita?: Translation;
    ara?: Translation;
  }
  
  export interface Translation {
    official: string;
    common: string;
  }
  
  export interface PostalCode {
    format: string;
    regex: string;
  }
  