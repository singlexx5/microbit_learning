basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
})
