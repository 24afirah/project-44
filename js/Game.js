class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    rocket1 = createSprite(width / 2 - 50, height - 100);
    rocket1.addImage("rocket1", rocket1_img);
    rocket1.scale = 0.07;

    rocket2 = createSprite(width / 2 + 100, height - 100);
    rocket2.addImage("rocket22", rocket2_img);
    rocket2.scale = 0.07;

    rockets = [rocket1, rocket2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }
  }
}
