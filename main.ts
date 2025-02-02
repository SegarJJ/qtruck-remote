handlebit.onHandleButtonPressed(handlebit.HandleButton.B2, function () {
    radio.sendNumber(2)
})
function TruckTurn (num: number) {
    radio.sendValue("56", num)
}
function ArmTurn (num: number) {
    radio.sendValue("90", num)
}
function ArmLift (num: number) {
    radio.sendValue("78", num)
}
function Position () {
    LX = pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X1),
    0,
    255,
    -5,
    5
    )
    LY = pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y1),
    0,
    255,
    -5,
    5
    )
    RX = pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_X2),
    0,
    255,
    -5,
    5
    )
    RY = pins.map(
    handlebit.handle_getHandleSensorValue(handlebit.HandleSensorValue.JOYSTICK_Y2),
    0,
    255,
    -5,
    5
    )
}
function TruckDrive (num: number) {
    radio.sendValue("34", num)
}
handlebit.onHandleButtonPressed(handlebit.HandleButton.B1, function () {
    radio.sendNumber(1)
})
let RY = 0
let RX = 0
let LY = 0
let LX = 0
handlebit.handlebitInit()
let RadioGroup = 1
radio.setGroup(RadioGroup)
basic.showNumber(RadioGroup)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    Position()
    if (LX != 0) {
        TruckTurn(LX)
        basic.showString("LX")
    }
    if (LY != 0) {
        TruckDrive(LY)
        basic.showString("LY")
    }
    if (RX != 0) {
        ArmTurn(RX)
        basic.showString("RX")
    }
    if (RY != 0) {
        ArmLift(RY)
        basic.showString("RY")
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
