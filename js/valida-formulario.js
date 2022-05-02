let btn = document.querySelector('.secao-ebook__div-com-formulario__btn-receber-ebook');
let nome = document.querySelector('#nome');
let telefone = document.querySelector('#telefone');
let email = document.querySelector('#email');
btn.addEventListener('click', validarFormulario);
function validarFormulario() {
    validarCampoNome(nome);
    validarCampoEmail(email);
    validarCampoTelefone(telefone);
}
function validarCampoNome(nome) {
    let feedback = document.querySelector('.feedback-campo-nome');
    nome.classList.remove('secao-ebook__div-com-formulario__form__grupo-form__campo');
    if (nome.value == '') {
        feedback.innerHTML = 'Informe seu nome';
        nome.classList.remove('campo-valido');
        nome.classList.add('campo-invalido');
    } else {
        feedback.innerHTML = '';
        nome.classList.remove('campo-invalido');
        nome.classList.add('campo-valido');
    }
}
function validarCampoEmail(email) {
    let feedback = document.querySelector('.feedback-campo-email');
    email.classList.remove('secao-ebook__div-com-formulario__form__grupo-form__campo');
    if (email.value == '') {
        feedback.innerHTML = 'Informe seu e-mail';
        email.classList.remove('campo-valido');
        email.classList.add('campo-invalido');
    } else {
        feedback.innerHTML = '';
        email.classList.remove('campo-invalido');
        email.classList.add('campo-valido');
    }
}
function validarCampoTelefone(telefone) {
    let feedback = document.querySelector('.feedback-campo-telefone');
    telefone.classList.remove('secao-ebook__div-com-formulario__form__grupo-form__campo');
    if (telefone.value == '') {
        feedback.innerHTML = 'Informe seu telefone';
        telefone.classList.remove('campo-valido');
        telefone.classList.add('campo-invalido');
    } else {
        feedback.innerHTML = '';
        telefone.classList.remove('campo-invalido');
        telefone.classList.add('campo-valido');
    }
}