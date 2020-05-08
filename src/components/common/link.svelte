<!-- 
    Script
-->
<script>
    import { makeRgbaColor } from '../../utils';
	import { primaryColor } from '../vars';
    export let href;
</script>


<!-- 
    Style
-->
<style>
    a {
        color: var(--color);
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }
</style>


<!-- 
    Content
-->
<a rel=prefetch {href} style="--color: {makeRgbaColor(primaryColor)}">
    <slot />
</a>
