<script>
  import { activeLanguage } from "../../../../store/localozation";
  import { createEventDispatcher } from 'svelte';
  import {get} from "svelte/store";
  const dispatch = createEventDispatcher();

  const isItemActive = () => item === get(activeLanguage)

  export let item;

  $: {
    if ( isItemActive() && selectedElement) {
      dispatchSelectedLang();
    }
  }

  const setSelectedElement = (e) => selectedElement = e.target;
  const selectActiveLang = (lang) => activeLanguage.set(lang);
  const dispatchSelectedLang = () => dispatch('select', selectedElement)

  let selectedElement;

  function selectElement(e, lang) {
    setSelectedElement(e);
    selectActiveLang(lang);
    dispatchSelectedLang();

  }
</script>

<button class="lang"
        tabindex="{$activeLanguage === item ? -1 : 0}"
        class:active={$activeLanguage === item}
        bind:this={selectedElement}
        on:click={e => selectElement(e, item)}>
    {item.title}
</button>


<style lang="scss">
    @import "body-languages";

    .lang {
        padding: 5px 10px;
        cursor: pointer;
        margin: 0 $land-btn-mx;

        &:focus {
            outline: none;
            box-shadow: inset 0 0 0 $land-btn-border-width rgba(var(--rgb-primary), .4);
            border-radius: $land-btn-border-radius;
        }
    }
</style>
