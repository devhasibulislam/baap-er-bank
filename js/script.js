/* signup form segemnt */
// document.getElementById('login_here').style.cursor = 'pointer';
// document.getElementById('login_here').addEventListener('click', function(){
//     window.open('index.html', "DescriptiveWindowName",
//     "left=100,top=100,width=800,height=900");
// });

/* login form segment */
// document.getElementById('signup_here').style.cursor = 'pointer';
// document.getElementById('signup_here').addEventListener('click', function(){
//     window.open('signup.html', "DescriptiveWindowName",
//     "left=100,top=100,width=1030,height=700");
// });

/* go to bank account */
const goToBank = document.getElementById('go__to__bank');
goToBank.addEventListener('click', function(){
    window.open('banking.html');
});

console.log('Hello JS');

/* login validate */

/* Bank account activities */
// document.getElementById('withdraw__btn').addEventListener('click', function(){
//     const withdrawAmountDigit = document.getElementById('withdraw').value;
//     const withdrawAmountText = parseFloat(document.getElementById('withdraw__initial').innerText);
//     withdrawAmountText += withdrawAmountDigit;
//     console.log('Hello JS');
// });