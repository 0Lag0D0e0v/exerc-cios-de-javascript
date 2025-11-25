
//pegando os elementos do html//
const titulo=document.getElementById("titulo");
const descricao= document.getElementById("descricao");
const botao= document.getElementById("botao");

//adicionando um evento ao clique//
botao.addEventListener("click", function(){
    titulo.innerText="O texto foi alterado!";
    titulo.style.color="silver";

    descricao.innerText="Agora o título e o texto foram modificados pelo Javascript.";
    descricao.style.color="green";
});
