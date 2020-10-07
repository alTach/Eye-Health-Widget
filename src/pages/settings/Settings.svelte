<script>
  import ColorPicker from "./ColorPicker.svelte";
  import PageHeader from "../../components/PageHeader.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import IconBack from "./IconBack.svelte";
  import BodyHead from "./body/BodyHead.svelte";
  import BodyCheckboxes from "./body/BodyCheckboxes.svelte";
  import BodyLanguages from "./body/body-languages/BodyLanguages.svelte";
  import BodyTimer from "./body/BodyTimer.svelte";
  import PageContainer from "../../components/PageContainer.svelte";
  import {pages, router} from "../../store/route";

  let isTimerChange = false;

  const goBack = () => {
    if (isTimerChange) {
      router.navigate(pages.home)
    } else {
      router.back();
    }
  }

</script>

<PageContainer>
    <PageHeader>
        <IconBack on:click={goBack}/>
        <CloseIcon/>
    </PageHeader>
    <div class="body">
        <BodyHead/>
        <BodyCheckboxes/>
        <BodyLanguages/>
        <BodyTimer on:changes={() => isTimerChange = true}/>
        <ColorPicker/>
    </div>
</PageContainer>


<style lang="scss">
    @import "../../styles/variable/index";
    .body {
        padding: 40px 16px 55px;
    }
</style>
