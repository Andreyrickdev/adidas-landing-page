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
        const imgs7 = pack7.querySelectorAll('.imgs');

        for (img of imgs1) {
            img.classList.remove('active');
        }

        for (img of imgs2) {
            img.classList.remove('active');
        }

        for (img of imgs3) {
            img.classList.remove('active');
        }

        for (img of imgs4) {
            img.classList.remove('active');
        }

        for (img of imgs5) {
            img.classList.remove('active');
        }

        for (img of imgs6) {
            img.classList.remove('active');
        }

        for (img of imgs7) {
            img.classList.remove('active');
        }

        imgs1[1].classList.add('active');
        imgs2[1].classList.add('active');
        imgs3[1].classList.add('active');
        imgs4[1].classList.add('active');
        imgs5[1].classList.add('active');
        imgs6[1].classList.add('active');
        imgs7[1].classList.add('active');

        const ulInSneakersModels = document.querySelector('.ul-in-sneakers-models');
        const liInUl = ulInSneakersModels.querySelectorAll('li');

        for (li of liInUl) {
            li.classList.remove('active');
        }

        liInUl[0].classList.add('active');

    }

    function actionBlack () {

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

        const ulImgs = document.querySelector('.ul-imgs');
        const imgsLi = ulImgs.querySelectorAll('li');

        const [pack1, pack2, pack3, pack4, pack5, pack6, pack7] = [imgsLi[0], imgsLi[1], imgsLi[2], imgsLi[3], imgsLi[4], imgsLi[5], imgsLi[6]];

        const imgs1 = pack1.querySelectorAll('.imgs');
        const imgs2 = pack2.querySelectorAll('.imgs');
        const imgs3 = pack3.querySelectorAll('.imgs');
        const imgs4 = pack4.querySelectorAll('.imgs');
        const imgs5 = pack5.querySelectorAll('.imgs');
        const imgs6 = pack6.querySelectorAll('.imgs');
        const imgs7 = pack7.querySelectorAll('.imgs');

        for (img of imgs1) {
            img.classList.remove('active');
        }

        for (img of imgs2) {
            img.classList.remove('active');
        }

        for (img of imgs3) {
            img.classList.remove('active');
        }
        
        for (img of imgs4) {
            img.classList.remove('active');
        }

        for (img of imgs5) {
            img.classList.remove('active');
        }

        for (img of imgs6) {
            img.classList.remove('active');
        }

        for (img of imgs7) {
            img.classList.remove('active');
        }

        imgs1[0].classList.add('active');
        imgs2[0].classList.add('active');
        imgs3[0].classList.add('active');
        imgs4[0].classList.add('active');
        imgs5[0].classList.add('active');
        imgs6[0].classList.add('active');
        imgs7[0].classList.add('active');

        const ulInSneakersModels = document.querySelector('.ul-in-sneakers-models');

        const liInUl = ulInSneakersModels.querySelectorAll('li');

        for (li of liInUl) {
            li.classList.remove('active');
        }

        liInUl[1].classList.add('active');
    }

    function actionPurple () {

        const circle = document.querySelector('.circle');

        circle.classList.add('purpleCircle');
        circle.classList.remove('blackCircle');
        circle.classList.remove('orangeCircle');

        const sneaker = document.querySelectorAll('.sneaker');

        for (snks of sneaker) {
            snks.classList.remove('active');
        }

        const Purplesneakers = document.querySelector('.Purplesneakers');

        Purplesneakers.classList.add('active');

        const twoSneakers = document.querySelectorAll('.two-sneakers');

        for (twoSnks of twoSneakers) {
            twoSnks.classList.remove('active');
        }

        twoSneakers[2].classList.add('active');

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