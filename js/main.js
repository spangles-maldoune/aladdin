window.onload = function () {
   const burgerMenuBtn = document.querySelector('.burger-menu__button');
   const burgerMenu = document.querySelector('.burger-menu');
   const burgerMenuCloseBtn = document.querySelector('.burger-menu__btn-area');

   burgerMenuBtn.addEventListener('click', showMenu);
   burgerMenuCloseBtn.addEventListener('click', hideMenu);

   function showMenu() {
      burgerMenu.classList.add('active');
   }

   function hideMenu() {
      burgerMenu.classList.remove('active');
   }
}