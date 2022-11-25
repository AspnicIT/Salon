require('es6-promise').polyfill();


import asydeMenu from './modules/asydeMenu';
import forms from './modules/forms';
import galary from './modules/galary';
import link from './modules/link';
import modalW from './modules/modal';


document.addEventListener('DOMContentLoaded', () => {

    asydeMenu(
        '.header-wrap-button',
        '.main',
        '.main-right',
        '.main-right__button',
        'show',
        'hide',
        'show-right',
        'hide-right',
    );
    modalW(
        'body',
        '.modal',
        '.main-right__button-modal',
        '.modal__close',
        'hide',
        'modal__hide',
        'modal__show',

    );
    forms(
        '.form',
        '.modal__input',
        '.modal__content',
        'error'
    );

    galary(
        '.galary-nav__button',
        '.galary__img',
        'galary__active',
        'modal__show',
        'modal__hide',
        'hide'
    );
    link(
        '._link'
    );

});