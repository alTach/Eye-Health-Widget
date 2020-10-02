<script>
  import Settings from "./pages/settings/Settings.svelte";
  import Home from "./pages/home/Home.svelte";
  import Scene from "./pages/scene/Scene.svelte";
  import {Router, Link, Route} from "svelte-routing";
  import {router} from "./routing";

  export let url = "";
</script>

<main>
    <Router url="{url}">
        <Route path="{router.home.path}" component="{Home}"/>
        <Route path="{router.settings.path}" component="{Settings}"/>
        <Route path="{router.scene.path}" component="{Scene}"/>
        <!--<Route path="/">-->
        <!--    <Home/>-->
        <!--</Route>-->
    </Router>
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
