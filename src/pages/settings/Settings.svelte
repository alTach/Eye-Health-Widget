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
  import {Link} from "svelte-routing";
  import {router} from "../../routing";
</script>

<PageContainer>
    <PageHeader>
        <Link to="{router.home.path}"><IconBack/></Link>
        <CloseIcon/>
    </PageHeader>
    <div class="body">
        <BodyHead/>
        <BodyCheckboxes/>
        <BodyLanguages/>
        <BodyTimer/>
        <ColorPicker/>
    </div>
</PageContainer>


<style lang="scss">
    @import "../../styles/variable/index";
    .body {
        padding: 40px 16px 55px;
    }
</style>
