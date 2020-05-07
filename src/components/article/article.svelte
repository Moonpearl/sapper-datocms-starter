<!-- 
    Script
-->
<script>
    export let title;
    export let slug;
    export let content;
    export let cover;
    export let _createdAt;
</script>


<!-- 
    Style
-->
<style>
</style>


<!-- 
    Content
-->
<article>
    <h1>{title}</h1>
    <section>
        {@html content}
    </section>
</article>
