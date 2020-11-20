var btnMudarCores = document.getElementById("btnMudarCores");
var conteudo = document.getElementById("conteudo");

//console.log(btnMudarCores);
btnMudarCores.onclick = function(){
    conteudo.classList.toggle("tema1");
    conteudo.classList.toggle("tema2");
}