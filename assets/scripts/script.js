let nome = document.getElementById("nome");
let contato = document.getElementById('contato');
let email = document.getElementById('email');


function bemvindo(){
    alert('Seja bem vindo!');
}


nome.addEventListener("mouseover", function(event) {
    nome.textContent = 'Ana Machado';
});

nome.addEventListener("mouseleave", function(event){
    nome.textContent = 'Ana Carolina de Oliveira Machado';s
});

contato.addEventListener("mouseover", function(event) {
    contato.textContent = 'Click para iniciar uma conversa por whatsapp';
});

contato.addEventListener("mouseleave", function(event){
    contato.textContent = '(91) 9 9999 - 9999';
});

email.addEventListener("mouseover", function(event) {
    email.textContent = 'Click para enviar um email';
});

email.addEventListener("mouseleave", function(event){
    email.textContent = 'acarolina066@gmail.com';
});