import {LatvianAccentsReplacementMap} from "./alphabet";

export function unaccent(text: string): string {
    return text.replace(/[^\w ]/g, (char: string) => LatvianAccentsReplacementMap[char] || char);
}
