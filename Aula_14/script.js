document.writeln("Olá, mundo!");
document.writeln("<h2>Bem-vindo ao JavaScript</h2>");
//window.alert("Esta é uma mensagem de alerta!");
document.getElementById("title").
innerHTML = "Aprendendo JavaScript com o melhor professor da UVV!!!";

let nome = prompt("Digite seu nome: ")

document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript!";
document.getElementById("novafrase").style.color = "blue";
document.getElementById("novafrase").style.fontSize = "80px";

function exibirMensagem() {
    let nome = document.getElementById("nome").value;
    document.getElementById("novafrase").innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript!";
    document.getElementById("novafrase").style.color = "green";
    document.getElementById("novafrase").style.fontSize = "50px";

}

/* function exibirMensagem() {
    let nome = document.getElementById("nome").value;
    novafrase.innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript!";
    novafrase.style.color = "green";
    novafrase.style.fontSize = "50px";

}
*/