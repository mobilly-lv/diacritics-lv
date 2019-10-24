# Utility functions to handle Latvian letters with accents

This library will help you to:
- create diacritics-insensitive regular expressions with `createDiacriticsInsensitiveRegExp`
- remove accents from Latvian texts with `unaccent`

## Possible use cases

### Running diacritics-insensitive database queries

*Goal:* Finding accented text by unaccented user input, e.g. `Raiņa bulvāris` database entry by `Raina bulvaris` user input

#### SQLite
SQLite supports neither diacritics-insensitive, neither regular expression search by default.

*Solution:*
Use `unaccent` utility function to create a separate column to store normalized (unaccented) text value and use it to perform queries.

#### MongoDB

*Disclaimer:*
MongoDB comes with a `text` index, that allows running diacritics-insensitive `$text` queries.
Unfortunately you can't combine `text` index with `2dsphere`. In order to make diacritics-insensitive search still possible, the regular expression should be used.

MongoDB supports querying by a regular expression, like:
```
Address.find({ street: /Raina bulvaris/ })
```

In order enable diacritics-insensitive search and to make `Raiņa bulvāris` found, the diacritics-insensitive regular expression should be created using `createDiacriticsInsensitiveRegExp`:
```
Address.find({ street: createDiacriticsInsensitiveRegExp('Raina bulvaris') })
```
This will result in the following regular expression being queried:
```
Address.find({ street: /(?:R)(?:a|[Āā])(?:i|[īĪ])(?:n|[Ņņ])(?:a|[Āā])(?: )(?:b)(?:u|[Ūū])(?:l|[Ļļ])(?:v)(?:a|[Āā])(?:r)(?:i|[īĪ])(?:s|[Šš])/ })
```
