<script>
  import {languages} from "../../../../store/localozation";
  import {activeLanguage} from "../../../../store/localozation";
  import LangBorder from "./LangBorder.svelte";

  const selectActiveElement = (e) => activeElement = e.target;
  const selectActiveLang = (lang) => activeLanguage.set(lang);

  let activeElement;

  function selectElement(e, lang) {
    selectActiveElement(e);
    selectActiveLang(lang);
  }
</script>

<div class="lang-list">
    {#each $languages as language}
        <button class="lang"
                bind:this={activeElement}
                on:click={e => selectElement(e, language)}>
            {language.title}
        </button>
    {/each}
    <LangBorder element="{activeElement}"/>
</div>


<style lang="scss">
    @import "body-languages";
    $item-mx: 5px;
    .lang-list {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin: 0 #{-$item-mx} 30px;
        position: relative;
    }

    .lang {
        padding: 5px 10px;
        cursor: pointer;
        margin: 0 $item-mx;
        &:focus {
            outline: none;
            box-shadow: inset 0 0 0 $land-btn-border-width var(--primary);
            border-radius: $land-btn-border-radius;
        }
    }
</style>
