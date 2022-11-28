var app;
var renderer;
var loader;

app = new PIXI.Application(
    {
        width:window.innerWidth,
        height:window.innerHeight,
        backgroundColor: 0xAAAAAA,
        autoResize:true
    }
)
app.resizeTo = window;
renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

createjs.Ticker.setFPS(app.ticker.FPS);

PIXI.Assets.add('FruitsTexture', 'assets/GameFruits.png');
PIXI.Assets.add('FruitsData', 'assets/GameFruits.json');
PIXI.Assets.add('BoardTexture', 'assets/board.png');
PIXI.Assets.add('GameBG', 'assets/game_bg.jpg');

const assetLoadPromise = PIXI.Assets.load(['FruitsTexture', 'FruitsData', 'BoardTexture', 'GameBG']);

assetLoadPromise.then(()=> {
    loadMenu();
});

document.body.appendChild(app.view);

