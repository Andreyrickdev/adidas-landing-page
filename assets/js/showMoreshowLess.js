function showMoreOrLess () {

    const buttonShow = document.getElementsByClassName('showMoreOrLess')[0];
    const hide = document.getElementsByClassName('hide');
    const photosSneakers = document.getElementsByClassName('photos-sneaker')[0];
    const ulSelected = photosSneakers.getElementsByTagName('ul')[0];

    buttonShow.addEventListener('click', () => {

        ulSelected.classList.toggle('active');

        for (i of hide) {
            i.classList.toggle('active');
        }
    
        if (buttonShow.id == "value1") {
            buttonShow.id = "value2";
            buttonShow.innerHTML = `Show less <i style="font-size: 16px;" class="fa-solid fa-angle-up active"></i>`;
        } else {
            buttonShow.id = "value1";
        }

    });
}