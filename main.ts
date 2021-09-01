scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 f f f 7 7 7 7 7 f f f 7 7 f 
    f 7 f f f 7 7 7 7 7 f f f 7 7 f 
    f 7 f f f 7 7 7 7 7 f f f 7 7 f 
    f 7 9 9 7 7 7 7 7 7 9 9 9 7 7 f 
    f 7 9 9 9 7 7 7 7 7 9 9 7 7 7 f 
    f 7 7 9 9 7 7 7 7 7 7 9 7 7 7 f 
    f 7 7 9 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 f f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundCenter)
scene.cameraFollowSprite(mySprite)
