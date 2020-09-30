<script>
  import {languages} from "../../../store/localozation";
  import {activeLanguage} from "../../../store/localozation";
</script>

<div class="lang-list">
    {#each $languages as language}
        <div class="lang"
             on:click={activeLanguage.set(language)}>
            {language.title}
        </div>
    {/each}
</div>


<style lang="scss">
    $item-mx: 10px;
    .lang-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0 #{-$item-mx};
    }
    .lang {
        cursor: pointer;
        margin: 0 $item-mx;
    }
</style>
