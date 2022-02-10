/* login form segment */
document.getElementById('signup_here').style.cursor = 'pointer';
document.getElementById('signup_here').addEventListener('click', function(){
    window.open('signup.html', "DescriptiveWindowName",
    "left=100,top=100,width=1030,height=700");
});

/* go to bank account */
const goToBank = document.getElementById('go__to__bank');
goToBank.addEventListener('click', function(){
    window.open('banking.html', "DescriptiveWindowName", "left=0, top=0, width=1920, height=1080");
});