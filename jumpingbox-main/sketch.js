var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, aresta1, aresta2, aresta3, aresta4;
var music;

function preload(){
    //musica aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(512,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(730,580,200,30);
    bloco4.shapeColor = "green";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 10;
    bola.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));
    aresta1 = createSprite(400,600,800,10);
    aresta2 = createSprite(400,0,800,10);
    aresta3 = createSprite(820,400,0,800);
    aresta4 = createSprite(-20,400,0,800);
    bola.bounceOff(aresta1);
    bola.bounceOff(aresta2);
    bola.bounceOff(aresta3);
    bola.bounceOff(aresta4);

    //escreva o código de ricochete de bola para bloco1
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }
    bola.bounceOff(bloco1);

    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para parar a música
    }
    //escreva o código de ricochete de bola para bloco3

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        music.play();
    }
    bola.bounceOff(bloco3);
    //escreva o código de ricochete de bola para bloco4
;
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        music.play();
    }
    bola.bounceOff(bloco4);
    drawSprites();
}