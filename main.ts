controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`quieto`,
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`quieto0`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................................
        ........................................
        ...............ffffff...................
        ..............ff4eeeff..................
        ............ff44eeeee4f.................
        ...........f44eeeeeeeeefff..............
        ..........ff4eeeeeeeeee4fff.............
        .........fffffffffffffffffff............
        .............bbbbbbbbbbb................
        .............ff8888f888f................
        .............ff8888f888f................
        ..............ffffffffff.............f..
        ............fffdddddddf.....fffffffffbf.
        ...........ff99dddeeedf....fbfbbbbbbbbf.
        ..........f6f9fdde111efffffffbbbccccccf.
        .........f66f9fdfeeeeef666fffbbcccffff..
        ........f666f99fdeeeeef6f6ffffffff......
        ........ff666f99feeeef6f66ff77bf........
        ........f6f66ff99ffff6ff66ff77bf........
        ........f66f6f677c7c766fffffbbbf........
        ........f6fffff777c7766f...fffff........
        ........f6f77bf77c7c766f................
        .........ff77bf74444f77f................
        ..........fbbbf4ffff447f................
        ..........ffff444444444f................
        ............f77ffffff7f.................
        .........fffffff444477bffff.............
        .........fbf444444f44477bbf.............
        .........fbb447fffff4477bbf.............
        .........fb7bb7f....f47bbff.............
        .........fb7bbff.....fbbbf..............
        .........fbfff........ffff..............
        .........ff.............................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        `,img`
        ........................................
        ........................................
        ................ffffff..................
        ...............ff4eeeff.................
        .............ff44eeeee4f................
        ............f44eeeeeeeeefff.............
        ...........ff4eeeeeeeeee4fff............
        ..........fffffffffffffffffff...........
        ..............bbbbbbbbbbb...............
        ..............fff888f888f...............
        ..............fff888f888f...............
        ...............ffffffffff............f..
        .............fffdddddddf....fffffffffbf.
        ............ff9fdddeeedf...fbfbbbbbbbbf.
        ...........f6f9ffde111effffffbbbccccccf.
        ..........f66f9fdfededef666ffbbcccffff..
        .........f666f99fdeeeeef6f6fffffff......
        .........ff666f99feeeef6f66f77bf........
        .........f66ffff99ffff6ff66f77bf........
        .........f6666f677c7c766ffffbbbf........
        .........f6fffff777c7766f..fffff........
        .........f6f77bf77c7c766f...............
        ..........ff77bff4444f77f...............
        ...........fbbbf4ffff447f...............
        ...........ffff444444444f...............
        .............f77ffffff7f................
        .............ffff44447bf................
        .............f7f7f4447bf................
        ............ff77bbffff7f................
        ............fbf7bf7bbff.................
        ............fbf4777bbf..................
        ............fbff47bbff..................
        ............ffbbf4bbff..................
        .............fff.ffff...................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`izquierda`,
    200,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -175
        mySprite.setImage(assets.image`myImage1z`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`myImage3`)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage0`)
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 12))
scene.cameraFollowSprite(mySprite)
