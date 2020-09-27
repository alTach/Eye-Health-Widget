<script>
  import {timer} from "../../../store/store-timer";

  let timerMinutes = $timer.native.minutes;
  let totalSeconds = $timer.totalSeconds;
  let step = 0;

  const dashArrayMax = 158;
  let dashArrayValue = 0;


  const isNewTimer = (timer) => {
    return timerMinutes !== timer.native.minutes || timer.totalSeconds === totalSeconds;
  }

  const getStep = (seconds) => {
    return +parseFloat(dashArrayMax / seconds).toFixed(2);
  }

  const resetCountDown = (timer) => {
    timerMinutes = timer.native.minutes;
    totalSeconds = timer.native.minutes * 60;
    dashArrayValue = 0;
    step = getStep(timer.totalSeconds)
  }

  timer.subscribe((timer) => {
    if (isNewTimer(timer)) {
      resetCountDown(timer);
    } else {
      dashArrayValue += step;
    }
  })
</script>

<svg width="75" height="75" class="animate">
    <circle r="25" cx="50%" cy="50%" style="stroke-dasharray: {dashArrayValue} {dashArrayMax}"/>
</svg>


<style lang="scss">
    @import "../../../styles/variable";

    svg {
        padding: 8px;
        transform: rotate(-90deg);
        background: var(--primary);
        border-radius: 50%;
        box-sizing: border-box;
    }

    circle {
        fill: transparent;
        stroke: #fff;
        stroke-width: 50;
    }
</style>
