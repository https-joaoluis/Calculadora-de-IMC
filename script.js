function calcularIMC() {
         // Obter os valores digitados pelo usuário
        var altura = parseFloat(document.getElementById("altura").value);
        var peso = parseFloat(document.getElementById("peso").value);

            // Calcular o IMC
        var imc = peso / (altura * altura);

            // Exibir o resultado
        var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>";

            // Classificar o IMC
        if (imc < 18.5) {
            resultado.innerHTML += "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            resultado.innerHTML += "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            resultado.innerHTML += "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            resultado.innerHTML += "Obesidade grau I";
        } else if (imc >= 35 && imc < 40) {
            resultado.innerHTML += "Obesidade grau II";
        } else {
            resultado.innerHTML += "Obesidade grau III";
        }
    }