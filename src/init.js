const config = {
    width: 320*2,
    height: 180*2,
    parent: 'container',
    type: Phaser.AUTO,
    scene: {
        preload : preload,
        create : create,
        update : update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    //console.log('soy preload');
    this.load.image('pajaro','./assets/bird.png') //carga la imagen en el cache del juego para su uso global
}
function create(){
    //console.log('soy create');

    this.pajaro = this.physics.add.image(80, 100, 'pajaro')
    this.pajaro.setScale(2);
    //this.pajaro.flipX = true;
    this.pajaro.setOrigin(0,0);
    //fisicas
    this.pajaro.setCollideWorldBounds(true)
    this.pajaro.setBounce(0.4)
    this.pajaro.setVelocity(50, 0)

}
function update(time, delta){
    //console.log(delta)
    //this.pajaro.angle++;
}