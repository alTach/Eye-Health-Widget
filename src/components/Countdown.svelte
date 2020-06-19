<script>
    import PieChar from "./PieChar.svelte";
    import * as lang from '../i18n/en.json'

    export let name;
</script>

<div class="countdown">
    <div class="pie">
        <PieChar/>
    </div>
    <div class="timer">
        <div class="time">23:56</div>
        <div class="time__title">{lang.page.countdown.timer__title}</div>
    </div>
</div>

<style>
    .countdown {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 45px 0;
        height: 168px;
    }
    .pie {
        flex-shrink: 0;
        margin-right: 25px;
    }
    .time {
        font-size: 40.17px;
        font-weight: 700;
        color: #555D73;
        text-align: center;
    }
    .time__title {
        color: #7C8BF7;
        font-weight: 600;
        font-size: 17px;
    }
</style>
