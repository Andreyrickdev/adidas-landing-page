function changingSneaker () {

    const btnOrange = document.querySelector('.buttonOrange');      const sneakerOrange = document.querySelectorAll('.little-sneaker')[0];
    const btnBlack = document.querySelector('.buttonBlack');        const sneakerBlack = document.querySelectorAll('.little-sneaker')[1];
    const btnPurple = document.querySelector('.buttonPurple');      const sneakerPurple = document.querySelectorAll('.little-sneaker')[2];

    btnOrange.addEventListener('click', actionOrange);              sneakerOrange.addEventListener('click', actionOrange);
    btnBlack.addEventListener('click', actionBlack);                sneakerBlack.addEventListener('click', actionBlack);
    btnPurple.addEventListener('click', actionPurple);              sneakerPurple.addEventListener('click', actionPurple);

    function actionOrange () {

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

    }
}