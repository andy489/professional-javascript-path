
const preference = "Have you heard of Java? I really love Java!"
console.log(preference.replaceAll("Java", "JavaScript"));

const preference_2 = "My most preferred languages are 1-Java, 2-Python and 3-C#";
console.log(preference_2.replaceAll(/\d-\S+/g, "JavaScript"));


const inputString = 'It is a good idea to  keep  your    Regex short and simple , right ? Hope you agree !';

function checkForTypos(str) {
    let excessiveSpaces = str.match(/\s\s+/g);
    if(excessiveSpaces !== null) {
        console.log(`Excessive spacing found between words: ${excessiveSpaces.length}`);
    }

    let spaceBeforePunctuation = str.match(/\s(\?|,|\.|!)/g);
    if (spaceBeforePunctuation !== null) {
        console.log(`Excessive spacing found before punctuation: ${spaceBeforePunctuation.length}`);
    }
}
checkForTypos(inputString);

function trimExtraSpace(str) {

    let trimmedString_1 = str.replaceAll(/\s\s+/g, ' ');

    // let trimmedString_2 = trimmedString_1.replaceAll(/\s\?/g,'?').replaceAll(/\s,/g, ',');
    let trimmedString_2 = trimmedString_1.replaceAll(/(\s)(\?|,|\.|!)/g, '$2');

    console.log(trimmedString_2);
}

trimExtraSpace(inputString);


