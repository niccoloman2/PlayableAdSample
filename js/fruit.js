const FRUIT_TYPE_COUNT = 6;

const COLOR_INDEX = ["blue", "green", "orange", "purple", "red", "yellow"];
const FRUIT_VALUE = [30, 5, 20, 15, 25, 10];

const GRAVITY_VALUE = 10;

class Fruit
{
    constructor(gameStage)
    {
        this.fruitType = Math.floor(Math.random() * FRUIT_TYPE_COUNT);
        this.fruitSprite = PIXI.Sprite.from(PIXI.Texture.from('game_fruit_' + COLOR_INDEX[this.fruitType] + '.png'));
        this.fruitSprite.anchor.set(0.5, 0.5);
        this.fruitSprite.scale.set(0.75, 0.75);
        this.scoreValue = FRUIT_VALUE[this.fruitType];
        this.isSliced = false;
        
        this.leftSprite = PIXI.Sprite.from(PIXI.Texture.from('game_fruit_' + COLOR_INDEX[this.fruitType] + '_l.png'));
        this.rightSprite = PIXI.Sprite.from(PIXI.Texture.from('game_fruit_' + COLOR_INDEX[this.fruitType] + '_r.png'));
        this.leftSprite.anchor.set(1, 0.5);
        this.rightSprite.anchor.set(0, 0.5);
        this.leftSprite.scale.set(0.75, 0.75);
        this.rightSprite.scale.set(0.75, 0.75)
        this.leftSprite.visible = false;
        this.rightSprite.visible = false;
        
        gameStage.addChild(this.leftSprite);
        gameStage.addChild(this.rightSprite);

        var isLeftSpawn = this.randomRange(0, 100) > 49;
        var horizontalTargetPos = isLeftSpawn ? window.innerWidth + 300 : -300;

        this.fruitSprite.x = isLeftSpawn ? 0 : window.innerWidth;
        this.fruitSprite.y = window.innerHeight + 200;
        gameStage.addChild(this.fruitSprite);

        createjs.Tween.get(this.fruitSprite.position).to({y: 200}, 1200, createjs.Ease.sineOut)
        .to({y:window.innerHeight + 200}, 1200, createjs.Ease.sineIn);

        createjs.Tween.get(this.fruitSprite.position).to({x: horizontalTargetPos}, 2400, createjs.Ease.sineIn);

        createjs.Tween.get(this.fruitSprite).to({angle:this.randomRange(-180, 180)}, 3000, createjs.Ease.sineIn);

        this.fruitSprite.interactive = true;
        this.fruitSprite.cursor = 'pointer';
        this.fruitSprite.addListener('touchmove', ()=>{this.onFruitSlice();});
    }


    randomRange(min, max)
    {
        return Math.random() * (max - min) + min;
    }

    onFruitSlice()
    {
        if(this.isSliced)
        {
            return;
        }

        gameScene.addScore(this.scoreValue);
        this.isSliced = true;
        this.fruitSprite.visible = false;
        this.leftSprite.position = this.fruitSprite.position;
        this.rightSprite.position = this.fruitSprite.position;
        this.leftSprite.visible = true;
        this.rightSprite.visible = true;

        createjs.Tween.get(this.leftSprite.position).to({y:window.innerHeight+200}, 900, createjs.Ease.backIn);
        createjs.Tween.get(this.rightSprite.position).to({y:window.innerHeight+200}, 800, createjs.Ease.backIn);

        createjs.Tween.get(this.leftSprite).to({angle:-180}, this.randomRange(1600, 2500), createjs.Ease.sineIn);
        createjs.Tween.get(this.rightSprite).to({angle:180}, this.randomRange(1600, 2500), createjs.Ease.sineIn);
    }
}