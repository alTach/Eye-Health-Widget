<script>
  import Eye from "./Eye.svelte";

</script>

<div class="face">
    <div class="face__eyes">
        <Eye />
        <Eye />
    </div>
</div>


<style lang="scss">
    @import "../../../styles/variable";
    .face {
        width: 150px;
        height: 150px;
        background-color: var(--primary);
        border-radius: 50%;
        &__eyes {
            display: flex;
            justify-content: space-between;
            width: 75%;
            margin: 0 auto;
            position: relative;
            top: 34px;
        }
    }
</style>
