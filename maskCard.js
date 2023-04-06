function maskCard() {

    // Pick up card number
    let cardNumberInput = document.querySelector("#input");
    let cardNumber = cardNumberInput.value;

    if (cardNumber.length > 6 ) {
        // Select first character
        let first = cardNumber.substring(0,1);

        // Select rest card charaters and replace all numbers but the last 4
        let maskedNumbers = cardNumber.substring(1).replace(/[0-9](?=.{4})/g,"*");

        // Concatenate the masked string
        let maskedCard = first.concat(maskedNumbers);

        // Export masked card
        cardNumberInput.value = maskedCard;
        console.log(maskedCard);
    }
    
    // If the number is short
    else {
        cardNumberInput.value = cardNumber;
    }

   // ----------2nd way----------

   // if (cardNumber.length > 6) {
   //     // Exclude 1st and last 4 digits
   //     let maskedNumber = cardNumber.slice(1, -4);

   //     // Mask all numbers from the string
   //     let numbersOnly = maskedNumber.replace(/[0-9]/g, "*");

   //     //Concatenate 1st and last 4 digits with masked numbers
   //     let maskedCard = cardNumber.slice(0,1).concat(numbersOnly).concat(cardNumber.slice(-4))

   //     exportCard.textContent = maskedCard;
   // }
}

function Reset () {
    let form = document.querySelector("form");
    form.reset();
}