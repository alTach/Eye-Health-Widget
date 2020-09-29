<script>
  import Eye from "./Eye.svelte";
  import {trainTimeSec} from "../../../constant";

  const rotateStart = 45;
  const rotateEnd = 405;
  let rotate = rotateStart;

  const startTraining = () => {
    rotate = rotateEnd;
    setTimeout(() => {
      rotate = rotateStart;
    }, trainTimeSec * 1000)
  }

  setTimeout(() => {
    startTraining();
  })
</script>

<div class="face">
    <div class="face__eyes">
        <Eye />
        <Eye />
    </div>
    <div class="face__moon" style="transform: rotate({rotate}deg);transition-duration: {trainTimeSec}s;;"></div>
</div>


<style lang="scss">
    @import "../../../styles/variable";
    $face-w: 150px;
    .face {
        width: $face-w;
        height: $face-w;
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
