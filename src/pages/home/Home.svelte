<script>
    import Countdown from "./count-down/Countdown.svelte";
    import Scenes from "./scenes/Scenes.svelte";
    import PageHeader from "../../components/PageHeader.svelte";
    import IconSettings from "../../components/IconSettings.svelte";
    import CloseIcon from "../../components/CloseIcon.svelte";
    import {settingPage} from "../../store";

    function onSettingClick() {
        settingPage.toggle();
    }
</script>

<div class="container" class:active={!$settingPage}>
    <div class="home">
        <PageHeader>
            <IconSettings on:click={onSettingClick}/>
            <CloseIcon />
        </PageHeader>

        <div class="body">
            <Countdown />
<!--            <Scenes />-->
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        .home{
            position: relative;
            left: -50%;
            transition: left .2s ease;
        }

        &.active .home{
            left: 0;
        }
    }
    .home {
        width: 100%;
    }
</style>
