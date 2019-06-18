export enum LatvianLettersHavingAccents {
    A = 'a',
    E = 'e',
    I = 'i',
    U = 'u',
    C = 'c',
    G = 'g',
    K = 'k',
    L = 'l',
    N = 'n',
    S = 's',
    Z = 'z',
}

export const LatvianUnicodeAccentsMap: {[letter: string ]: string[]} = {
    'a': ['\u0100', '\u0101'],
    'e': ['\u0112', '\u0113'],
    'i': ['\u012B', '\u012A'],
    'u': ['\u016A', '\u016B'],
    'c': ['\u010C', '\u010D'],
    'g': ['\u0122', '\u0123'],
    'k': ['\u0136', '\u0137'],
    'l': ['\u013B', '\u013C'],
    'n': ['\u0145', '\u0146'],
    's': ['\u0160', '\u0161'],
    'z': ['\u017D', '\u017E'],
};

export const LatvianAccentsReplacementMap: {[letter: string]: string} = {
    'Ā': 'A',
    'ā': 'a',
    'Ē': 'E',
    'ē': 'e',
    'Ī': 'I',
    'ī': 'i',
    'Ū': 'U',
    'ū': 'u',
    'Č': 'C',
    'č': 'c',
    'Ģ': 'G',
    'ģ': 'g',
    'Ķ': 'K',
    'ķ': 'k',
    'Ļ': 'L',
    'ļ': 'l',
    'Ņ': 'N',
    'ņ': 'n',
    'Š': 'S',
    'š': 's',
    'Ž': 'Z',
    'ž': 'z',
};
