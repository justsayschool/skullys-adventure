scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles13, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Skully.vy == 0) {
        Skully.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles15, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
let Skully: Sprite = null
scene.setBackgroundColor(15)
Skully = sprites.create(assets.image`Skully`, SpriteKind.Player)
controller.moveSprite(Skully, 100, 0)
tiles.setTilemap(tilemap`level1`)
Skully.ay = 350
scene.cameraFollowSprite(Skully)
