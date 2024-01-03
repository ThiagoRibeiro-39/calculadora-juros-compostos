
function calcularJuros() {
    // Obtenha os elementos de entrada
    var principal = parseFloat(document.getElementById("principal").value);
    var taxaJuros = parseFloat(document.getElementById("rate").value);
    var numeroDeDias = parseInt(document.getElementById("days").value);

    // Limpe a tabela
    document.getElementById("resultTable").innerHTML = "<tr><th>Dia</th><th>Valor Acumulado</th></tr>";

    // Adicione as linhas à tabela
    for (var dia = 1; dia <= numeroDeDias; dia++) {
        var valorFuturo = principal * Math.pow(1 + taxaJuros, dia);
        var tableRow = "<tr><td>" + dia + "</td><td>" + valorFuturo.toFixed(2) + "</td></tr>";
        document.getElementById("resultTable").innerHTML += tableRow;
    }
}

function limparFormulario() {
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("days").value = "";
    document.getElementById("resultTable").innerHTML = "<tr><th>Dia</th><th>Valor Acumulado</th></tr>";
}


