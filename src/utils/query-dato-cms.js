import Axios from 'axios';

export default (graphQlQuery) => {
  const datoApiToken = process.env.DATO_API_TOKEN;

  return Axios.post('https://graphql.datocms.com/',
    { query: graphQlQuery },
    {
      headers: {
        Authorization: 'Bearer ' + datoApiToken,
      },
    }
  );
}
