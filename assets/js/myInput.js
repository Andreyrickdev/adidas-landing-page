const account = document.getElementsByClassName('account')[0];
const input = account.getElementsByTagName('input')[0];
const label = account.getElementsByTagName('label')[0];

account.addEventListener('click', function () {

    label.classList.add('active');
});

label.addEventListener('click', function () {

    label.classList.add('active');
});

document.addEventListener('mouseup', function(e) {

    if(!label.contains(e.target) && input.value == false) {
        
    }
});