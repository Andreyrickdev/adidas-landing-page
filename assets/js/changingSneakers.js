function changingSneaker () {

    const btnOrange = document.querySelector('.buttonOrange');      const sneakerOrange = document.querySelectorAll('.little-sneaker')[0];
    const btnBlack = document.querySelector('.buttonBlack');        const sneakerBlack = document.querySelectorAll('.little-sneaker')[1];
    const btnPurple = document.querySelector('.buttonPurple');      const sneakerPurple = document.querySelectorAll('.little-sneaker')[2];

    btnOrange.addEventListener('click', actionOrange);              sneakerOrange.addEventListener('click', actionOrange);
}