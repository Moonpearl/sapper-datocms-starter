import { queryDatoCms } from 'src/utils';

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

	const { status, data } = response;

	res.writeHead(status, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data));
}
