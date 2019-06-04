import {unaccent} from "../src";
import {DiacriticsTestValue, DiacriticsTestValues} from "./values";

describe('unaccent', () => {

    DiacriticsTestValues.forEach(({letter, sensitive, insensitive}: DiacriticsTestValue) => {
        it(`should remove accent for letter ${letter}`, () => {
            expect(unaccent(sensitive)).toEqual(insensitive);
        });
    });

});
