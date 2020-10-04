<script>
  import Countdown from "./count-down/Countdown.svelte";
  import PageHeader from "../../components/PageHeader.svelte";
  import IconSettings from "../../components/IconSettings.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import PageContainer from "../../components/PageContainer.svelte";
  import {timer} from "../../store/store-timer";
  import { navigate } from "svelte-routing";
  import {Link} from "svelte-routing";
  import {router} from "../../routing";
  import {onDestroy} from "svelte";
  import {get} from "svelte/store";

  const isTimerEnd = ({totalSeconds}) => totalSeconds === 0;
  const isTimerReset = () => get(timer).totalSeconds === get(timer).native.minutes * 60;

  if (isTimerReset()) {
    timer.play();
  }

  const timerSubscription = timer.subscribe(time => {
    if (isTimerEnd(time)) {
      navigate(router.scene.path)
      timer.reset();
      timer.stop();
    }
  })

  onDestroy(timerSubscription);
</script>

<PageContainer>
    <PageHeader>
        <Link to="{router.settings.path}"><IconSettings/></Link>
        <CloseIcon />
    </PageHeader>

    <div class="body">
        <Countdown />
    </div>
</PageContainer>

<style lang="scss">

</style>
