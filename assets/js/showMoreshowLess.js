function showMoreOrLess () {

    const buttonShow = document.getElementsByClassName('showMoreOrLess')[0];
    const hide = document.getElementsByClassName('hide');
    const photosSneakers = document.getElementsByClassName('photos-sneaker')[0];
    const ulSelected = photosSneakers.getElementsByTagName('ul')[0];

    buttonShow.addEventListener('click', () => {

        ulSelected.classList.toggle('active');
        
    });
}