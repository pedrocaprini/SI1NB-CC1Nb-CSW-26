function calcular() {
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");

    if (ano == "") {
        alert("Digite um ano válido");
        return;
    }

    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - parseInt(ano);

    resultado.innerHTML = "Sua idade é: " + idade + " anos";
}

function idadeTudo() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("anoNascimento").value;
    let resultado2 = document.getElementById("resultado2");

    if (dia == "" || mes == "" || ano == "") {
        alert("Preencha dia, mês e ano.");
        return;
    }

    resultado2.innerHTML = "Sua idade é " + dia + " dias, " + mes + " meses e " + ano + " anos";
}