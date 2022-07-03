'use strict';

const btnSearch = document.querySelector('.header--button__search');
const btnBasket = document.querySelector('.header--button__basket');
const btnMenu = document.querySelector('.header--button__menu');
const btnSearchClose = document.querySelector('.button--close__search');
const btnBasketClose = document.querySelector('.button--close__cart');
const btnMenuClose = document.querySelector('.button--close__menu');

const panelSearch = document.querySelector('#search');
const panelBasket = document.querySelector('#cart');
const panelMenu = document.querySelector('#menu');

btnSearch.addEventListener('click', () => {
	panelSearch.classList.remove('scale-x-0');
});

btnSearchClose.addEventListener('click', () => {
	panelSearch.classList.add('scale-x-0');
});

btnBasket.addEventListener('click', () => {
	panelBasket.classList.remove('scale-x-0');
});

btnBasketClose.addEventListener('click', () => {
	panelBasket.classList.add('scale-x-0');
});

btnMenu.addEventListener('click', () => {
	panelMenu.classList.remove('scale-x-0');
});

btnMenuClose.addEventListener('click', () => {
	panelMenu.classList.add('scale-x-0');
});
