const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

burger.addEventListener('click', ()=> {
    ul.classList.toggle('show');
})