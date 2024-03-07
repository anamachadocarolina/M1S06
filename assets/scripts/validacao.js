let nome = document.getElementById("nome");


function bemvindo(){
    alert('Seja bem vindo!');
}


nome.addEventListener("mouseover", function(event) {
    nome.textContent = 'Ana Machado';
});

nome.addEventListener("mouseleave", function(event){
    nome.textContent = 'Ana Carolina de Oliveira Machado';s
});