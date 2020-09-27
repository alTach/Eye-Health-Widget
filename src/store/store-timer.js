import {writable} from "svelte/store";

const defaultTimerTime = 1;

function createTimer(minutes) {
  const getTimeData = (minutes) => {
    console.log(minutes * 60);
    return {
      totalSeconds: minutes * 60,
      native: {
        minutes: minutes,
      },
      set minutes(minutes) {
        this.totalSeconds = minutes * 60;
        this.native.minutes = minutes;
      },
      // set seconds(seconds) {
      //   this.totalSeconds = seconds;
      // },

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
          timer.restart();
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
      timer.minutes =  timer.native.minutes
      return timer;
    }),
    increment: () => update(timer => {
      timer.minutes =  timer.native.minutes + 1
      return timer;
    }),
    decrement: () => update(timer => {
      timer.minutes =  timer.native.minutes - 1
      return timer;
    }),
  }
}

export const timer = createTimer(defaultTimerTime);
