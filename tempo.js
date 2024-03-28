document.addEventListener("DOMContentLoaded", function () {
    // Data de referência: 3 de fevereiro de 2024 às 15:00:00
    var dataReferencia = new Date(2024, 1, 3, 15, 0, 0);

    setInterval(function () {
        // Data atual
        var dataAtual = new Date();

        // Calcula a diferença em milissegundos
        var diferenca = dataAtual - dataReferencia;

        // Converte milissegundos para dias, horas, minutos e segundos
        var segundos = Math.floor(diferenca / 1000);
        var minutos = Math.floor(segundos / 60);
        var horas = Math.floor(minutos / 60);
        var dias = Math.floor(horas / 24);

        // Exibe o tempo decorrido
        document.getElementById("tempo-passado").textContent = "" + dias + " dias, " + (horas % 24) + " horas, " + (minutos % 60) + " minutos, " + (segundos % 60) + " segundos.";
    }, 1000); // Atualiza a cada segundo
});