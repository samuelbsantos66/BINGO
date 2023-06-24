var jogadores = []
var nomeJogador;

function gerarNumerosAleatorios(quantidade, min, max) {

    if (quantidade > (max - min)) {
        console.log("Intervalo insuficiente ...");
        return;
    }

    var numeros = [];

    while (numeros.length < quantidade) {
        var aleatorio = Math.floor(Math.random() * (max - min) + min);

        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function gerarCartela() {
    var nomeJogador = prompt('Digite o nome do jogador');

    var cartela = [gerarNumerosAleatorios(5, 1, 15), gerarNumerosAleatorios(5, 16, 30), gerarNumerosAleatorios(5, 31, 45), gerarNumerosAleatorios(5, 46, 60), gerarNumerosAleatorios(5, 61, 75)]

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    desenharCartela(nomeJogador, cartela);

    console.log(jogadores);

}

function reiniciarJogo() {
    jogadores = []
}

function desenharCartela(nomeJogador, cartela) {

    var div = document.getElementById('espaco_cartelas');

    var div2 = document.createElement('div');

    div2.className = 'cartela';

    var nome = document.createElement('h4');

    nome.innerText = nomeJogador;

    var tabela = document.createElement('table');

    var thead = document.createElement('thead');

    var thB = document.createElement('th');
    thB.innerText = 'B';
    var thI = document.createElement('th');
    thI.innerText = 'I';
    var thN = document.createElement('th');
    thN.innerText = 'N';
    var thG = document.createElement('th');
    thG.innerText = 'G';
    var thO = document.createElement('th');
    thO.innerText = 'O';

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            var td = document.createElement('td');
            if (i == 2 && j == 2) {
                td.innerText = "X";
                tr.appendChild(td);
            } else {
                td.innerText = cartela[j][i]
                tr.appendChild(td);
            }
        }
        tabela.appendChild(tr)
    }


    tabela.appendChild(thead);
    div2.appendChild(nome);
    div2.appendChild(tabela)
    div.appendChild(div2);



}

function sorteio() {

    var div = document.getElementById('sorteio')
    var n = document.createElement('h2');
    n.innerText = Math.floor(Math.random() * 75);

    div.appendChild(n)

}

