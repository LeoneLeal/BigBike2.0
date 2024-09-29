function sobre() {
    window.location.href = "sobre.html";
}
function produtos() {
    window.location.href = "produtos.html";
}
function servicos() {
    window.location.href = "servicos.html";
}

function voltarMenuInicial() {
    window.location.href = "index.html";
}
var btnOpen = document.getElementById('btn_form');
var btnClose = document.getElementById('btn_close');
var form = document.getElementById('my_form');

btnOpen.addEventListener('click', function () {
    form.style.display = 'block';
    btnClose.style.display = 'inline';
    btnOpen.style.display = 'none';
});

btnClose.addEventListener('click', function () {
    form.style.display = 'none';
    btnClose.style.display = 'none';
    btnOpen.style.display = 'inline';
});

function validarFormulario() {
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    var nomePag = document.forms["formCadastro"]["pag"].value;
    var nomeEnd = document.forms["formCadastro"]["endereco"].value;
    if (nomePessoa === "" || nomePag === "" || nomeEnd === "") {
        alert("Favor informar o seu nome, endereço e forma de pagamento!");
        return false;
    } else {
        alert("Olá, " + nomePessoa + " sua forma de pagamento " + nomePag + " foi aceita, estaremos enviando para seu endereço " + nomeEnd + " . ");
        return true;
    }
}