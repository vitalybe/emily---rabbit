namespace SpriteKind {
    export const Floor = SpriteKind.create()
}
function makePlatform () {
    platform = sprites.create(assets.image`bullet`, SpriteKind.Enemy)
    platform.setBounceOnWall(true)
    platform.setPosition(149, height)
    platform.vx = -30
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    navnav.setVelocity(0, -100)
    navnav.ay = 200
    navnav.y = height
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (navnav.y < platform.y) {
        navnav.ay = 0
        navnav.vy = 0
        platform.vx = 0
        platform.setKind(SpriteKind.Floor)
        height += -5
        makePlatform()
    } else {
        sprites.destroy(navnav)
        game.gameOver(false)
    }
})
let platform: Sprite = null
let height = 0
let navnav: Sprite = null
scene.setBackgroundImage(assets.image`forest`)
navnav = sprites.create(assets.image`rabbit`, SpriteKind.Player)
navnav.setPosition(83, 91)
height = 94
makePlatform()
game.onUpdate(function () {
    if (navnav.y >= height) {
        navnav.ay = 0
        navnav.vy = 0
    } else {
    	
    }
})
