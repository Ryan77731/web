//mateoro.js

//código do meteoro

let xMeteoros = [600,600,600,600,600];
let yMeteoros = [40,96,150,208,268];
let velocidadeMeteoros = [9,7,10,6,8];
let alturaMeteoro = 40;
let comprimentoMeteoro = 50;


function mostraMeteoros(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    image(imagemMeteoros[i], xMeteoros[i], yMeteoros[i], comprimentoMeteoro, alturaMeteoro);
  }
}

function movimentaMeteoro(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    xMeteoros[i] -= velocidadeMeteoros[i];
  }
}

function voltaPosicaoInicialDoMeteoro(){
  for (let i = 0; i < imagemMeteoros.length; i++){
    if (passouTodaATela(xMeteoros[i])){
      xMeteoros[i] = 600;
    }
  }
}

function passouTodaATela(xMeteoro){
  return xMeteoro < - 50;
}

//colisão do meteoro

function verificaColisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for (let i = 0; i < imagemMeteoros.length; i++){
colisao = collideRectCircle(xMeteoros[i], yMeteoros[i], comprimentoMeteoro, alturaMeteoro, xNave, yNave, 15)
if (colisao){
voltaNaveParaPosicaoInicial();
  }
 }
}


