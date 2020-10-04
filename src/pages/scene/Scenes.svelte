<script>
  import SceneBody from "./SceneBody.svelte";
  import SceneFooter from "./SceneFooter.svelte";

</script>

<div class="scenes">
    <div class="scenes__body">
        <SceneBody />
    </div>
    <div class="scenes__footer">
        <SceneFooter />
    </div>

</div>

<style lang="scss">
    @import "../../styles/variable/index";

    .scenes__body {
        padding: 50px 0;
        position: relative;
    }

    .scenes__footer {
        $left: 40px;
        display: flex;
        align-items: center;
        height: 90px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            height: 2px;
            background-color: var(--gray);
            top: 0;
            left: -$left;
            display: block;
            width: calc(100% + #{$left * 2});
        }
    }
</style>
