<script>
  import {languages} from "../../../../store/localozation";
  import LangBorder from "./LangBorder.svelte";
  import LangItem from "./LangItem.svelte";

  let activeElement;

  function onSelect(e) {
    activeElement = e.detail;
  }
</script>

<div class="lang-list">

    {#each $languages as language}
        <LangItem item="{language}" on:select="{onSelect}"/>
    {/each}
    <LangBorder element="{activeElement}"/>
</div>


<style lang="scss">
    @import "body-languages";
    .lang-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 #{-$land-btn-mx} 30px;
        position: relative;
    }
</style>
