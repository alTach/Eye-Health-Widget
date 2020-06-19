<script>
	import PageIllustration from "./components/PageIllustration.svelte";
	import Countdown from "./components/Countdown.svelte";
	import Scenes from "./components/Scenes/Scenes.svelte";

</script>

<main>
	<div class="head">
		<div class="settings">set</div>
		<div class="close">-X-</div>
	</div>

	<PageIllustration>
		<Countdown />
<!--		<Scenes />-->
	</PageIllustration>
</main>

<style>
	main {
		border-radius: 20px;
		width: 373px;
		padding: 15px;
		box-shadow: 0 0 12px -6px black;
		overflow: hidden;
	}
	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
