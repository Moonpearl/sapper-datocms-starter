<!-- 
    Script
-->
<script>
    import { makeRgbaColor } from 'src/utils';
    import { primaryColor, secondaryColor } from 'src/components/vars';

    export let variant = 'primary';

    const colors = {
        primary: primaryColor,
        secondary: secondaryColor,
    };
</script>


<!-- 
    Style
-->
<style>
    button {
        position: relative;
        border: none;
        border-radius: .2em;
        background-color: var(--color);
        color: white;
        padding: .25em 1em;
	    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .25);
	    -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .25);
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .25);
        font: inherit;
        cursor: pointer;
        transition: filter .3s ease;
    }

    button:after {
        transition: opacity .3s ease;
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        mix-blend-mode: screen;
        opacity: 0;
    }

    button:hover:after {
        opacity: .25;
    }

    button:active {
        transform: translateY(1px);
	    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .125);
	    -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .125);
        box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .125);
    }

    button:active:after {
        opacity: .5;
    }

    button:focus {
        outline: none;
    }
</style>


<!-- 
    Content
-->
<button style="--color: {makeRgbaColor(colors[variant])}">
    <slot />
</button>
