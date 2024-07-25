/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


//Menu Show
if (navToogle) {
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//menu Hidden
if (navClose) {
    navClose.addEventListener('click', () =>{
        nav.Menu.classList.remove('show-menu')

    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')

}
window.addEventListener('scroll', shadowHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-1', {duration: 2, y: -100})

let tl1 = gsap.timeline() 
    tl1.from('.home__img-2', { duration: 1, x: -400, y: -50, rotation: 32, scale: .5 })
    .to('.home__img-2', { duration: 1, rotation: 15, scale: 1.2})
    .to('.home__img-2', { duration: 1, rotation: 0, scale: 1 })

let tl2 = gsap.timeline()
    tl2.from('.home__img-3', {duration: 1, x: 50, y: -50, rotation: 30})
    .to('.home__img-3', {duration: 5, rotation: 360 })

gsap.from('.home__img-4', {duration: 5, y: -100, scale: 1.3 })
gsap.from('.home__img-5', {duration: 3, y: 100 })
    