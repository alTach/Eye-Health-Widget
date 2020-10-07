<script>
  import PageHeader from "../../components/PageHeader.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import IconSettings from "../../components/IconSettings.svelte";
  import Scenes from "./Scenes.svelte";
  import PageContainer from "../../components/PageContainer.svelte";
  import {pages, router} from "../../store/route";
  const goSetting = () => router.navigate(pages.settings);


</script>

<PageContainer>
    <PageHeader>
        <IconSettings on:click={goSetting}/>
        <CloseIcon/>
    </PageHeader>

    <div class="body">
        <Scenes/>
    </div>
</PageContainer>

<style lang="scss">

</style>
