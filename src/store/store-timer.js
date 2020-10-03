import {writable} from "svelte/store";
import {defaultTimerTimeInMinutes, maxMinutes, minMinutes} from "../constant";

function createTimer(minutes) {
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

      pause: function() {
        clearInterval(timerId);
      },
      start: function() {
        timerId = startTimer()
      },
      restart: function() {
        this.totalSeconds = this.native.minutes * 60;
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

  function startTimer() {
    return setInterval(() => {
      update(timer => {
        if (timer.totalSeconds === 0) {
          timer.pause();
        } else {
          timer.totalSeconds = timer.totalSeconds - 1;
        }
        return timer;
      })
    }, 1000);
  }

  let timerId = startTimer();


  const {subscribe, update} = writable(getTimeData(minutes));

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
    increment: () => update(timer => {
      const minutes = timer.native.minutes + 1;
      timer.minutes = minutes > maxMinutes ? maxMinutes : minutes;
      return timer;
    }),
    decrement: () => update(timer => {
      const minutes = timer.native.minutes - 1;
      timer.minutes = minutes < minMinutes ? minMinutes : minutes;
      return timer;
    }),
  }
}

export const timer = createTimer(defaultTimerTimeInMinutes);
