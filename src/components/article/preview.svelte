<!-- 
    Script
-->
<script>
    import { truncateText } from '../../utils';
    import { Button, Card } from '../../components/styles';
    
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
    .content {
        overflow: hidden;
        height: 10em;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        /* white-space: nowrap; */
    }
</style>


<!-- 
    Content
-->
<Card>
    <Card.Image src={cover.url} alt={`Cover for article "${title}"`} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Meta>
            Published on {(new Date(_createdAt)).toLocaleString('en-EN')}
        </Card.Meta>
        <div class="content">
            {@html content}
        </div>
        <Card.Text>
            <a rel=prefetch href="/blog/{slug}">
                <Button>
                    Read more
                </Button>
            </a>
        </Card.Text>
    </Card.Body>
</Card>
