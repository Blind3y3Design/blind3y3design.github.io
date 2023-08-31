// var myElement = document.querySelector(".headroom");
// var headroom  = new Headroom(myElement);
// headroom.init();

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('mobile-menu--open');
}

document.querySelector('.mobile-menu-trigger').addEventListener("click", toggleMobileMenu);