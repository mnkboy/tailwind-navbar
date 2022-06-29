const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('Me diste click')
    menu.classList.toggle('hidden')
})