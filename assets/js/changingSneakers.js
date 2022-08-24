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

        const ulImgs = document.querySelector('.ul-imgs');
        const imgsLi = ulImgs.querySelectorAll('li');

        const [pack1, pack2, pack3, pack4, pack5, pack6, pack7] = [imgsLi[0], imgsLi[1], imgsLi[2], imgsLi[3], imgsLi[4], imgsLi[5], imgsLi[6]];

        const imgs1 = pack1.querySelectorAll('.imgs');
        const imgs2 = pack2.querySelectorAll('.imgs');
        const imgs3 = pack3.querySelectorAll('.imgs');
        const imgs4 = pack4.querySelectorAll('.imgs');
        const imgs5 = pack5.querySelectorAll('.imgs');
        const imgs6 = pack6.querySelectorAll('.imgs');
    }
}