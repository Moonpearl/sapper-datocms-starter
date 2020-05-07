<!--
	Script
-->
<script context="module">
	import { queryDatoCms } from '../utils';
	import { ArticlePreview } from '../components/article';

	export const preload = async ({ params, query }) =>
		queryDatoCms(`
			query HomeQuery {
				allArticles(orderBy: _createdAt_DESC) {
					_createdAt
					content(markdown: true)
					cover {
						url
					}
					slug
					title
				}
			}
		`)
	;
</script>

<script>
	export let data;
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
	<title>My beautiful blog - Home page</title>
</svelte:head>

<h1>My beautiful blog</h1>

<section class="grid">
	{#each data.allArticles as article}
		<ArticlePreview {...article} />
	{/each}
</section>
