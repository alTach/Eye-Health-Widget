<script>
  import {local} from "../../../store/localozation";
  import TimerControl from "../TimerControl.svelte";
  import {createEventDispatcher} from "svelte";
  const dispatcher = createEventDispatcher();
</script>


<div class="body__timer">
    {$local.page.settings.body.timerTitle}
    <TimerControl on:changes={() => dispatcher('changes')}/>
    {$local.page.settings.body.minutesMin}
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
