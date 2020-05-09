import { queryDatoCms } from 'src/utils';

export async function get(req, res) {
	const { params } = req;

	queryDatoCms(`
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
	.then(response => {
		let status = 200;
		if (typeof response.data.errors !== 'undefined') {
			status = 400;
		}

		if (response.data.data.article === null) {
			status = 404;
		}

		res.writeHead(status, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(response.data));
	})
	.catch(error => {
		let status = 500;

		const match = error.message.match(/^Request failed with status code (\d+)$/);
		if (match) {
			status = match[1];
		}

		res.writeHead(status, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(error));
	});
}
