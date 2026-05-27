function calcular() {
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");
    let idade = 2026 - parseInt(ano);

    resultado.innerHTML = "Sua idade é: " + idade + " anos";
}