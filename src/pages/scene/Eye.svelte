<script>
  import * as en from "../../i18n/en.json"
  import {sceneStore} from "../../store/store-scene";
  import {trainTimeSec} from "../../constant";
  const sceneType = Object.keys(en.page.scenes.eyes);
  const animationSpeed = .8;
</script>

<div class="eye">
    <div class="shut"></div>
    <div class="ball {sceneType[$sceneStore.position]}"
    style="
    animation-name:{sceneType[$sceneStore.position]};
    animation-duration: {animationSpeed}s;
    animation-iteration-count: {trainTimeSec/(animationSpeed * 1000)};
"></div>
</div>


<style lang="scss">
    @import "src/styles/variable/index";
    $eye-w: 40px;
    .eye {
        width: $eye-w;
        height: $eye-w;
        background: white;
        transform: rotate(45deg);
        border-radius: 75% 12%;
        overflow: hidden;
    }

    .ball {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        background: $midnight;
        border-radius: 50%;
        border: 6px solid $blue-bayoux;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .shut {
        width: 150%;
        height: 33px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 2;

        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 15%;
            background: #ff6b6b;
            border-radius: 0 0 60% 60%;
            transition: .4s height ease;
        }
    }

    .eye:hover > .shut:before {
        height: 100%
    }

    .ball {
        position: relative;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes -global-nearFar {
        from {
            border-width: 6px
        }

        to {
            border-width: 2px
        }
    }
    @keyframes -global-upDown {
        from {
            top: 14px;
            left: 14px;
        }

        to {
            top: 28px;
            left: 28px;
        }
    }
    @keyframes -global-inCircle {

    }
    @keyframes -global-blink {

    }
</style>
