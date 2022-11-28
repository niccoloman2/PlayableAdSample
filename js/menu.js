var GameContainer = new PIXI.Container();

app.stage.addChild(GameContainer);

var gameBG;

var titleText;

var playButton;

function loadMenu()
{
    gameBG = PIXI.Sprite.from(PIXI.Assets.get('GameBG'));
    gameBG.width = window.innerWidth;
    gameBG.height = window.innerHeight;
    GameContainer.addChild(gameBG);

    titleText = new PIXI.Text('Produce Shinobi', menuTextStyle);
    titleText.anchor.set(0.5, 0.5);
    titleText.x = window.innerWidth/2;
    titleText.y = window.innerHeight/2;
    GameContainer.addChild(titleText);

    playButton = new UIButton("PLAY", window.innerWidth/2, window.innerHeight/2 + 100, 100, 50, 0x33FF33, 0x000000, onPlayClick);
    GameContainer.addChild(playButton.buttonGraphic);
}

function hideMenu()
{
    titleText.visible = false;
    playButton.buttonGraphic.visible = false;
    playButton.buttonText.visible = false;
}

var gameScene;

function onPlayClick()
{
    hideMenu();

    gameScene = new GameScene();
}


