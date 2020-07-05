<script>
    import Settings from "./pages/settings/Settings.svelte";
    import Home from "./pages/home/Home.svelte";

</script>

<main>
    <Home />
    <Settings />
</main>

<style>
    main {
        display: flex;
        border-radius: 20px;
        width: 373px;
        box-shadow: 0 0 12px -6px black;
        overflow: hidden;
    }

    :global(.container) {
        display: flex;
        width: 100%;
        flex-shrink: 0;
        padding: 15px 20px;
        box-sizing: border-box;
        background: white;
    }
</style>
