const search = document.querySelector('.search')
const close = document.querySelector('.close')
const searchBox = document.querySelector('.searchBox')

search.addEventListener('click', function () {
	searchBox.classList.add('active')
})

close.addEventListener('click', function () {
	searchBox.classList.remove('active')
})


/* Menu Search */

const searchMenu = document.querySelector('.searchMenu')
const closeMenu = document.querySelector('.closeMenu')
const searchBoxMenu = document.querySelector('.searchBoxMenu')

searchMenu.addEventListener('click', function () {
	searchBoxMenu.classList.add('active')
})

closeMenu.addEventListener('click', function () {
	searchBoxMenu.classList.remove('active')
})

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', function () {
	burger.classList.toggle('open')
	menu.classList.toggle('open')
})

/* AOS */

AOS.init()