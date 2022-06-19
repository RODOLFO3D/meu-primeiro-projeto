//===================MENU HAMBURGUER=============

const btnMobile = document.getElementById('menu__btn--mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    const active = menu.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');  
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');  
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


//===============FORMULÁRIO DE CONTATO================

const form = document.getElementById('form');
const nome = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const nomeValue = nome.value
    const emailValue = email.value
    const telValue = tel.value

    if (nomeValue === "") {
        setErrorFor(nome, "Digite seu nome por gentileza.");
    } else{
        setSuccessFor(nome);
    }

    if(emailValue === ""){
        setErrorFor(email, "Por favor, digite o seu email.");
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido");
    } else {
        setSuccessFor(email);
    }

    if (telValue ===""){
        setErrorFor(tel, "Por favor, digite o seu telefone")
    }else{
        setSuccessFor(tel)
    }

}

//Função mostra erro//

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form__control error";
}

//Função mostra sucesso

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form__control success";
}

//Função verifica email válido//

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//Função somente números no input tel//

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
}



//--------------BOTÃO PERGUNTAS FREQUENTES---------------

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if (button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})



