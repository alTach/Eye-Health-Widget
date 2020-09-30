<script>
  import ColorPicker from "./ColorPicker.svelte";
  import PageHeader from "../../components/PageHeader.svelte";
  import CloseIcon from "../../components/CloseIcon.svelte";
  import IconBack from "./IconBack.svelte";
  import BodyHead from "./body/BodyHead.svelte";
  import BodyCheckboxes from "./body/BodyCheckboxes.svelte";
  import BodyLanguages from "./body/BodyLanguages.svelte";
  import BodyTimer from "./body/BodyTimer.svelte";
  import {settingPage} from "../../store/store";


  let containerNode;
</script>

<div class="container"
     bind:this={containerNode}
     class:active={$settingPage}
     style="height: {$settingPage ? containerNode.scrollHeight : 0}px">
    <div class="setting">
        <PageHeader>
            <IconBack on:click={settingPage.close}/>
            <CloseIcon/>
        </PageHeader>
        <div class="body">
            <BodyHead/>
            <BodyCheckboxes/>
            <BodyLanguages/>
            <BodyTimer/>
            <ColorPicker/>
        </div>
    </div>
</div>


<style lang="scss">
    @import "../../styles/variable";

    .container {
        position: relative;
        left: 10px;
        transition: left .2s ease, height .2s ease;

        &:not(.active) {
            padding: 0;
        }

        &.active {
            left: -100%;
        }
    }

    .setting {
        width: 100%;
    }

    .body {
        padding: 40px 0 55px;
    }
</style>
