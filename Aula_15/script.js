function calcular() {
    
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - parseInt(ano);

    if (ano == 0){
        alert("Digite um ano válido")
        return
    }
    resultado.innerHTML = "Sua idade é: " + idade;
}