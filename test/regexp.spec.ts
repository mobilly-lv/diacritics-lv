import {createDiacriticsInsensitiveRegExp} from "../src";
import {DiacriticsTestValue, DiacriticsTestValues} from "./values";

describe('createDiacriticsInsensitiveRegExp', () => {

    DiacriticsTestValues.forEach(({letter, sensitive, insensitive}: DiacriticsTestValue) => {
        it(`should create diacritics-insensitive regular expression for letter ${letter}`, () => {
            expect(createDiacriticsInsensitiveRegExp(sensitive).test(insensitive)).toBeTruthy();
            expect(createDiacriticsInsensitiveRegExp(insensitive).test(sensitive)).toBeTruthy();
        });
    });

});
