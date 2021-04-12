controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        Skully.vy = -100
    }
})
let Skully: Sprite = null
scene.setBackgroundColor(15)
Skully = sprites.create(assets.image`Skully`, SpriteKind.Player)
controller.moveSprite(Skully, 100, 0)
tiles.setTilemap(tilemap`level1`)
Skully.ay = 350
scene.cameraFollowSprite(Skully)
