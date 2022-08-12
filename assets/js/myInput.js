const account = document.getElementsByClassName('account')[0];
const input = account.getElementsByTagName('input')[0];
const label = account.getElementsByTagName('label')[0];

account.addEventListener('click', function () {

    label.classList.add('active');
});