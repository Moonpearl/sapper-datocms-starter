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
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline solid;
    }
</style>


<!-- 
    Content
-->
<a rel=prefetch {href} style="--color: {makeRgbaColor(primaryColor)}">
    <slot />
</a>
