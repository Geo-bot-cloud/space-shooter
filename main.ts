controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 5 5 5 5 . . . 
        . . . . . . . 5 f f f f f 5 . . 
        . . . . . . 5 f f f f f f 5 . . 
        . . . 5 5 5 5 f f f f f f 5 . . 
        . . . . . . . 5 5 5 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 1000)
    scene.cameraShake(4, 500)
})
let ShipEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 2 2 2 2 . 
    . . . . . . . . 2 2 2 4 4 4 2 . 
    . . . . . 2 2 2 5 5 5 5 5 2 . . 
    . . . 2 2 4 4 4 4 4 4 4 2 . . . 
    . 2 2 5 5 5 5 5 5 5 5 2 . . . . 
    . 2 4 4 4 4 4 4 4 4 4 2 . . . . 
    . 2 4 4 4 4 4 4 4 4 4 2 . . . . 
    . 2 2 5 5 5 5 5 5 5 5 2 . . . . 
    . . . 2 2 4 4 4 4 4 4 4 2 . . . 
    . . . . . 2 2 2 5 5 5 5 5 2 . . 
    . . . . . . . . 2 2 2 4 4 4 2 . 
    . . . . . . . . . . . 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    ShipEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . . . . . . 8 2 . . . . . 
        . . . . . . . . . 8 2 2 2 . . . 
        . . . . . . . . 8 8 8 4 . . . . 
        . . . . . . . 8 8 8 8 4 4 . . . 
        . . . . . . 8 8 f 8 8 4 4 . . . 
        . . . . . . 2 8 8 8 8 4 4 . . . 
        . . . . . . 8 8 8 f 8 4 4 . . . 
        . . . . . . . f f f 8 4 4 . . . 
        . . . . . . . . 8 8 8 4 . . . . 
        . . . . . . . . . 8 2 2 2 . . . 
        . . . . . . . . . 8 2 . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ShipEnemy.x = scene.screenWidth()
    ShipEnemy.vx = -20
    ShipEnemy.y = randint(10, scene.screenHeight() - 10)
})
