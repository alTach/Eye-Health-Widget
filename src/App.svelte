<script>
	import PageIllustration from "./components/PageIllustration.svelte";
	import Countdown from "./components/Countdown.svelte";
	import Scenes from "./components/Scenes/Scenes.svelte";
	import CloseIcon from "./components/CloseIcon.svelte";
	import Settings from "./components/Settings.svelte";

</script>

<main>
	<div class="head">
		<div class="settings">set</div>
		<CloseIcon />
	</div>

	<PageIllustration>
<!--		<Countdown />-->
<!--		<Scenes />-->
		<Settings />
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
		margin-bottom: 14px;
	}
</style>
