<!--
	Script
-->
<script context="module">
	import Axios from 'axios';
	import { queryDatoCms } from '../../utils';
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
	Style
-->
<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2em;
	}
</style>


<!--
	Content
-->
<svelte:head>
	<title>My beautiful blog - Blog</title>
</svelte:head>

<h1>Recent posts</h1>

{#if data}
<section class="grid">
	{#each data.allArticles as article}
		<ArticlePreview {...article} />
	{/each}
</section>
{/if}
