<script>
  import {timer} from "../../../store/store-timer";
  import {onDestroy} from "svelte";

  const subscribeToTimer = () => timer.subscribe((timer) => timerChangesHandler(timer));
  const timerChangesHandler = (timer) => isNewTimer(timer) ? initWatch(timer) : doStep();
  const isNewTimer = (timer) => isTimeChangedFromSetting(timer) || didTheTimerStart(timer);
  const isTimeChangedFromSetting = (timer) => localTimerMinutes !== timer.native.minutes;
  const didTheTimerStart = (timer) => localTotalSeconds === timer.totalSeconds;
  const initWatch = (timer) => {
    resetTimerMinutes(timer);
    resetTimerSeconds(timer);
    initStep();
    initDashArray(timer);
  }
  const resetTimerMinutes = (timer) => localTimerMinutes = timer.native.minutes;
  const resetTimerSeconds = (timer) => localTotalSeconds = timer.native.minutes * 60;
  const initStep = () => step = getStep();
  const initDashArray = (timer) => clockArrowPositionStart = didTheTimerStart(timer) ? 0 : getSkippedDashArrayValue(timer);
  const getStep = () => +parseFloat(clockArrowPositionMax / localTotalSeconds).toFixed(2);
  const getSkippedDashArrayValue = (timer) => {
    const skippedStepCount = localTotalSeconds - timer.totalSeconds;
    return skippedStepCount * step; // 🕗
  };
  const doStep = () => clockArrowPositionStart += step;

  // <-- variable
  let localTimerMinutes = 0;
  let localTotalSeconds = 0;
  let clockArrowPositionStart = 0;
  const clockArrowPositionMax = 158;
  let step = 0;

  // <-- subscription
  let timerSubscriber = subscribeToTimer();

  onDestroy(timerSubscriber);
</script>

<svg width="75" height="75" class="animate">
    <circle r="25" cx="50%" cy="50%" style="stroke-dasharray: {clockArrowPositionStart} {clockArrowPositionMax}"/>
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
