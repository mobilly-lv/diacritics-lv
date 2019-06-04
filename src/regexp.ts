import {LatvianUnicodeAccentsMap} from "./alphabet";
import {unaccent} from "./unaccent";

export function createDiacriticsInsensitiveRegExp(text: string, flags?: string): RegExp {
    let pattern = '';
    for (const letter of unaccent(text)) {
        const accents = LatvianUnicodeAccentsMap[letter.toLowerCase()];
        if (accents) {
            pattern += `(?:${letter}|[${accents.join('')}])`;
        } else {
            pattern += `(?:${letter})`;
        }
    }
    return new RegExp(pattern, flags);
}
