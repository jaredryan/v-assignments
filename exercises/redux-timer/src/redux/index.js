export function startTimer() {
    console.log("start works");
    return {
        type: "START_TIMER",
    }
}

export function stopTimer() {
    console.log("stop works");
    return {
        type: "STOP_TIMER",
    }
}

export function incrementTimer() {
    console.log("increment works");
    return {
        type: "INCREMENT_TIMER",
    }
}

export function resetTimer() {
    console.log("reset works");
    return {
        type: "RESET_TIMER",
    }
}

export function lap() {
    console.log("lap works");
    return {
        type: "LAP",
    }
}

export function toggleRunning() {
    console.log("toggle running works");
    return {
        type: "TOGGLE_RUNNING",
    }
}

export default function reducer(prevState={
    seconds: 0,
    isRunning: false,
    laps: [],
    minutes: 0,
    milliseconds: 0,
    hours: 0
}, action) {
    switch (action.type) {
        case 'START_TIMER':
            if (prevState.isRunning) {
                let hours = prevState.hours;
                let seconds = prevState.seconds;
                let minutes = prevState.minutes;
                let milliseconds = prevState.milliseconds + 1;
                if (milliseconds === 100) {
                    milliseconds = 0;
                    seconds = prevState.seconds + 1;
                }
                if (seconds === 60) {
                    seconds = 0;
                    minutes = prevState.minutes + 1;
                }
                if (minutes === 60) {
                    minutes = 0;
                    hours = prevState.hours + 1;
                }
                return {
                    ...prevState,
                    seconds,
                    minutes,
                    milliseconds,
                    hours
                }
            } else {
                return prevState;
            }
        case 'STOP_TIMER':
            return {
                ...prevState,
                isRunning: false
            }
        case 'RESET_TIMER':
            return {
                ...prevState,
                seconds: 0,
                minutes: 0,
                milliseconds: 0,
                hours: 0,
                isRunning: false,
                laps: []
            }
        case 'TOGGLE_RUNNING':
            return {
                ...prevState,
                isRunning: !prevState.isRunning
            }
        case 'LAP':
            const lap =
            `${prevState.hours}:${prevState.minutes > 9 ? prevState.minutes : "0" + prevState.minutes}:${prevState.seconds > 9 ? prevState.seconds : "0" + prevState.seconds}:${prevState.milliseconds > 9 ? prevState.milliseconds : "0" + prevState.milliseconds}`
            return {
                ...prevState,
                seconds: 0,
                minutes: 0,
                milliseconds: 0,
                hours: 0,
                laps: [...prevState.laps, lap]
            }
        default:
            return prevState
    }
}
