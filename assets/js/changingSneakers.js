const btnOrange = document.querySelector('.buttonOrange');
const btnBlack = document.querySelector('.buttonBlack');
const btnPurple = document.querySelector('.buttonPurple');

btnOrange.addEventListener('click', () => {

    const circle = document.querySelector('.circle');

    circle.classList.add('orangeCircle');
    circle.classList.remove('blackCircle');
    circle.classList.remove('purpleCircle');

    const sneaker = document.querySelectorAll('.sneaker');

    for (snks of sneaker) {
        snks.classList.remove('active');
    }

    const Orangesneakers = document.querySelector('.Orangesneakers');

    Orangesneakers.classList.add('active');

    const twoSneakers = document.querySelectorAll('.two-sneakers');

    for (twoSnks of twoSneakers) {
        twoSnks.classList.remove('active');
    }

    twoSneakers[1].classList.add('active');
});

btnBlack.addEventListener('click', () => {

    const circle = document.querySelector('.circle');

    circle.classList.add('blackCircle');
    circle.classList.remove('orangeCircle');
    circle.classList.remove('purpleCircle');

    const sneaker = document.querySelectorAll('.sneaker');

    for (snks of sneaker) {
        snks.classList.remove('active');
    }

    const Blacksneakers = document.querySelector('.Blacksneakers');

    Blacksneakers.classList.add('active');

    const twoSneakers = document.querySelectorAll('.two-sneakers');

    for (twoSnks of twoSneakers) {
        twoSnks.classList.remove('active');
    }

    twoSneakers[0].classList.add('active');
});

btnPurple.addEventListener('click', () => {

    const circle = document.querySelector('.circle');

    circle.classList.add('purpleCircle');
});