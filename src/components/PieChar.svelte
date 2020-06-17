<script>
    export let name;
</script>

<svg width="50" height="50" class="animate">
    <circle r="25" cx="25" cy="25" />
</svg>


<style>

    svg {
        padding: 5px;
        transform: rotate(-90deg);
        background: yellowgreen;
        border-radius: 50%;
    }
    circle {
        fill: yellowgreen;
        stroke: #655;
        stroke-width: 50;
        stroke-dasharray: 0 158;
    }

    svg.animate circle {
        animation: fillup 5s linear infinite;
    }

    @keyframes fillup {
        to { stroke-dasharray: 158 158; }
    }
</style>
