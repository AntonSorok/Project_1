// const backgroundMenu = document.querySelector('.backgroundMenu')
// const menuOpen = document.querySelector('.menu-close')
// const menuClose = document.querySelector('.menu-open')
//
// menuOpen.addEventListener('click', (e) => {
//     e.preventDefault();
//
// backgroundMenu.classList.toggle('active')
// })
//
// menuClose.addEventListener('click', (e) => {
//     e.preventDefault();
//     backgroundMenu.classList.toggle('active')
// })
// const headerAnchor = document.getElementById("header");
// const introAnchor = document.getElementById("intro");
// const galleryAnchor = document.getElementById("gallery");
// const testimonialsAnchor = document.getElementById("testimonials");
// const contactsAnchor = document.getElementById("contacts");

const burger = document.querySelector('.nav__burger')
const menuLinks = document.querySelectorAll('.overlay__list a')

burger.addEventListener('click', (e) => {
    e.preventDefault()
    const isOpen = document.body.classList.toggle('menu-open')
    burger.setAttribute('aria-expanded', isOpen)
})

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        document.body.classList.remove('menu-open')
        burger.setAttribute('aria-expanded', 'false')
    })
})

