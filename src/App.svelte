<script>
  import Settings from "./pages/settings/Settings.svelte";
  import Home from "./pages/home/Home.svelte";
  import Scene from "./pages/scene/Scene.svelte";
  import {router} from "./store/route";
  import {pages} from "./store/route";
</script>

<main>
    {#if $router.path === pages.scene}
        <Scene/>
    {:else if $router.path === pages.settings}
        <Settings/>
    {:else}
        <Home/>
    {/if}
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
