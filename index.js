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


const burger = document.querySelector('.nav__burger')

burger.addEventListener('click', (e) => {
    e.preventDefault()
    const isOpen = document.body.classList.toggle('menu-open')
    burger.setAttribute('aria-expanded', isOpen)
})