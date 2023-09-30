//nave.js

// lets

let xNave = 100;
let yNave = 366;
let meusPontos = 0;
let colisao = false;

// movimentação da nave

function mostraNave() {
  image(imagemDaNave, xNave, yNave, 65, 40);
}

function movimentaNave() {
  if (keyIsDown(UP_ARROW)) {
    yNave -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yNave += 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xNave += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMover()) {
      xNave -= 5;
    }
  }
}

function podeSeMover() {
  return yNave < 366;
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

// colisão

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemMeteoros.length; i++) {
    colisao = collideRectCircle(
      xMeteoros[i],
      yMeteoros[i],
      comprimentoMeteoro,
      alturaMeteoro,
      xNave,
      yNave,
      15
    );
    if (colisao) {
      voltaNaveParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaNaveParaPosicaoInicial() {
  yNave = 366;
}

// marca pontos

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yNave < 15) {
    meusPontos += 1;

    voltaNaveParaPosicaoInicial();
  }
}
