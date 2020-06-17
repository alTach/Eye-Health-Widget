<script>
	import Home from "./components/Home.svelte";

	export let name;
</script>

<main>
	<Home />
</main>

<style>
	main {
		border-radius: 20px;
		width: 400px;
		padding: 15px;
		box-shadow: 0 0 12px -6px black;
		overflow: hidden;
	}
</style>
