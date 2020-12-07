radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        isLock = 0
    } else {
        isLock = 1
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    playCanon();
})
let isLock = 0
isLock = 1
radio.setGroup(62)
const checkIsLock = (isPlayMelody = false) => {
    if(isLock == 1){
        basic.showIcon(IconNames.No)
        if(isPlayMelody) {
            // playCanon();
            basic.showIcon(IconNames.Sad)
            playAlarm();
        }
    } else {
        basic.showIcon(IconNames.Yes)
    }
}
let playAlarm = function() {
    music.playMelody("G - G - G - G - ", 120)
}
let playCanon = function () {
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        checkIsLock();
    } else {
        checkIsLock(true);
    }
})
