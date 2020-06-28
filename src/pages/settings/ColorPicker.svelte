<script>
    import {createEventDispatcher} from 'svelte';
    import {colors} from '../../constant';

    const dispatch = createEventDispatcher();

    export let activeColor;
    console.log(activeColor, 12);

    function selectColor(color) {
        dispatch('color', color)
    }
</script>

<div class="colors">
    {#each colors as color}
        <button
                on:click={() => selectColor(color)}
                tabindex="{activeColor === color ? -1 : 0}"
                class:active={activeColor === color} class="{'color ' + color.className}"></button>
    {/each}
</div>


<style lang="scss">
    .colors {
        display: flex;
        margin-top: 25px;
    }

    .color {
        $circle-w: 26px;
        width: $circle-w;
        height: $circle-w;
        border-radius: 50%;
        position: relative;

        &:not(:last-child) {
            margin-right: 30px;
        }

        &:active {
            /*background: initial;*/
        }

        &:before{
            $width: 36px;
            width: $width;
            height: $width;
            margin-top: ($width - $circle-w) / -2;
            margin-left: ($width - $circle-w) / -2;
            content: '';
            display: block;
            border: solid 2px var(--black);
            box-sizing: border-box;
            opacity: 0;
            border-radius: 50%;
            transition: opacity .3s ease;
        }
        &.active:before {
            opacity: .25;
        }

        /*&.active:focus {*/
        /*    outline: none;*/
        /*}*/

        &_pink {
            background: var(--pink);
        }

        &_light-pink {
            background: var(--light-pink);
        }

        &_red {
            background: var(--red);
        }

        &_blue-light {
            background: var(--blue-light);
        }

        &_blue {
            background: var(--blue);
        }

        &_purple {
            background: var(--purple);
        }

        &_black {
            background: var(--black);
        }
    }
</style>
