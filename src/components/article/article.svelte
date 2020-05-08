<!-- 
    Script
-->
<script>
    import { Link } from '../common';
    import { Button } from './../styles';
    export let title;
    export let slug;
    export let category;
    export let content;
    export let cover;
    export let _createdAt;
</script>


<!-- 
    Style
-->
<style>
    img {
        width: 100%;
        border-radius: .25em;
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25); 
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.25);
    }

    small {
        color: darkgrey;
    }
</style>


<!-- 
    Content
-->
<article>
    <h1>{title}</h1>
    <small>
        <p>Published on {(new Date(_createdAt)).toLocaleString('en-EN')}</p>
    </small>
    <img src={cover.url} alt="Article cover" />
    <section>
        {@html content}
    </section>
</article>

<Link href="/blog">
    <Button variant="secondary">
        Back
    </Button>
</Link>
