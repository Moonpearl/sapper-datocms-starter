<!-- 
    Script
-->
<script>
    import { makeRgbaColor } from '../../utils';
    import { primaryColor } from '../vars';
	import { Container } from '../styles';
</script>


<!-- 
    Style
-->
<style>
    footer {
        text-align: center;
        padding: 4em 0;
    }

    a {
        color: var(--color);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>


<!-- 
    Content
-->
<footer style="--color: {makeRgbaColor(primaryColor)}">
    <Container>
        Built with <a href="https://www.datocms.com/" target="_blank">DatoCMS</a> and <a href="https://sapper.svelte.dev/" target="_blank">Sapper</a>
    </Container>
</footer>
