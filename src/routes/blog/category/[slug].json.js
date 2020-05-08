import { queryDatoCms } from 'src/utils';

export async function get(req, res) {
  const { params } = req;
  
  const categoryResponse = await queryDatoCms(`
    query CategoryQuery {
      category(filter: {slug: {eq: ${params.slug}}}) {
        id
        name
        description(markdown: true)
      }
    }
  `);

  if (categoryResponse.data.category === null) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
  
    res.end(JSON.stringify({ message: `Category '${params.slug}' not found` }));

    return;
  }

  const category = categoryResponse.data.category;

	const response = await queryDatoCms(`
		query CategoryArticlesQuery {
      allArticles(filter: {category: {eq: ${category.id}}}) {
				slug
				title
        _createdAt
        content(markdown: true)
				cover {
					url
        }
        category {
          slug
          name
        }
      }
		}
  `);

  response.data.category = category;

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(response.data));
}
