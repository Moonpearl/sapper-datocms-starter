import { queryDatoCms } from '../../utils';

export async function get(req, res) {
	const response = await queryDatoCms(`
		query BlogQuery {
			allArticles(orderBy: _createdAt_DESC) {
				_createdAt
				content(markdown: true)
				slug
				title
				cover {
					url
				}
				category {
					name
					slug
				}
			}
		}
	`);

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response.data));
}
