<!--
	Script
-->
<script context="module">
	import { ResponsiveGrid } from '../../components/common';
	import { ArticlePreview } from '../../components/article';

	export async function preload({ params, query }) {
		const response = await this.fetch(`blog.json`);
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
