import Axios from 'axios';

export default async (graphQlQuery) => {
  const datoApiToken = process.env.DATO_API_TOKEN;

  try {
    const response = await Axios.post('https://graphql.datocms.com/',
      { query: graphQlQuery },
      {
        headers: {
          Authorization: 'Bearer ' + datoApiToken,
        },
      }
    );

    if (response.errors) {
      throw response.errors;
    }

    return { data: response.data.data };
  }
  catch (error) {
    console.error(error);
  }
}
