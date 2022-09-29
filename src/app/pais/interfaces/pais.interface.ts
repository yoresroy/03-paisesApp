export interface Country {
    name:         Name;
    tld:          string[];
    cca2:         string;
    ccn3:         string;
    cca3:         string;
    cioc?:        string;
    independent:  boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   { [key: string]: Currency };
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  EngClass;
    fra?: EngClass;
}

export interface EngClass {
    f: string;
    m: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: EngEnum;
    fil?: string;
    fra?: string;
    nfr?: string;
    spa?: string;
    sot?: string;
    nld?: string;
    pap?: string;
    aym?: string;
    grn?: string;
    que?: string;
    deu?: string;
    kaz?: string;
    rus?: string;
    lit?: string;
    ces?: string;
    slk?: string;
    por?: string;
    tet?: string;
    ind?: string;
    div?: string;
    ara?: string;
    zdj?: string;
    kir?: string;
    ben?: string;
    zho?: string;
    est?: string;
    ber?: string;
    mey?: string;
    bar?: string;
    fas?: string;
    aze?: string;
    uzb?: string;
    crs?: string;
    ssw?: string;
}

export enum EngEnum {
    English = "English",
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
