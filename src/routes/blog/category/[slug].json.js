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

  const { status: categoryStatus, data: categoryData } = categoryResponse;
  const { data: datoCmsCategoryData } = categoryData;

  if (datoCmsCategoryData && datoCmsCategoryData.category === null) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
  
    res.end(JSON.stringify({ message: `Category '${params.slug}' not found.` }));

    return;
  }

  if (categoryStatus !== 200) {   
    res.writeHead(categoryStatus, {
      'Content-Type': 'application/json'
    });

    res.end({});

    return;
  }

  const { category } = datoCmsCategoryData;

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

  const { status, data } = response;
  const { data: datoCmsArticlesData } = data;

	res.writeHead(status, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify({
    ...datoCmsArticlesData,
    ...datoCmsCategoryData,
  }));
}
