<!--
	Script
-->
<script context="module">
	import { fetchDatoCms } from 'src/utils';

	export async function preload({ params, query }) {
		const response = await fetchDatoCms(this, `blog.json`);
		return response;
	}
</script>

<script>
	import { ResponsiveGrid } from 'src/components/common';
	import { ArticlePreview } from 'src/components/article';

	export let data = null;
</script>


<!--
	Content
-->
<svelte:head>
	<title>My beautiful blog - Blog</title>
</svelte:head>

<h1>Recent posts</h1>

{#if data}
	<ResponsiveGrid>
		{#each data.allArticles as article}
			<ArticlePreview {...article} />
		{/each}
	</ResponsiveGrid>
{/if}
