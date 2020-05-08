<!--
	Script
-->
<script context="module">
	import { Article } from 'src/components/article';

	export async function preload({ params, query }) {
		const response = await this.fetch(`blog/${params.slug}.json`);
		const data = await response.json();

		return { data };
	}
</script>

<script>
	export let data = null;
</script>


<!--
	Content
-->
<svelte:head>
	<title>My beautiful blog - {data.article.title}</title>
</svelte:head>

{#if data}
	<Article {...data.article} />
{/if}
