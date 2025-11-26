//incio do código//
const titulo=document.getElementById("titulo");
const descricao= document.querySelector(".descricao");
const foto= document.getElementById("foto");
const botao= document.getElementById("btn");

//adicionando um evento ao clique//
botao.addEventListener("click", function(){
    //modificação de conteúdo//
    titulo.textContent="Título Alterado!";
    descricao.innerHTML="<em>Agora o texto mudou e esta em itálico.<em>";
    //manipulação de atributos//
    foto.setAttribute("src","https://media.s-bol.com/gXv74W5M3l7k/AQ9Lyp/550x781.jpg",widht="300",height="300");
    foto.setAttribute("alt","Nova imagem");

    //Estilo//
    titulo.style.color="red";
    titulo.style.fontSize="28px";

    //classe//

    descricao.classList.toggle("ativo");
});
