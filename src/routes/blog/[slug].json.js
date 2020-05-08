import { queryDatoCms } from 'src/utils';

export async function get(req, res) {
	const { params } = req;

	const response = await queryDatoCms(`
		query ArticleQuery {
			article(filter: {slug: {eq: "${params.slug}"}}) {
				slug
				title
				_createdAt
				cover {
					url
				}
				category {
					name
					slug
				}
				content(markdown: true)
			}
		}
	`);
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response.data));
}
