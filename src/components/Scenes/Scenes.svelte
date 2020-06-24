<script>
    import * as lang from '../../i18n/en.json'

    let activeScene = "nearFar";
    const titleArr = {
        "nearFar": "",
        "upDown": "",
        "inCircle": "",
        "blink": "",
    };

    function selectActive(key) {
        activeScene = key;
    }

</script>

<div class="scenes">
    <div class="scenes__body">
        <div class="face">
            <div class="face__eye"></div>
        </div>
        <div class="face__info">{lang.page.scenes.eyes[titleArr]}</div>
        <div class="face__next"></div>
    </div>
    <div class="scenes__footer scenes-footer">
        <div class="scenes-footer__title">Skip</div>
        <div class="scenes-footer__steps">
            {#each Object.keys(titleArr) as key}
                <div class="step" class:active={key === activeScene} on:click="{ ()=>{selectActive(key)} }"></div>
            {/each}
        </div>
    </div>

</div>

<style lang="scss">
    @import "../../styles/variable";
    .face {
        width: 150px;
        height: 150px;
        background-color: $blue;
        border-radius: 50%;
    }

    .scenes-footer {
        $left: 40px;
        padding: 35px 0;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            height: 2px;
            background-color: gray;
            top: 0;
            left: -$left;
            display: block;
            width: calc(100% + #{$left * 2});
        }
    }

    .scenes__footer {
        display: flex;
        align-items: center;
    }

    .scenes-footer__steps {
        display: flex;
        width: 250px;
        justify-content: space-around;
    }

    .scenes-footer__title {
        padding: 0 35px;
    }

    .step {
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        &:before {
            content: '';
            border-radius: 50%;
            display: block;
            background-color: gray;
            width: 7px;
            height: 7px;
        }

        &.active:before {
            background-color: white;
            width: 10px;
            height: 10px;
            box-shadow: 0 0 0px 5px #d94e4e;
        }
    }

    .step:not(:last-child) {
        margin-right: 10px;
    }
</style>
