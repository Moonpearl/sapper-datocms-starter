<!-- 
    Script
-->
<script>
    export let cellWidth = '300px';
    export let gap = '2em';
</script>


<!-- 
    Style
-->
<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--width), 1fr));
		gap: var(--gap);
    }
</style>


<!-- 
    Content
-->
<div style="--width: {cellWidth}; --gap: {gap}">
    <slot />
</div>
