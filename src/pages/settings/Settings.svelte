<script>
    import * as lang from '../../i18n/en.json'
    import Checkbox from "./Checkbox.svelte";
    import TimerContorl from "./TimerContorl.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import {colors} from '../../constant';
    import PageHeader from "../../components/PageHeader.svelte";
    import CloseIcon from "../../components/CloseIcon.svelte";
    import IconBack from "./IconBack.svelte";
    import {settingPage} from "../../store";

    const titles = [lang.page.settings.header.general, lang.page.settings.header.account];

    let activeTitle = titles[0];
    let activeElementLeft = 0;

    function selectActiveTitle(title, e) {
        activeTitle = title;
        activeElementLeft = e.target.offsetLeft;
    }

    function setTime(time) {
        console.log(time);
    }

    function updateNotificationSound(e) {
        enableSoundNotification = e.detail;
    }

    let containerNode;
</script>

<div
        class="container"
        bind:this={containerNode}
        class:active={$settingPage}
        style="height: {$settingPage ? containerNode.scrollHeight : 0}px">
    <div class="setting">
        <PageHeader>
            <IconBack on:click={settingPage.close}/>
            <CloseIcon />
        </PageHeader>
        <div class="body">
            <div class="body__head body-head">
                {#each titles as title}
                    <button on:click={(e) => selectActiveTitle(title, e)} class="body-head__title"
                            class:active={title === activeTitle}>{title}</button>
                {/each}
                <div class="body-head__line" style="left: {activeElementLeft}px"></div>
            </div>
            <div class="body__checkboxes">
                <label class="body__checkbox body-checkbox">
                    <Checkbox isChecked="{true}" on:change="{updateNotificationSound}"/>
                    <span class="body-checkbox__title">{lang.page.settings.body.soundTitle}</span>
                </label>
                <!--            <label class="body__checkbox body-checkbox body-checkbox_disabled">-->
                <!--                <Checkbox isChecked="{true}" on:change="{colorTileValue}"/>-->
                <!--                <span class="body-checkbox__title">{lang.page.settings.body.colorTitle}</span>-->
                <!--            </label>-->
            </div>
            <div class="body__timer">
                {lang.page.settings.body.timerTitle} <TimerContorl on:time={setTime} /> {lang.page.settings.body.minutesMin}
            </div>
            <ColorPicker/>
        </div>
    </div>
</div>



<style lang="scss">
    @import "../../styles/variable";

    .container{
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

    .body-head {
        display: flex;
        padding-bottom: 10px;
        position: relative;
        margin-bottom: 35px;

        &__title {
            font-size: 18px;
            font-weight: 700;
            color: rgba(#555D73, .3); // TODO make other decision
            cursor: pointer;
        }

        &__title:first-child {
            margin-right: 27px;
        }

        &__title.active {
            color: var(--black);
            cursor: default;
        }

        &__line {
            position: absolute;
            top: 100%;
            left: 0;
            width: 23px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 34px;
            transition: left .2s ease;
        }
    }

    .body {
        padding: 40px 0 55px;
    }
    .body__checkboxes {
        margin-bottom: 30px;
    }
    .body__checkbox {
        display: flex;
        align-items: center;
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    .body-checkbox__title {
        margin-left: 25px;
    }

    .body__timer {
        display: flex;
        align-items: center;
        &:global .timer {
            margin: 0 15px;
        }
    }
</style>
