<script>
  import PageHeader from "../../components/PageHeader.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import IconSettings from "../../components/IconSettings.svelte";
  import Countdown from "../home/count-down/Countdown.svelte";
  import Scenes from "./Scenes.svelte";
  import PageContainer from "../../components/PageContainer.svelte";
  import {router} from "../../routing";
  import {Link} from "svelte-routing";


</script>

<PageContainer>
    <PageHeader>
        <Link to="{router.settings.path}">
            <IconSettings/>
        </Link>
        <CloseIcon/>
    </PageHeader>

    <div class="body">
        <Countdown/>
        <Scenes/>
    </div>
</PageContainer>

<style lang="scss">

</style>
