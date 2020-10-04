import {writable} from "svelte/store";
import {defaultTimerTimeInMinutes, maxMinutes, minMinutes} from "../constant";

function createTimer(minutes) {
  let timerId;

  const getTimeData = (minutes) => {
    return {
      totalSeconds: minutes * 60,
      native: {
        minutes: minutes,
      },
      set minutes(minutes) {
        this.totalSeconds = minutes * 60;
        this.native.minutes = minutes;
      },
      toString: function() {
        const minutes = parseInt(this.totalSeconds / 60, 10);
        const seconds = parseInt(this.totalSeconds % 60, 10);

        const minutesStr = minutes < 10 ? "0" + minutes : minutes;
        const secondsStr = seconds < 10 ? "0" + seconds : seconds;

        return minutesStr + ":" + secondsStr
      },
      valueOf: undefined
    }
  }

  const {subscribe, update} = writable(getTimeData(minutes));

  function increment() {
    update(timer => {
      const minutes = timer.native.minutes + 1;
      timer.minutes = minutes > maxMinutes ? maxMinutes : minutes;
      return timer;
    });
  }

  function decrement() {
    update(timer => {
      const minutes = timer.native.minutes - 1;
      timer.minutes = minutes < minMinutes ? minMinutes : minutes;
      return timer;
    });
  }

  function play() {
    timerId = setInterval(() => {
      update(timer => {
        const isTimerEnd = () => timer.totalSeconds === 0;
        isTimerEnd() ? stop() : timer.totalSeconds--;
        return timer;
      })
    }, 1000);
  }

  function reset() {
    update(timer => {
      timer.totalSeconds = timer.native.minutes * 60;
      return timer;
    })
  }

  return {
    subscribe,
    set: () => update(timer => {
      if (timer.native.minutes < minMinutes) {
        timer.minutes = minMinutes
      } else if (timer.native.minutes > maxMinutes) {
        timer.minutes = maxMinutes;
      } else {
        timer.minutes =  timer.native.minutes
      }
      return timer;
    }),
    play,
    stop: () => clearInterval(timerId),
    reset,
    increment,
    decrement,
  }
}

export const timer = createTimer(defaultTimerTimeInMinutes);
