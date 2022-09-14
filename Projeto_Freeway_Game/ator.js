//ator
let xator = 85;
let yator = 366;
let colisao = false;
let meuspontos = 0;

function mostraator() {
    image(imagemdoator, xator, yator, 30, 30);
}

function movimentaator() {
    if (keyIsDown(UP_ARROW)) {
        yator -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podesemover()) {
            yator += 3;
        }
    }
}

function verificacolisao() {
    for (let i = 0; i < imagemdoscarros.length; i++) {
        colisao = collideRectCircle(xcarros[i], ycarros[i], comprimentocarro, alturacarro, xator, yator, 15);
        if (colisao) {
            voltaatorposicaoinicial();
            somdacolisao.play();
            if (pontosmaiorquezero()) {
                meuspontos -= 1;
            }
        }
    }
}

function voltaatorposicaoinicial() {
    yator = 366;
}

function incluipontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meuspontos, width / 5, 27);
}

function marcaponto() {
    if (yator < 15) {
        meuspontos += 1;
        somdoponto.play();
        voltaatorposicaoinicial();
    }
}

function pontosmaiorquezero() {
    return meuspontos > 0;
}

function podesemover() {
    return yator < 366;
}