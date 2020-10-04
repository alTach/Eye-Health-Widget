<script>
  import {sceneStore} from "../../store/store-scene";
  import {local} from "../../store/localozation";
  import {navigate} from "svelte-routing";
  import {router} from "../../routing";

  const goToScene = (index) => {
    sceneStore.next(index);
  }

  const goHome = () => {
    navigate(router.home.path)

  }
</script>

<button class="footer__title" on:click={goHome}>
    {$local.page.scenes.footer.skip}
</button>
<div class="footer__steps">
    {#each $sceneStore.list as scene, index}
        <button class="footer__step"
                class:active={scene === $sceneStore.active}
                on:click="{ ()=>{goToScene(index)} }"></button>
    {/each}
</div>


<style lang="scss">
    @import "../../styles/variable/index";

    .footer__title {
        color: rgba($east-bay, .3);
        margin: 0 30px;
        padding: 5px;
    }

    .footer__steps {
        display: flex;
        width: 250px;
        justify-content: space-around;
    }


    .footer__step {
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

        &.active {
            background: var(--primary);

            &:before {
                background-color: white;
                width: 10px;
                height: 10px;
            }
        }

        &:not(:last-child) {
            margin-right: 10px;
        }
    }
</style>
