basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(100)
        music.playTone(247, music.beat(BeatFraction.Double))
        basic.pause(100)
        music.playTone(247, music.beat(BeatFraction.Double))
        basic.pause(100)
        music.playTone(247, music.beat(BeatFraction.Double))
        basic.pause(100)
        music.playTone(247, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Double))
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Double))
    }
})
