<script>
  import {colors} from "../../store/store-color";
  import {primaryColor} from "../../store/store-color";

  function selectPrimaryColor(color) {
    if ($primaryColor !== color) {
      primaryColor.set(color)
    }
  }

  primaryColor.subscribe(data => {
    const html = document.querySelector('html');
    html.setAttribute('data-primary', data.className);
  })
</script>

<div class="colors">
    {#each $colors as color}
        <button
                on:click={() => selectPrimaryColor(color)}
                tabindex="{$primaryColor === color ? -1 : 0}"
                class:active={$primaryColor === color} class="{'color ' + color.className}"></button>
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

        &:before {
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
