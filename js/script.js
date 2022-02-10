/* Bank account activities */
function creditAction(inputId, amountIndicator, totalAmount, exactOperation) {
    const amountDigit = parseFloat(document.getElementById(inputId).value);
    const amountText = parseFloat(document.getElementById(amountIndicator).innerText);
    document.getElementById(amountIndicator).innerText = (amountDigit + amountText);
    if (exactOperation == '+') {
        document.getElementById(totalAmount).innerText = parseFloat(document.getElementById(totalAmount).innerText) + parseFloat(document.getElementById(inputId).value);
    }
    else if (exactOperation == '-') {
        document.getElementById(totalAmount).innerText = parseFloat(document.getElementById(totalAmount).innerText) - parseFloat(document.getElementById(inputId).value);
    }
    document.getElementById(inputId).value = '';
}

/* while withdraw money */
document.getElementById('withdraw__btn').addEventListener('click', function () {
    // const withdrawAmountDigit = parseFloat(document.getElementById('withdraw').value);
    // const withdrawAmountText = parseFloat(document.getElementById('withdraw__initial').innerText);
    // document.getElementById('withdraw__initial').innerText = (withdrawAmountDigit + withdrawAmountText);
    // document.getElementById('total__amount__initial').innerText = parseFloat(document.getElementById('total__amount__initial').innerText) - document.getElementById('withdraw').value;
    // document.getElementById('withdraw').value = '';

    creditAction('withdraw', 'withdraw__initial', 'total__amount__initial', '-');
});

/* while deposite money */
document.getElementById('deposite__btn').addEventListener('click', function () {
    // const depositeAmountDigit = parseFloat(document.getElementById('deposite').value);
    // const depositeAmountText = parseFloat(document.getElementById('deposite__initial').innerText);
    // document.getElementById('deposite__initial').innerText = (depositeAmountDigit + depositeAmountText);
    // document.getElementById('total__amount__initial').innerText = parseFloat(document.getElementById('total__amount__initial').innerText) + parseFloat(document.getElementById('deposite').value);
    // document.getElementById('deposite').value = '';

    creditAction('deposite', 'deposite__initial', 'total__amount__initial', '+');
});