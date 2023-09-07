import state from "./state.js";
import * as el from "./elements.js"
import { reset } from "./actions.js";
import { resetAudio } from "./sounds.js";

export function countDown() {
    if(!state.isRunning) {
        return
    }
    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        resetAudio.play()
        return
    }

    updateDisplay(minutes, seconds)
    setTimeout(() => countDown(), 1000)
}

export function addMinutes(minutes) {
    if(el.minutes.textContent >= 60 || state.isRunning == true) {
        
        return
    }

    minutes = Number(el.minutes.textContent) + 5
    updateDisplay(minutes)
}

export function removeMinutes(minutes) {
    if(el.minutes.textContent <= 5 || state.isRunning == true) {
        return
    }
    
    minutes = Number(el.minutes.textContent) - 5
    updateDisplay(minutes)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}