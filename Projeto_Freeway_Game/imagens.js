//imagens e sons do jogo
let imagemdaestrada;
let imagemdoator;
let imagemdocarro;
let imagemdocarro2;
let imagemdocarro3;

//sons do jogo
let somdatrilha;
let somdacolisao;
let somdoponto;

function preload() {
    imagemdaestrada = loadImage("images/estrada.png");
    imagemdoator = loadImage("images/ator-1.png");
    imagemdocarro = loadImage("images/carro-1.png");
    imagemdocarro2 = loadImage("images/carro-2.png");
    imagemdocarro3 = loadImage("images/carro-3.png");
    imagemdoscarros = [imagemdocarro, imagemdocarro2, imagemdocarro3, imagemdocarro, imagemdocarro2, imagemdocarro3];

    somdatrilha = loadSound("sounds/trilha.mp3");
    somdacolisao = loadSound("sounds/colidiu.mp3");
    somdoponto = loadSound("sounds/pontos.wav");
}