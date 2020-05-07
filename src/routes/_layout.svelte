<!-- 
	Script
-->
<script>
	import { Container, GlobalStyle } from '../components/styles';
	import { Header, Footer } from '../components/layout';

	export let segment;
</script>


<!--
	Style
-->
<style>
	main {
		padding: 2em 0;
		box-sizing: border-box;
	}
</style>


<!-- 
	Content
-->
<GlobalStyle />

<Header {segment}/>

<main>
	<Container>
		<slot></slot>
	</Container>
</main>

<Footer />
