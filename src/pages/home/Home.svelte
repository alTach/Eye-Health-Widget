<script>
  import Countdown from "./count-down/Countdown.svelte";
  import PageHeader from "../../components/PageHeader.svelte";
  import IconSettings from "../../components/IconSettings.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import PageContainer from "../../components/PageContainer.svelte";
  import {timer} from "../../store/store-timer";
  import {onDestroy} from "svelte";
  import {get} from "svelte/store";
  import {pages, router} from "../../store/route";

  const isTimerEnd = ({totalSeconds}) => totalSeconds === 0;
  const isTimerReset = () => get(timer).totalSeconds === get(timer).native.minutes * 60;
  const goSettingPage = () => router.navigate(pages.settings);
  const goToScenePage = () => router.navigate(pages.scene);

  if (isTimerReset()) {
    timer.play();
  }

  const timerSubscription = timer.subscribe(time => {
    if (isTimerEnd(time)) {
      goToScenePage();
      timer.reset();
      timer.stop();
    }
  })


  onDestroy(timerSubscription);
</script>

<PageContainer>
    <PageHeader>
        <IconSettings on:click={goSettingPage}/>
        <CloseIcon />
    </PageHeader>

    <div class="body">
        <Countdown />
    </div>
</PageContainer>

<style lang="scss">

</style>
