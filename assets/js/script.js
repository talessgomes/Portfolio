let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const textForDescribe = {
  strings: ['Desenvolvedor Frontend', 'Desenvolvedor Backend'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
};

new Typed('.multiple-text', textForDescribe);
new Typed('.about-text', textForDescribe);


/*Alerta para envio de e-mail*/

const form = document.getElementById('contact-form');

    form.addEventListener('submit', function () {
        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    });