input.onButtonPressed(Button.A, function () {
    step = 0
})
let step = 0
step = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        step += 1
        basic.showNumber(step)
    }
})
