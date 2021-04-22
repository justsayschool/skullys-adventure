namespace SpriteKind {
    export const fragment = SpriteKind.create()
    export const summon = SpriteKind.create()
    export const crab = SpriteKind.create()
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.summon, function (sprite, otherSprite) {
    otherSprite.destroy()
    bat = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bat,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
    500,
    true
    )
    bat.setPosition(Skully.x + -90, Skully.y + -50)
    bat.follow(Skully, 102)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles15, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
info.onLifeZero(function () {
    Skully.destroy(effects.disintegrate, 500)
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fragment, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.x = -20
})
let bat: Sprite = null
let summon: Sprite = null
let shard: Sprite = null
let Skully: Sprite = null
scene.setBackgroundColor(15)
game.setDialogTextColor(3)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c a 3 c . . 
    . . . . . . c a 3 3 3 3 a c . . 
    . . c c . c a c c 3 3 3 3 3 c . 
    . c 1 1 c a c 1 1 c 3 3 3 3 3 c 
    . f f 1 c a c 1 f f a 3 3 3 c c 
    . f f 1 3 c 3 1 f f a a a a c c 
    . . b 1 1 3 1 1 c 3 3 3 3 3 3 c 
    . c c 1 1 1 1 1 b c c 3 3 3 3 c 
    c 1 1 3 1 1 1 3 b 1 1 c 3 3 c . 
    b 1 3 b 3 3 3 3 b b 1 c b b . . 
    c 1 1 1 c 3 c 1 1 1 c 3 c 1 c . 
    c 1 1 1 1 c 1 1 1 1 c 3 c 1 c . 
    . c c c c c c c c c . . c c c . 
    `)
game.setDialogFrame(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `)
game.showLongText("Harry the Hermit Crab: You must escape the cave with as many fragments as you can get before the bats get you Skully!!", DialogLayout.Bottom)
info.setLife(2)
Skully = sprites.create(assets.image`Skully`, SpriteKind.Player)
Skully.setPosition(64, 140)
controller.moveSprite(Skully, 100, 0)
tiles.setTilemap(tilemap`level1`)
Skully.ay = 350
scene.cameraFollowSprite(Skully)
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    shard = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c 3 3 3 3 . . . . . . 
        . . . . . 3 3 f f b 3 . . . . . 
        . . . . c 3 b f f c b . . . . . 
        . . . . c b b b 3 f c b . . . . 
        . . . . c b 3 c 3 b b b . . . . 
        . . . . . b b f f 3 3 c . . . . 
        . . . . . . 3 3 b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.fragment)
    animation.runImageAnimation(
    shard,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . c 3 3 3 3 . . . . . . 
        . . . . . 3 3 f f b 3 . . . . . 
        . . . . c 3 b f f c b . . . . . 
        . . . . c b b b 3 f c b . . . . 
        . . . . c b 3 c 3 b b b . . . . 
        . . . . . b b f f 3 3 c . . . . 
        . . . . . . 3 3 b b c . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . c 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . c 3 b . . . . . . . 
        . . . . . . c b c b . . . . . . 
        . . . . . . c b b b . . . . . . 
        . . . . . . . b 3 c . . . . . . 
        . . . . . . . 3 c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . 3 3 3 3 c . . . . . 
        . . . . . 3 b f f 3 3 . . . . . 
        . . . . . b c f f b 3 c . . . . 
        . . . . b c f 3 b b b c . . . . 
        . . . . b b b 3 c 3 b c . . . . 
        . . . . c 3 3 f f b b . . . . . 
        . . . . . c b b 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . c 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . c 3 b . . . . . . . 
        . . . . . . c b c b . . . . . . 
        . . . . . . c b b b . . . . . . 
        . . . . . . . b 3 c . . . . . . 
        . . . . . . . 3 c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    900,
    true
    )
    tiles.placeOnTile(shard, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        summon = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . 6 9 9 6 . . . . . . 
            . . . . . . 6 9 9 6 . . . . . . 
            . . . . . 6 6 9 9 6 6 . . . . . 
            . . . . . 6 9 9 9 9 6 . . . . . 
            . . . . 6 6 9 8 8 9 6 6 . . . . 
            . . . . 6 6 9 8 8 9 6 6 . . . . 
            . . . 6 6 9 8 8 8 8 9 6 6 . . . 
            . 6 6 6 9 8 8 8 8 8 8 9 6 6 6 . 
            `, SpriteKind.summon)
        tiles.placeOnTile(summon, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
game.onUpdate(function () {
    Skully.setImage(assets.image`Skully`)
    if (Skully.vx < 0) {
        Skully.image.flipX()
    }
    if (Skully.vy < 0) {
        Skully.setImage(img`
            ........................
            ........................
            ........................
            ........................
            .........33333..........
            .......333111133........
            ......3b1111111b3.......
            ......31111111113.......
            .....33331111111d3......
            ....3b111c1dd111d3......
            ....33b1b13dcc11b3......
            .....33b3b3b111113......
            ......3333c3db1b13......
            .......3ccc3c3b3b3......
            ........3333333333......
            .........333333.........
            .........333333.........
            .....3..3333333.........
            .....333333333..........
            ......3333333...........
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (Skully.vy > 0) {
        Skully.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........33333.........
            ........33111113........
            .......3b111111b3.......
            ......3bd11111113.......
            ......3ddd111111d3......
            ......3dddd11111d3......
            ......3ddddddd11d3......
            ......3ddddddd1113......
            ......3ddddddcc113......
            .......3bdddb1111b3.....
            ........333c3db1b13.....
            .......33333333b3b3.....
            ....33.33333333333......
            .....33333333...........
            .....333333b1b13........
            ......333333b3b3........
            ........................
            ........................
            ........................
            ........................
            `)
    }
    if (Skully.vx < 0 && Skully.vy > 0) {
        Skully.setImage(img`
            ........................
            ........................
            ........................
            ........................
            .........33333..........
            ........31111133........
            .......3b111111b3.......
            .......31111111db3......
            ......3d111111ddd3......
            ......3d11111dddd3......
            ......3d11ddddddd3......
            ......3111ddddddd3......
            ......311ccdddddd3......
            .....3b1111bdddb3.......
            .....31b1bd3c333........
            .....3b3b33333333.......
            ......33333333333.33....
            ...........33333333.....
            ........31b1b333333.....
            ........3b3b333333......
            ........................
            ........................
            ........................
            ........................
            `)
    }
    if (Skully.vx < 0 && Skully.vy < 0) {
        Skully.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........33333.........
            ........331111333.......
            .......3b1111111b3......
            .......31111111113......
            ......3d11111113333.....
            ......3d111dd1c111b3....
            ......3b11ccd31b1b33....
            ......311111b3b3b33.....
            ......31b1bd3c3333......
            ......3b3b3c3ccc3.......
            ......3333333333........
            .........333333.........
            .........333333.........
            .........3333333..3.....
            ..........333333333.....
            ...........3333333......
            ........................
            ........................
            ........................
            ........................
            `)
    }
})
