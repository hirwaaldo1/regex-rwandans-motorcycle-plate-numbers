# Regex for Rwandans motorcycle(moto) plate numbers

This is the regex for validating Rwandan motorcycle (moto) plate numbers, which can be used for all moto plate number validations.

## Usage

Use this regular expression to validate a plate number input string in Rwanda in your code. The regular expression can be used in any programming language or text editor that supports regex.

## Regular Expression

The regular expression is: `/^(r|R)[a-zA-Z] ?\d{3}[a-zA-Z]$/`

## Explanation

- `/^`: This symbol matches the start of a string. In the regex pattern, it indicates that the string being matched should start with the pattern that follows it.
- `(r|R)`: This section specifies that the first character of the plate number should be either "r" or "R".
- `[a-zA-Z]`: This part matches any alphabetical character in either uppercase or lowercase. It is used to match the second character of the plate number.
- `?`: This optional symbol matches a space character. It is used to allow for an optional space between the second and third characters of the plate number.
- `\d{3}`: This section matches exactly three digits (0-9) in sequence. It is used to match the third, fourth, and fifth characters of the plate number.
- `[a-zA-Z]`: This part matches any alphabetical character in either uppercase or lowercase. It is used to match the sixth character of the plate number.
- `$`: This symbol matches the end of a string. In the regex pattern, it indicates that the string being matched should end with the pattern that precedes it.

## References

Here are some resources that were used to create and test this regular expression:

- [Rwandan plate numbers - Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Rwanda)
- [Regular Expressions - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
