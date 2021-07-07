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
	`)

	const { status, data } = response;
	const { data: datoCmsData } = data;

	if (datoCmsData && datoCmsData.article === null) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});
	
		res.end(JSON.stringify({ message: `Article '${params.slug}' not found.` }));

		return;
	}

	res.writeHead(status, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data));
}
