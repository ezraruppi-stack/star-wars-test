function spieleTeil (noten: number[][], modus: string) {
    for (let i = 0; i <= noten.length - 1; i++) {
        freq = noten[i][0]
        dauer = noten[i][1]
        if (freq == 0) {
            basic.clearScreen()
            maqueen.motorStop(maqueen.Motors.All)
            music.rest(dauer)
        } else {
            bewegeMaqueen(i, modus)
            if (modus == "imperium") {
                if (i % 2 == 0) {
                    imperium.showImage(0, 0)
                } else {
                    basic.clearScreen()
                }
            } else if (modus == "vader") {
                if (i % 2 == 0) {
                    vader.showImage(0, 0)
                } else {
                    imperium.showImage(0, 0)
                }
            } else if (modus == "schwert") {
                if (i % 2 == 0) {
                    schwert.showImage(0, 0)
                } else {
                    vader.showImage(0, 0)
                }
            } else if (modus == "block") {
                if (i % 2 == 0) {
                    block.showImage(0, 0)
                } else {
                    basic.clearScreen()
                }
            } else if (modus == "spitzhacke") {
                if (i % 2 == 0) {
                    spitzhacke.showImage(0, 0)
                } else {
                    block.showImage(0, 0)
                }
            } else if (modus == "creeper") {
                if (i % 2 == 0) {
                    creeper.showImage(0, 0)
                } else {
                    spitzhacke.showImage(0, 0)
                }
            } else if (modus == "walker") {
                if (i % 2 == 0) {
                    walkerLogo.showImage(0, 0)
                } else {
                    basic.clearScreen()
                }
            } else if (modus == "headlights") {
                if (i % 2 == 0) {
                    scheinwerfer.showImage(0, 0)
                } else {
                    walkerLogo.showImage(0, 0)
                }
            } else if (modus == "blitz") {
                if (i % 2 == 0) {
                    blitz.showImage(0, 0)
                } else {
                    scheinwerfer.showImage(0, 0)
                }
            } else {
                zeigeBalken(freq)
            }
            music.playTone(freq, dauer)
        }
    }
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < 10; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        music.play(music.stringPlayable("C5 B A G F E D C ", 1000), music.PlaybackMode.UntilDone)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        music.play(music.stringPlayable("C D E F G A B C5 ", 1000), music.PlaybackMode.UntilDone)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
function zeigeBalken (frequenz: number) {
    basic.clearScreen()
    hoehe = 1
    if (frequenz >= 700) {
        hoehe = 5
    } else if (frequenz >= 550) {
        hoehe = 4
    } else if (frequenz >= 450) {
        hoehe = 3
    } else if (frequenz >= 350) {
        hoehe = 2
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= hoehe - 1; y++) {
            if ((x == 0 || x == 4) && y == hoehe - 1 && hoehe > 1) {
                continue;
            }
            led.plot(x, 4 - y)
        }
    }
}
function bewegeMaqueen (schritt: number, modus: string) {
    if (schritt % 2 == 0) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (modus == "imperium") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
    } else if (modus == "equalizer") {
        if (schritt % 4 < 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 70)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 70)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
        }
    } else if (modus == "vader") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 80)
    } else if (modus == "schwert") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 110)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 110)
    } else if (modus == "block") {
        if (schritt % 2 == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 75)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 75)
        }
    } else if (modus == "spitzhacke") {
        if (schritt % 2 == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 65)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 65)
        }
    } else if (modus == "creeper") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 70)
    } else if (modus == "walker") {
        if (schritt % 4 < 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 85)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 85)
        }
    } else if (modus == "headlights") {
        if (schritt % 2 == 0) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    } else if (modus == "blitz") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
}
input.onButtonPressed(Button.A, function () {
    music.setTempo(105)
    basic.showString("STAR WARS")
    imperium = images.createImage(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
    vader = images.createImage(`
        . # # # .
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        `)
    schwert = images.createImage(`
        . . . . #
        . . . # .
        . . # . .
        # # . . .
        # . . . .
        `)
    h = music.beat(BeatFraction.Half)
    q = music.beat(BeatFraction.Quarter)
    e = music.beat(BeatFraction.Eighth)
    s = music.beat(BeatFraction.Sixteenth)
    w = music.beat(BeatFraction.Whole)
    qd = q + e
    teil1 = [
    [392, h],
    [392, h],
    [392, h],
    [311, qd],
    [466, e],
    [392, h],
    [311, qd],
    [466, e],
    [392, w],
    [587, h],
    [587, h],
    [587, h],
    [622, qd],
    [466, e],
    [370, h],
    [311, qd],
    [466, e],
    [392, w]
    ]
    teil2a = [
    [784, h],
    [392, qd],
    [392, e],
    [784, h],
    [740, qd],
    [698, e],
    [659, s],
    [622, s],
    [659, e],
    [0, e],
    [415, e],
    [554, h],
    [523, qd],
    [494, e],
    [466, s],
    [440, s],
    [466, e],
    [0, e],
    [311, e],
    [370, h],
    [311, qd],
    [370, e],
    [466, h],
    [392, qd],
    [466, e],
    [587, w]
    ]
    teil2b = [
    [784, h],
    [392, qd],
    [392, e],
    [784, h],
    [740, qd],
    [698, e],
    [659, s],
    [622, s],
    [659, e],
    [0, e],
    [415, e],
    [554, h],
    [523, qd],
    [494, e],
    [466, s],
    [440, s],
    [466, e],
    [0, e],
    [311, e],
    [370, h],
    [311, qd],
    [466, e],
    [392, h],
    [311, qd],
    [466, e],
    [392, w]
    ]
    finale = [
    [392, h],
    [392, h],
    [392, h],
    [311, qd],
    [466, e],
    [392, h],
    [311, qd],
    [466, e],
    [392, w],
    [587, h],
    [587, h],
    [587, h],
    [622, qd],
    [466, e],
    [370, h],
    [311, qd],
    [466, e],
    [392, w],
    [392, q],
    [311, e],
    [466, e],
    [392, q],
    [311, e],
    [466, e],
    [392, w + h]
    ]
    spieleTeil(teil1, "imperium")
    spieleTeil(teil2a, "equalizer")
    spieleTeil(teil2b, "vader")
    spieleTeil(finale, "schwert")
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    vader.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    music.setTempo(105)
    basic.showString("HEADLIGHTS")
    walkerLogo = images.createImage(`
        . # . # .
        # . # . #
        # # # # #
        # . # . #
        . . . # .
        `)
    scheinwerfer = images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        . # . # .
        # # # # #
        `)
    blitz = images.createImage(`
        . . # # .
        . # # . .
        . # # # #
        . . # # .
        . . # . .
        `)
    h = music.beat(BeatFraction.Half)
    q = music.beat(BeatFraction.Quarter)
    e = music.beat(BeatFraction.Eighth)
    w = music.beat(BeatFraction.Whole)
    qd = q + e
    teil1 = [
    [440, e],
    [587, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [392, q],
    [0, e],
    [392, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [440, e],
    [494, e],
    [440, q],
    [0, e],
    [440, e],
    [587, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [392, q],
    [0, e],
    [392, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [440, e],
    [494, e],
    [440, h]
    ]
    teil2a = [
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [523, e],
    [659, qd],
    [0, e],
    [659, e],
    [659, e],
    [659, e],
    [784, e],
    [784, e],
    [784, e],
    [587, e],
    [523, e],
    [494, q],
    [587, e],
    [587, e],
    [587, e],
    [784, e],
    [784, e],
    [784, e],
    [587, e],
    [523, e],
    [494, q],
    [587, e],
    [587, e],
    [587, e],
    [784, e],
    [784, e],
    [784, e],
    [494, e],
    [494, e],
    [440, q]
    ]
    teil2b = [
    [440, e],
    [587, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [392, q],
    [0, e],
    [440, e],
    [587, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [392, q],
    [0, e],
    [440, e],
    [587, e],
    [523, e],
    [494, e],
    [494, e],
    [494, e],
    [494, e],
    [392, q],
    [0, e],
    [494, e],
    [494, e],
    [440, e],
    [494, e],
    [523, e],
    [494, e],
    [440, h]
    ]
    finale = [
    [494, e],
    [440, e],
    [587, q],
    [587, q],
    [494, e],
    [440, e],
    [392, h],
    [494, e],
    [440, e],
    [587, q],
    [587, q],
    [494, e],
    [440, e],
    [392, h],
    [440, e],
    [392, e],
    [587, q],
    [587, q],
    [523, e],
    [494, e],
    [440, w]
    ]
    spieleTeil(teil1, "walker")
    spieleTeil(teil2a, "equalizer")
    spieleTeil(teil2b, "headlights")
    spieleTeil(finale, "blitz")
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    walkerLogo.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(84)
    basic.showString("MINECRAFT")
    block = images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    spitzhacke = images.createImage(`
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        . . # . .
        `)
    creeper = images.createImage(`
        # # . # #
        # # . # #
        . . # . .
        . # # # .
        . # . # .
        `)
    h = music.beat(BeatFraction.Half)
    q = music.beat(BeatFraction.Quarter)
    e = music.beat(BeatFraction.Eighth)
    w = music.beat(BeatFraction.Whole)
    teil1 = [
    [330, e],
    [494, e],
    [330, e],
    [494, e],
    [330, e],
    [392, e],
    [523, e],
    [494, e],
    [392, q],
    [330, e],
    [494, e],
    [330, e],
    [494, e],
    [330, e],
    [392, e],
    [523, e],
    [494, e],
    [392, q]
    ]
    teil2a = [
    [370, q],
    [330, e],
    [370, e],
    [392, q],
    [494, q],
    [659, h],
    [587, q],
    [494, q],
    [370, q],
    [330, e],
    [370, e],
    [330, w]
    ]
    teil2b = [
    [494, q],
    [392, e],
    [370, e],
    [392, q],
    [494, q],
    [659, h],
    [587, q],
    [494, q],
    [370, q],
    [330, q],
    [294, h]
    ]
    finale = [
    [330, e],
    [494, e],
    [330, e],
    [494, e],
    [330, e],
    [392, e],
    [523, e],
    [494, e],
    [392, q],
    [330, w]
    ]
    spieleTeil(teil1, "block")
    spieleTeil(teil2a, "equalizer")
    spieleTeil(teil2b, "spitzhacke")
    spieleTeil(finale, "creeper")
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    creeper.showImage(0)
})
/**
 * ==========================================
 * 
 * KNOPF A: STAR WARS
 * 
 * ==========================================
 */
/**
 * ==========================================
 * 
 * KNOPF B: MINECRAFT
 * 
 * ==========================================
 */
/**
 * ==========================================
 * 
 * KNOPF A+B: ALAN WALKER - HEADLIGHTS
 * 
 * ==========================================
 */
/**
 * ==========================================
 * 
 * HINDERNISSENSOR
 * 
 * ==========================================
 */
/**
 * ==========================================
 */
/**
 * VARIABLEN & START
 */
/**
 * ==========================================
 */
let finale: number[][] = []
let teil2b: number[][] = []
let teil2a: number[][] = []
let teil1: number[][] = []
let qd = 0
let w = 0
let s = 0
let e = 0
let q = 0
let h = 0
let hoehe = 0
let blitz: Image = null
let scheinwerfer: Image = null
let walkerLogo: Image = null
let creeper: Image = null
let spitzhacke: Image = null
let block: Image = null
let schwert: Image = null
let vader: Image = null
let imperium: Image = null
let dauer = 0
let freq = 0
basic.showString("A/B/A+B")
basic.forever(function () {
    if (maqueen.Ultrasonic() < 15) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
    }
})
