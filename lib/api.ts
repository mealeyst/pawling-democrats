import { IPageFields } from '../@types/generated/contentful'

const PAGE_GRAPHQL_FIELDS = `
slug
title
body {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

function extractNavigationLinks(fetchResponse) {
  const links = fetchResponse?.data?.navigationMenuCollection?.items[0].menuItemsCollection.items.reduce(
    (acc, { title, slug }) => {
      return [
        ...acc,
        { children: title, href: `/${slug !== null ? slug : ''}` },
      ]
    },
    []
  )
  console.log(links)
  return links
}

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
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
  ).then((response) => {
    return response.json()
  })
}

function extractPage(fetchResponse): IPageFields {
  console.log(fetchResponse?.data?.pageCollection?.items?.[0])
  return fetchResponse?.data?.pageCollection?.items?.[0]
}

function extractPageEntries(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items
}

export async function getAllPagesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection(where: { slug_exists: true }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPageEntries(entries)
}

export async function getPage(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" },  preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    page: extractPage(entry),
  }
}

export async function getSiteNavigation(preview) {
  const entries = await fetchGraphQL(
    `query {
      navigationMenuCollection(where: {title: "Site Navigation"} preview: ${
        preview ? 'true' : 'false'
      }) {
        items{
          title
          menuItemsCollection(limit: 100) {
            items {
              __typename
              ... on Page {
                title
                slug
              }
              ... on BlogPost {
                title
                slug
              }
            }
          }
        }
      }
    }`
  )
  return extractNavigationLinks(entries)
}
