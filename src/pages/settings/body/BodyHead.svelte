<script>
  import {local} from "../../../store/localozation";

  // <-- tools
  const calcActiveElementLeft = () => activeElementLeft = activeElement ? activeElement.offsetLeft : 0;

  // <-- variables
  let activeElement;
  let activeElementLeft = 0;
  let activeTitleIndex = 0;

  // <-- other
  // TODO HARDCODE
  let first = true
  local.subscribe(() => {
    if (first) {
      first = false
    } else {
      setTimeout(() => {
        calcActiveElementLeft()
      }, 500)
    }
  });


  // <-- functions
  function selectActiveTitle(index, e) {
    activeTitleIndex = index;
    activeElement = e.target;
    calcActiveElementLeft();
  }
</script>


<div class="head">

    {#each $local.page.settings.header as title, index}
        <button on:click={(e) => selectActiveTitle(index, e)}
                class="head__title"
                disabled="index !== 0"
                class:active={index === activeTitleIndex}>
            {title}
        </button>
    {/each}

    <div class="head__line" style="left: {activeElementLeft}px"></div>
</div>


<style lang="scss">
    .head {
        display: flex;
        padding-bottom: 10px;
        position: relative;
        margin-bottom: 35px;
    }

    .head__title {
        font-size: 18px;
        font-weight: 700;
        color: rgba(#555D73, .3);

        &[disabled] {
            cursor: default;
        }

        &:first-child {
            margin-right: 27px;
        }

        &.active {
            color: var(--black);
            cursor: default;
        }
    }

    .head__line {
        position: absolute;
        top: 100%;
        left: 0;
        width: 23px;
        height: 4px;
        background-color: var(--primary);
        border-radius: 34px;
        transition: left .2s ease;
    }

</style>
