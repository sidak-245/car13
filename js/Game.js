class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    // end23 = createSprite(displayWidth / 2, -displayHeight * 4, displayWidth, 20)
    car1 = createSprite(200, 100)
    car1.addImage("car1", car1img)
    car2 = createSprite(400, 100)
    car2.addImage("car2", car2img)

    car3 = createSprite(600, 100)
    car3.addImage("car3", car3img)

    car4 = createSprite(800, 100)
    car4.addImage("car4", car4img)

    cars = [car1, car2, car3, car4]
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        

        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play() {
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)

    Player.getPlayerInfo();


    if (allPlayers !== undefined) {
      background("#c68767")
      image(trackimg, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
      var index = 0
      var x = 200
      var y = 0
      for (var plr in allPlayers) {
        index = index + 1
        x = x + 200

        y = displayHeight - allPlayers[plr].distance
        cars[index - 1].x = x
        cars[index - 1].y = y
        if (index == player.index) {
          cars[index - 1].shapecolor = "red"
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          textSize(15)
          fill("black")
          text(allPlayers[plr].name, x - 15, y - 70)
          fill("green")
          strokeWeight(10)

          ellipse(x, y, 60, 60)

        }
      }
      drawSprites()
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50
      player.update();
    }
    // if(player.isTouching(end23)){
    // gameState = 2;
    // game.update(gameState)
    // }
  }
  end() {
    console.log("we have reached the end")
  }
}
