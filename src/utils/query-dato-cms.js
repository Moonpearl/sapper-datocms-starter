import Axios from 'axios';

export default (graphQlQuery) => {
  const datoApiToken = process.env.DATO_API_TOKEN;

  return new Promise( (resolve, reject) => {
    Axios.post('https://graphql.datocms.com/',
      { query: graphQlQuery },
      {
        headers: {
          Authorization: 'Bearer ' + datoApiToken,
        },
      }
    )
    .then(response => {
      let status = 200;
      if (typeof response.data.errors !== 'undefined') {
        status = 400;
      }

      resolve({ status, data: response.data });
    })
    .catch(error => {
      let status = 500;
  
      const match = error.message.match(/^Request failed with status code (\d+)$/);
      if (match) {
        status = match[1];
      }

      resolve({ status, data: error });
    });
  });
}
