export interface DiacriticsTestValue {
    letter: string;
    sensitive: string;
    insensitive: string;
}

export const DiacriticsTestValues: DiacriticsTestValue[] = [
    {
        letter: 'Ā',
        sensitive: 'Ābele',
        insensitive: 'Abele'
    },
    {
        letter: 'ā',
        sensitive: 'akācija',
        insensitive: 'akacija'
    },
    {
        letter: 'Ē',
        sensitive: 'Ēģipte',
        insensitive: 'Egipte'
    },
    {
        letter: 'ē',
        sensitive: 'pētījums',
        insensitive: 'petijums'
    },    {
        letter: 'Ī',
        sensitive: 'Īrija',
        insensitive: 'Irija'
    },
    {
        letter: 'ī',
        sensitive: 'valodniecība',
        insensitive: 'valodnieciba'
    },
    {
        letter: 'Č',
        sensitive: 'Čakste',
        insensitive: 'Cakste'
    },
    {
        letter: 'č',
        sensitive: 'čeks',
        insensitive: 'ceks'
    },
    {
        letter: 'Ģ',
        sensitive: 'Gerbonis',
        insensitive: 'Gerbonis',
    },
    {
        letter: 'ģ',
        sensitive: 'maģistrs',
        insensitive: 'magistrs',
    },
    {
        letter: 'Ķ',
        sensitive: 'Ķišezers',
        insensitive: 'Kisezers',
    },
    {
        letter: 'ķ',
        sensitive: 'ķirbis',
        insensitive: 'kirbis',
    },
    {
        letter: 'Ļ',
        sensitive: 'Ļena',
        insensitive: 'Lena',
    },
    {
        letter: 'ļ',
        sensitive: 'ceļš',
        insensitive: 'cels',
    },
    {
        letter: 'Ņ',
        sensitive: 'Ņašķis',
        insensitive: 'Naskis',
    },
    {
        letter: 'ņ',
        sensitive: 'ņ',
        insensitive: 'n',
    },
    {
        letter: 'Š',
        sensitive: 'Šmērlis',
        insensitive: 'Smerlis',
    },
    {
        letter: 'š',
        sensitive: 'šampanietis',
        insensitive: 'sampanietis',
    },
    {
        letter: 'Ū',
        sensitive: 'Ūnijas',
        insensitive: 'Unijas',
    },
    {
        letter: 'ū',
        sensitive: 'ūdens',
        insensitive: 'udens',
    },
    {
        letter: 'Ž',
        sensitive: 'Žagata',
        insensitive: 'Zagata',
    },
    {
        letter: 'ž',
        sensitive: 'Baložu',
        insensitive: 'Balozu',
    },
];
