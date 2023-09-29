// let das imagens e sons
let imagemDoEspaco;
let imagemDaNave;
let imagemMeteoro;
let imagemMeteoro2;
let imagemMeteoro3;
let imagemMeteoro4;
let imagemMeteoro5;

let somDaTrilha;
let somDeColisao;
let somDoPonto;imagens/espaço.png

// imagens do jogo

function preload(){
imagemDoEspaco = loadImage("imagens/espaço.jpeg");
imagemDaNave = loadImage("imagens/nave.png");
imagemMeteoro = loadImage("imagens/meteoro.png");
imagemMeteoro2 = loadImage("imagens/meteoro2.png");
imagemMeteoro3 = loadImage("imagens/meteoro3.png");
imagemMeteoro4 = loadImage("imagens/meteoro4.png");
imagemMeteoro5 = loadImage("imagens/meteoro5.jpeg");
  
imagemMeteoros = [imagemMeteoro, imagemMeteoro2, imagemMeteoro3, imagemMeteoro4, imagemMeteoro5];
 
//sons o jogo
  
somDaTrilha = loadSound("sons/som1.mp3");

}



