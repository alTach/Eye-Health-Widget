import {derived, writable} from "svelte/store";
import {colors} from "./constant";

function createSettingTime(duration) {
    const {subscribe, set, update} = writable(duration);
    return {
        subscribe,
        set,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
    }
}
function createPrimaryColor(color) {
    const {subscribe, set} = writable(color);
    return {
        subscribe,
        set,
    }
}
function toggleSettingPage(state) {
    const {subscribe, set, update} = writable(state);
    return {
        subscribe,
        set,
        open: () => set(true),
        close: () => set(false),
        toggle: () => update(val => !val)
    }
}

export const enableSoundNotification = true
export const settingTime = createSettingTime(20);
export const primaryColor = createPrimaryColor(colors[0]);
export const settingPage = toggleSettingPage(false);
export const settingTimeInSecond = derived(settingTime, $settingTime => $settingTime * 60);
export const settingTimeFormatted = derived(
    settingTimeInSecond,
    $settingTimeInSecond => {
        let minutes = parseInt($settingTimeInSecond / 60, 10)
        let seconds = parseInt($settingTimeInSecond % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return minutes + ":" + seconds
    }
);


// var timer = duration;
//
// setInterval(function () {
//     set();
//     if (--timer < 0) {
//         timer = duration;
//     }
// }, 1000);
