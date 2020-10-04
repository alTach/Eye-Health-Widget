<script>
  import Face from "./Face.svelte";
  import {sceneStore} from "../../store/store-scene";
  import {get} from "svelte/store";
  import {navigate} from "svelte-routing";
  import {router} from "../../routing";

  const nextScene = () => {
    const storeData = get(sceneStore);
    const isSceneEnd = storeData.position === (storeData.list.length - 1);
    if (isSceneEnd) {
      sceneStore.reset(false);
      navigate(router.home.path);
    } else {
      sceneStore.next();
    }
  }
</script>


<Face />
<div class="scene__info">{$sceneStore.active}</div>
<button class="scene__next" on:click={nextScene}></button>


<style lang="scss">
    @import "../../styles/variable/index";

    $next-btn-w: 50px;

    .scene__info {
        text-align: center;
        margin-top: 25px;
        font-weight: 500;

        width: calc(100% - #{$next-btn-w});
        margin-left: auto;
        margin-right: auto;
    }


    .scene__next {
        width: $next-btn-w;
        height: $next-btn-w;
        background: $white;
        box-shadow: 0 2px 10px -5px black;
        border: 1px solid rgba($back, .04);
        box-sizing: border-box;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        right: 0;
        &:active {
            box-shadow: 0 0px 0px 1px rgba($back, .04);
        }
    }

</style>
