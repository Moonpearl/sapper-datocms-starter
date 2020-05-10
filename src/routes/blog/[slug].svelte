<!--
	Script
-->
<script context="module">
	import { fetchDatoCms } from 'src/utils';

	export async function preload({ params, query }) {
		const response = await fetchDatoCms(this, `blog/${params.slug}.json`);
		return response;
	}
</script>

<script>
	import { Article } from 'src/components/article';

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
