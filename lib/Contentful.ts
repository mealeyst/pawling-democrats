import * as Contentful from 'contentful';

export const client = Contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID as string,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const getEntries = (query: any) =>
  client.getEntries(query).then((response) =>
    response.items);

const getEntry = (id: string, query: any) =>
  client
    .getEntry(id, query)
    .then((response) =>
      response);

export { getEntries, getEntry };
