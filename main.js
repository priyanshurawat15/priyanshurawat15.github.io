let text = document.getElementById('text');
let bottle = document.getElementById('bottle');
let bottleres = document.getElementById('bottleres');
let leaf = document.getElementById('leaf');
let leaf2 = document.getElementById('leaf2');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let parallax=document.getSelection('parallax')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    bottle.style.paddingTop = value * 1 + 'px';
    bottleres.style.paddingTop = value * 1 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.marginBottom = value *0.1  + 'vh';
});

let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

