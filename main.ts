// Temperaturanzeige Bonus 2
basic.forever(function () {
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 15) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() == Math.constrain(input.temperature(), 15, 25)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
