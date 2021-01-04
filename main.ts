// Advance to next hole
input.onButtonPressed(Button.A, function () {
    // Update Hole number
    Hole += 1
    // Reset strokes for this hole to zero
    Strokes = 0
    // Update scorecard array
    // Update scorecard array
    list[Hole] = Strokes
    // Confirm for user that they are on a new hole
    basic.showString("HOLE")
    basic.showString("" + (Hole))
    // If Total score is greater than zero, display total. This doesn't show total when starting on Hole 1.
    if (Total > 0) {
        basic.showString("TOTAL")
        basic.showString("" + (Total))
    }
    // Clear screen to save battery. Simple sleep mode.
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    // Start by showing total score.
    basic.showString("TOTAL")
    basic.showString("" + (Total))
    basic.clearScreen()
    // Loop through all holes played. Index is zero based, so need to subtract one from the total number of holes played.
    for (let index = 0; index <= Hole - 1; index++) {
        // Show Hole Number
        basic.showString("H")
        // Index is zero based, so add one to get to the hole number.
        basic.showString("" + (index + 1))
        basic.clearScreen()
        // Show Strokes for this hole.
        basic.showString("S")
        basic.showString("" + (list[index + 1]))
        // Give time to remember or jot down the value.
        basic.pause(500)
        basic.clearScreen()
    }
})
// Add Stroke to current hole
input.onButtonPressed(Button.B, function () {
    // Only update after advancing to a hole. Prevents adding to score before getting to Hole 1
    if (Hole > 0) {
        // Update current strokes
        Strokes += 1
        // Update game total
        Total += 1
        // Add to scorecard array
        // Add to scorecard array
        list[Hole] = Strokes
    }
    // Confirm for user the hole and strokes
    basic.showString("H")
    basic.showString("" + (Hole))
    basic.clearScreen()
    basic.showString("STROKES")
    basic.showString("" + (Strokes))
    basic.clearScreen()
})
let list: number[] = []
let Strokes = 0
let Hole = 0
let Total = 0
// Initialize variable vales
Total = 0
Hole = 0
Strokes = 0
list = [19, 1]
// Display program introduction so user knows counter is powered on
basic.showIcon(IconNames.QuarterNote)
basic.showString("GOLF COUNTER")
// Reduce brightness to extend battery life.
led.setBrightness(90)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
