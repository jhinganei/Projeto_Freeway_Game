//código do carro
let xcarros = [600, 600, 600, 600, 600, 600];
let ycarros = [40, 96, 150, 210, 265, 318];
let velocidadecarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentocarro = 50;
let alturacarro = 40;

function mostracarro() {
    for (let i = 0; i < imagemdoscarros.length; i++) {
        image(imagemdoscarros[i], xcarros[i], ycarros[i], comprimentocarro, alturacarro);
    }
}

function movimentacarro() {
    for (let i = 0; i < imagemdoscarros.length; i++) {
        xcarros[i] -= velocidadecarros[i];
    }
}

function voltaposicaoinicialdocarro() {
    for (let i = 0; i < imagemdoscarros.length; i++) {
        if (passoutodatela(xcarros[i])) {
            xcarros[i] = 600;
        }
    }
}

function passoutodatela(xcarros) {
    return xcarros < -50;
}