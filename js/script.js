/* Bank account activities */
// while withdraw money
document.getElementById('withdraw__btn').addEventListener('click', function () {
    const withdrawAmountDigit = parseFloat(document.getElementById('withdraw').value);
    const withdrawAmountText = parseFloat(document.getElementById('withdraw__initial').innerText);
    document.getElementById('withdraw__initial').innerText = (withdrawAmountDigit + withdrawAmountText);
    document.getElementById('total__amount__initial').innerText = parseFloat(document.getElementById('total__amount__initial').innerText) - document.getElementById('withdraw').value;
    document.getElementById('withdraw').value = '';
});
// while deposite money
document.getElementById('deposite__btn').addEventListener('click', function () {
    const withdrawAmountDigit = parseFloat(document.getElementById('deposite').value);
    const withdrawAmountText = parseFloat(document.getElementById('deposite__initial').innerText);
    document.getElementById('deposite__initial').innerText = (withdrawAmountDigit + withdrawAmountText);
    document.getElementById('total__amount__initial').innerText = parseFloat(document.getElementById('total__amount__initial').innerText) + parseFloat(document.getElementById('deposite').value);
    document.getElementById('deposite').value = '';
});