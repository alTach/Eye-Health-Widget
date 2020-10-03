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

  const isTimerEnd = ({totalSeconds}) => totalSeconds === 0;

  const timerSubscription = timer.subscribe(time => {
    if (isTimerEnd(time)) {
      navigate(router.scene.path)
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
