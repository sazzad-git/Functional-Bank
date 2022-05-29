// handle deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    functionalBank('deposit')
});

// handle withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    functionalBank('withdraw')
})

function functionalBank(eventId) {
    // update  field
    const functionalTotal = document.getElementById(`${eventId}-total`);
    const functionalDepositText = functionalTotal.innerText;
    const functionalDepositAmount = parseFloat(functionalDepositText);

    // input Field value
    const funtionalInput = document.getElementById(`${eventId}-input`);
    const newFunctionalAmountText = funtionalInput.value;

    //update account balance
    if (funtionalInput.value !== "") {
        if (newFunctionalAmountText.length !== 0) {
            const newFunctionalAmount = parseFloat(newFunctionalAmountText);
            const balanceTotal = document.getElementById('balance-total');
            const balanceTotalText = balanceTotal.innerText;
            const previousBalanceTotal = parseFloat(balanceTotalText);
            if (newFunctionalAmountText > 0) {

                if (eventId === 'deposit') {
                    functionalTotal.innerText = functionalDepositAmount + newFunctionalAmount;
                    balanceTotal.innerText = previousBalanceTotal + newFunctionalAmount;
                }
                // update account balaance 
                else if (eventId === 'withdraw' && newFunctionalAmountText <= previousBalanceTotal) {
                    functionalTotal.innerText = functionalDepositAmount + newFunctionalAmount;
                    balanceTotal.innerText = previousBalanceTotal - newFunctionalAmount;
                }
                else {
                    alert('You have not this amount of money!! Please enter lower amount of money')
                }
            }
            else {
                alert('Please enter a valid number')
            }
        }
    }
    else {
        alert('Please enter a number')
    }

    // clear the deposit input field
    funtionalInput.value = '';
}