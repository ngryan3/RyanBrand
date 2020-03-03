export const checkFields = (checkout) => {
    const keys = Object.keys(checkout);
    const filteredFields = keys.filter( i => {
        return checkout[i] === ""
    });
    if (filteredFields.length !== 0) {
        alert('Please fill out the missing fields before proceeding')
    } else {
        checkCardInfo(checkout)
    }
};

export const checkCardInfo = (checkout) => {
    if (checkout.cardNum === "123456789012" && checkout.expMonth === "12" && checkout.expYear === "2020" &&
        checkout.cvv === "123")  {
        alert('Transaction was successfully. Redirecting to home page now!')
        window.location.href = "./"
    } else {
        alert('Incorrect card number. Please try again')
    }
};