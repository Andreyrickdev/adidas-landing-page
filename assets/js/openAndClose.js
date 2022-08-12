const hamburgButton = document.getElementsByClassName('hamburger-li')[0];
const searchButton = document.getElementsByClassName('buttonSearch')[0];
const searchUser = document.getElementsByClassName('user-li')[0];
const favoriteButton = document.getElementsByClassName('heart-li')[0];
const favoriteButtonLeft = document.getElementsByClassName('favorite-left')[0];
const shoppingButton = document.getElementsByClassName('shopping-li')[0];

function openOrClose() {

    const menu = document.getElementsByClassName('nav-mobile')[0];
    const search = document.getElementsByClassName('search-form')[0];
    const user = document.getElementsByClassName('login-form')[0];
    const triangle = document.getElementsByClassName('close')[0];
    const favorite = document.getElementsByClassName('favorite-form')[0];
    const shopping = document.getElementsByClassName('shopping-form')[0];


    hamburgButton.addEventListener('click', () => {
        menu.classList.toggle('active');
        search.classList.remove('active');
        user.classList.remove('active');
        triangle.classList.remove('active');
        favorite.classList.remove('active');
        shopping.classList.remove('active');
    });

    searchButton.addEventListener('click', () => {
        search.classList.toggle('active');
        menu.classList.remove('active');
        user.classList.remove('active');
        triangle.classList.remove('active');
        favorite.classList.remove('active');
        shopping.classList.remove('active');
    });

    searchUser.addEventListener('click', () => {
        
    });
}

openOrClose();