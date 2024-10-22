const items = document.querySelectorAll('#aside li');
const itemsBurger = document.querySelectorAll('#aside-burger li');
items.forEach((item, index) => {
    item.addEventListener('click', function() {
        items.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
itemsBurger.forEach((item, index) => {
    item.addEventListener('click', function() {
        itemsBurger.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

const burgerMenu = document.querySelector('#burger-menu');
const burgerDisplay = document.querySelector('#burger-display');
const closeIcon = document.querySelector('#close-icon');
burgerMenu.addEventListener('click', function() {
    burgerDisplay.classList.add('active');
})
closeIcon.addEventListener('click', function() {
    itemsBurger.forEach((item, index) => {
        itemsBurger.forEach(i => i.classList.remove('active'));
    });
    burgerDisplay.classList.remove('active');
})
