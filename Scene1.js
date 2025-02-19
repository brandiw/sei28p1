class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    preload(){
        this.load.image("background2", "assets/backgroundimages/parallax-forest-lights.png")
        this.load.image("background1", "assets/backgroundimages/parallax-forest-back-trees.png")
        this.load.image("background3", "assets/backgroundimages/parallax-forest-middle-trees.png")
        this.load.image("background4", "assets/backgroundimages/parallax-forest-front-trees.png")
        this.load.image("background5", "assets/image/level2/background.png")
        this.load.image("background6", "assets/image/level2/middleground.png")
        
        this.load.atlas("girl", "assets/girlSpritesheet/girlSprites.png", "assets/girlSpritesheet/girlSprites.json")
        

        //Tiled tilesheets 
        this.load.image("tileset", "assets/image/level1/tileset.png")
        this.load.image("tilesets", "assets/image/level2/tilesets.png")
        //Tiled tilemap
        this.load.tilemapTiledJSON('map', 'assets/tilemap/level1.json')
        }
        //add loading bar
        

    create(){
        this.scene.start("playGame")

        }

    update(){
        
    }


}