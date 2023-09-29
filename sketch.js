function setup(){
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw(){
background(imagemDoEspaco); 

//Nave
mostraNave();
movimentaNave();

//Meteoro
mostraMeteoros();
movimentaMeteoro();
voltaPosicaoInicialDoMeteoro();

// colisão e ponto 
verificaColisao();
incluiPontos();
marcaPonto();
}