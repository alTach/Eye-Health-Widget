<script>
  import {timer} from "../../../store/store-timer";
  import {onDestroy} from "svelte";

  const subscribeToTimer = () => timer.subscribe((timer) => timerChangesHandler(timer));
  const timerChangesHandler = (timer) => isNewTimer(timer) ? initWatch(timer) : doStep();
  const isNewTimer = (timer) => isTimeChangedFromSetting(timer) || didTheTimerStart(timer);
  const isTimeChangedFromSetting = (timer) => timerMinutes !== timer.native.minutes;
  const didTheTimerStart = (timer) => totalSeconds === timer.totalSeconds;
  const initWatch = (timer) => {
    resetTimerMinutes(timer);
    resetTimerSeconds(timer);
    initStep();
    initDashArray(timer);
  }
  const resetTimerMinutes = (timer) => timerMinutes = timer.native.minutes;
  const resetTimerSeconds = (timer) => totalSeconds = timer.native.minutes * 60;
  const initStep = () => step = getStep();
  const initDashArray = (timer) => dashArrayValue = didTheTimerStart(timer) ? 0 : getSkippedDashArrayValue(timer);
  const getStep = () => +parseFloat(dashArrayMax / totalSeconds).toFixed(2);
  const getSkippedDashArrayValue = (timer) => {
    const skippedStepCount = totalSeconds - timer.totalSeconds;
    return skippedStepCount * step; // 🕗
  };
  const doStep = () => dashArrayValue += step;

  // <-- constant
  const dashArrayMax = 158;

  // <-- variable
  let timerMinutes = 0;
  let totalSeconds = 0;
  let dashArrayValue = 0;
  let step = 0;

  // <-- subscription
  let timerSubscriber = subscribeToTimer();

  onDestroy(timerSubscriber);
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
