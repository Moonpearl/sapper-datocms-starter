export default async (component, route) => {
  const response = await component.fetch(route);
  const data = await response.json();

  if (response.ok) {
    return { data: data.data };
  }

  let message;
  switch (response.status) {
    case 400:
      message = { message: 'Error in DatoCMS query.' };
      Object.assign(message, data);
      break;
    case 401:
      message = 'Error while authenticating into DatoCMS. Did you set your API token properly?';
      break;
    case 404:
      message = 'Requested DatoCMS entity does not exist.';
      break;
    case 500:
      message = 'Server error encountered while querying DatoCMS.';
      break;
    default:
      message = 'Unknown error encountered while querying DatoCMS.';
  }
  return component.error(response.status, message);
}
