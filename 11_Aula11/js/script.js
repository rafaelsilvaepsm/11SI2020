var btnMudarCores = document.getElementById("btnMudarCores");
var divPrincipal = document.getElementById("divPrincipal");

//console.log(btnMudarCores);
btnMudarCores.onclick = function(){
    console.log("teste");
    divPrincipal.classList.remove("tema1");
    divPrincipal.classList.add("tema2");
}