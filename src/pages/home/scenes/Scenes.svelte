<script>
  import {local} from "../../../store/localozation";
  import Face from "./Face.svelte";

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
        <Face />
        <div class="face__info">{$local.page.scenes.eyes[titleArr]}</div>
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
    @import "../../../styles/variable";
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
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before {
            content: '';
            border-radius: 50%;
            display: block;
            background-color: var(--black);
            width: 7px;
            height: 7px;
            transition: width .1s ease, height .1s ease;
        }

        &.active{
            background: var(--primary);
            &:before {
                background-color: white;
                width: 10px;
                height: 10px;
            }
        }
    }

    .step:not(:last-child) {
        margin-right: 10px;
    }
</style>
