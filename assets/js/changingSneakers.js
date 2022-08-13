const btnOrange = document.querySelector('.buttonOrange');
const btnBlack = document.querySelector('.buttonBlack');
const btnPurple = document.querySelector('.buttonPurple');

btnOrange.addEventListener('click', () => {

    const circle = document.querySelector('.circle');

    circle.classList.add('orangeCircle');
    circle.classList.remove('blackCircle');
    circle.classList.remove('purpleCircle');
});