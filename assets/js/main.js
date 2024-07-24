/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


//Menu Show
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

//menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        nav.Menu.classList.remove('show-menu');

    });
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scroll >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader)

/*=============== GSAP ANIMATION ===============*/
