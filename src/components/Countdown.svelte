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
    }
    .pie {
        flex-shrink: 0;
        margin-right: 25px;
    }
</style>
