<script>
    import { settingTimeInSecond } from '../../../store.js';
    // export let name;
</script>

<svg width="75" height="75" class="animate">
    <circle r="25" cx="50%" cy="50%" style="animation-duration: {$settingTimeInSecond}s"/>
</svg>


<style lang="scss">
    @import "../../../styles/variable";
    svg {
        padding: 8px;
        transform: rotate(-90deg);
        background: var(--primary);
        border-radius: 50%;
        box-sizing: border-box;
    }
    circle {
        fill: transparent;
        stroke: #fff;
        stroke-width: 50;
        stroke-dasharray: 0 158;
    }

    svg.animate circle {
        animation-name: fillup;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes fillup {
        to { stroke-dasharray: 158 158; }
    }
</style>
