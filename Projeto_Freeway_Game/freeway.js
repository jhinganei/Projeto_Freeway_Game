function setup() {
    createCanvas(500, 400);
    somdatrilha.loop();
}

function draw() {
    background(imagemdaestrada);
    mostraator();
    mostracarro();
    movimentacarro();
    movimentaator();
    voltaposicaoinicialdocarro();
    verificacolisao();
    incluipontos();
    marcaponto();
}