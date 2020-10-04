<script>
  import Eye from "./Eye.svelte";
  import {faceMoonRotate} from "../../store/sore-moon";
  import {onDestroy} from "svelte";
  import {sceneStore} from "../../store/store-scene";

  sceneStore.play();

  onDestroy(() => sceneStore.stop());
</script>

<div class="face">
    <div class="face__eyes">
        <Eye />
        <Eye />
    </div>
    <div class="face__moon" style="transform: rotate({$faceMoonRotate}deg)"></div>
</div>


<style lang="scss">
    @import "../../styles/variable/index";
    $face-w: 150px;
    .face {
        width: $face-w;
        height: $face-w;
        margin: 0 auto;
        background-color: var(--primary);
        border-radius: 50%;
        position: relative;
        &__eyes {
            display: flex;
            justify-content: space-between;
            width: 75%;
            margin: 0 auto;
            position: relative;
            top: 34px;
        }
        &__moon {
            width: 10px;
            height: 10px;
            background: var(--primary);
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 10px;
            transform: rotate(45deg);
            transform-origin: 65px 65px;
            transition-property: transform;
            transition-timing-function: linear;
        }
    }
</style>
