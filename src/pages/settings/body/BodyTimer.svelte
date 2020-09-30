<script>
  import {local} from "../../../store/localozation";
  import TimerContorl from "../TimerContorl.svelte";
</script>


<div class="body__timer">
    {$local.page.settings.body.timerTitle} <TimerContorl/> {$local.page.settings.body.minutesMin}
</div>


<style lang="scss">
    .body__timer {
        display: flex;
        align-items: center;
        &:global .timer {
            margin: 0 15px;
        }
    }
</style>
