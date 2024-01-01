function calcularJuros() {
    // Limpa a tabela
    document.getElementById("resultTable").innerHTML = "";

    var valorInicial = parseFloat(document.getElementById("principal").value);
    var taxaJuros = parseFloat(document.getElementById("rate").value);
    var numeroDeDias = 30;

    for (var dia = 1; dia <= numeroDeDias; dia++) {
        // Calcula o valor futuro para o dia atual
        var valorFuturo = valorInicial * Math.pow(1 + taxaJuros, dia);

        // Adiciona uma linha na tabela
        var tableRow = "<tr><td>" + dia + "</td><td>" + valorFuturo.toFixed(2) + "</td></tr>";
        document.getElementById("resultTable").innerHTML += tableRow;
    }
}





