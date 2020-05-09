import { queryDatoCms } from 'src/utils';

export function get(req, res) {
	queryDatoCms(`
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
	`)
	.then(response => {
		let status = 200;
		if (typeof response.data.errors !== 'undefined') {
			status = 400;
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
