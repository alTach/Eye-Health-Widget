<script>
    import PieChar from "./PieChar.svelte";
    import * as lang from '../../../i18n/en.json'
    import {settingTimeFormatted} from '../../../store.js';
</script>

<div class="countdown">
    <div class="pie">
        <PieChar/>
    </div>
    <div class="timer">
        <div class="time">{$settingTimeFormatted}</div>
        <div class="time__title">{lang.page.countdown.timer__title}</div>
    </div>
</div>

<style lang="scss">
    @import "../../../styles/variable";

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

    .time {
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
