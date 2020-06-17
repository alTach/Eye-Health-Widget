<script>
    import Countdown from "./Countdown.svelte";
    import Scenes from "./Scenes/Scenes.svelte";
    import PageIllustration from "./PageIllustration.svelte";
</script>

<main>
    <div class="head">
        <div class="settings">set</div>
        <div class="close">-X-</div>
    </div>

    <PageIllustration>
        <Countdown />
        <Scenes />
    </PageIllustration>
</main>

<style>
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
