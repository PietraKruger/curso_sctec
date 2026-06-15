// function mostrarSaudacao(){
// const nome = document.getElementById("nome").value;
// const hora = parseInt(document.getElementById("hora").value,10);
// const mensagem = document.getElementById("mensagem");
// mensagem.innerHTML = saudacaoPersonalizada(nome,hora);
// }

// function saudacaoPersonalizada(nome,hora){
//     if (hora < 12) {

//         return "bom dia, " + nome + "!";
//     } 
//     else if (hora > 12 && hora < 18) {

//         return "boa tarde," + nome + "!";
//     }
//     else if (hora > 18) {

//         return "boa noite," + nome + "!";
//     }
//     else {
//         return "";
//     }
// }
function setBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

document.getElementById("pinkButton").addEventListener("click",function(){setBackgroundColor("pink");});
document.getElementById("purpleButton").addEventListener("click",function(){setBackgroundColor("purple");});
document.getElementById("blueButton").addEventListener("click",function(){setBackgroundColor("blue");});

document.getElementById("inputBox").addEventListener("keypress", function(event){
    alert("Tecla pressionada:" + event.key);
});