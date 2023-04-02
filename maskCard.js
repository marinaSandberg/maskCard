function maskCard() {
    let cardNumber = document.querySelector("input").value;
    let exportCard = document.querySelector("#returnCard");

    if (cardNumber.length < 6 ) {
        exportCard.textContent = cardNumber;
        return cardNumber = " ";
    }

    //----------1st way----------

    else if (cardNumber.length >= 6 ) {
        // Select first character
        let first = cardNumber.substring(0,1);

        // Select rest card charaters and replace all numbers but the last 4
        let maskedNumbers = cardNumber.substring(1).replace(/[0-9](?=.{4})/g,"*");

        // Concatenate the masked string
        let maskCard = first.concat(maskedNumbers);

        exportCard.textContent = maskCard;
        return cardNumber = " ";
    }

    //----------2nd way----------

    // if (cardNumber >= "6") {
    //     // Exclude 1st and last 4 digits
    //     let maskedNumber = cardNumber.slice(1, -4);

    //     // Mask all numbers from the string
    //     let numbersOnly = maskedNumber.replace(/[0-9]/g, "*");

    //     //Concatenate 1st and last 4 digits with masked numbers
    //     let maskedCard = cardNumber.slice(0,1).concat(numbersOnly).concat(cardNumber.slice(-4))

    //     console.log(maskedCard); // Output: "AB** **** **** 1234"
    // }
}