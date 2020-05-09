<!--
	Script
-->
<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`blog/${params.slug}.json`);
		const data = await response.json();

		console.log(data);

		if (response.ok) {
			return { data: data.data };
		}

		let message;
		switch (response.status) {
			case 400:
				message = { message: 'Error in DatoCMS query.' };
				Object.assign(message, data);
				break;
			case 401:
				message = 'Error while authenticating into DatoCMS. Did you set your API token properly?';
				break;
			case 404:
				message = 'Requested DatoCMS entity does not exist.';
				break;
			case 500:
				message = 'Server error encountered while querying DatoCMS.';
				break;
			default:
				message = 'Unknown error encountered while querying DatoCMS.';
		}
		return this.error(response.status, message);
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
