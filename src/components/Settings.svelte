<script>
    import * as lang from '../i18n/en.json'

    const titles = [lang.page.settings.header.general, lang.page.settings.header.account]
    let activeTitle = titles[0];
    let activeElementLeft = 0;

    function selectActiveTitle(title, e) {
        activeTitle = title;
        activeElementLeft = e.target.offsetLeft;
    }

    // export let name;
</script>


<div class="setting">
    <div class="head">
        {#each titles as title}
            <button on:click={(e) => selectActiveTitle(title, e)} class="head__title"
                    class:active={title === activeTitle}>{title}</button>
        {/each}
        <div class="head__line" style="left: {activeElementLeft}px"></div>
    </div>
    <div class="body"></div>
</div>


<style lang="scss">
    @import "../styles/variable";

    .setting {
        padding: 0 10px;
        color: $black;
    }

    .head {
        display: flex;
        padding-bottom: 10px;
        position: relative;

        &__title {
            font-size: 18px;
            font-weight: 700;
            color: rgba($black, .3);
            cursor: pointer;
        }

        &__title:first-child {
            margin-right: 27px;
        }

        &__title.active {
            color: $black;
            cursor: default;
        }

        &__line {
            position: absolute;
            top: 100%;
            left: 0;
            width: 23px;
            height: 4px;
            background-color: $blue;;
            border-radius: 34px;
            transition: left .2s ease;
        }
    }
</style>
