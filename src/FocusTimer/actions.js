import state from "./state.js";
import * as el from "./elements.js"
import * as timer from "./timer.js"
import * as sound from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
    sound.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sound.buttonPressAudio.play()
}

export function addMinutes() {
    timer.addMinutes()
}

export function removeMinutes() {
    timer.removeMinutes()
}