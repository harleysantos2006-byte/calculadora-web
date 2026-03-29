

const visor = document.querySelector(".visor");

const botoes = document.querySelectorAll("button");

let expressao = "";


let resultadoMostrado = false;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const valor = botao.innerText;
        const operadores = ["+", "-", "*", "/"];


        if (valor === "C") {
            expressao = "";
        } else if (operadores.includes(valor)) {

            const ultimo = expressao.slice(-1);

            if (operadores.includes(ultimo)) {

            } else {
                expressao += valor
            }

        }
        else if (valor === "=") {
            try {
                let resultado = eval(expressao);
                expressao = String(resultado);
                resultadoMostrado = true;
            } catch {
                expressao = "Erro";
            }

        }
        else {
            expressao += valor;
        }

        visor.value = expressao;

    });
});

