import { LinkList } from '../@types/Link'
import { ApolloQueryResult } from '@apollo/client'

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export function extractNavigationLinks(fetchResponse: any): LinkList {
  return fetchResponse?.data?.navigationMenuCollection?.items[0].menuItemsCollection.items.reduce(
    (acc, { title, slug }) => {
      return [
        ...acc,
        { children: title, href: `/${slug !== null ? slug : ''}` },
      ]
    },
    []
  )
}

export function extractPage(response: ApolloQueryResult<any>) {
  return response?.data?.pageCollection?.items?.[0]
}

export function extractPageEntries(fetchResponse: any) {
  return fetchResponse?.data?.pageCollection?.items
}

export async function getAllPages() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { slug_exists: true } limit: 100){
        items {
          slug
          title
        }
      }
    }`
  )
  return extractPageEntries(entries)
}
