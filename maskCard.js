let cardNumber = "AB12 3456 7890 1234";


if (cardNumber < "6") {
    let maskCard = cardNumber;

    console.log(maskCard);
}

//----------1st way----------

if (cardNumber >= "6") {
    // Select first character
    let first = cardNumber.substring(0,1);

    // Select rest card charaters and replace all numbers but the last 4
    let maskedNumbers = cardNumber.substring(1).replace(/[0-9](?=.{4})/g,"*");

    // Concatenate the masked string
    let maskCard = first.concat(maskedNumbers);

    console.log(maskCard); // Output: "AB** **** **** 1234"
}

//----------2nd way----------

if (cardNumber >= "6") {
    // Exclude 1st and last 4 digits
    let maskedNumber = cardNumber.slice(1, -4);

    // Mask all numbers from the string
    let numbersOnly = maskedNumber.replace(/[0-9]/g, "*");

    //Concatenate 1st and last 4 digits with masked numbers
    let maskedCard = cardNumber.slice(0,1).concat(numbersOnly).concat(cardNumber.slice(-4))

    console.log(maskedCard); // Output: "AB** **** **** 1234"
}