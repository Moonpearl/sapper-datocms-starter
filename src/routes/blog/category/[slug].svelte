<!--
	Script
-->
<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`blog/category/${params.slug}.json`);
		const data = await response.json();

		return { data };
	}
</script>

<script>
    import { ArticlePreview } from '../../../components/article'

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
    
    #description {
        display: block;
        color: grey;
        margin: 2em 0;
    }
</style>


<!-- 
    Content
-->
<svelte:head>
	<title>My beautiful blog - {data && data.category.name}</title>
</svelte:head>

{#if data}
<h1>Articles published under {data.category.name}</h1>
<small id="description">
    {@html data.category.description}
</small>

<section class="grid">
	{#each data.allArticles as article}
		<ArticlePreview {...article} />
	{/each}
</section>
{/if}
