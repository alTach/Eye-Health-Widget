<script>
  import {local} from "../../../store/localozation";
  import PieChar from "./PieChar.svelte";
  import {timer} from "../../../store/store-timer";
</script>

<div class="countdown">
    <div class="pie">
        <PieChar/>
    </div>
    <div class="timer">
        <div class="timer__time">{$timer}</div>
        <div class="time__title">{$local.page.countdown.timer__title}</div>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/variable/index";

    .countdown {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 106px;
    }

    .pie {
        flex-shrink: 0;
        margin-right: 25px;
    }

    .timer__time {
        font-size: 40.17px;
        font-weight: 700;
        text-align: center;
    }

    .time__title {
        color: var(--primary);
        font-weight: 600;
        font-size: 17px;
    }
</style>
