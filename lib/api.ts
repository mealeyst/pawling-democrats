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

function extractPage(fetchResponse) {
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
      pageCollection(where: { slug: "${slug}" }, preview: false, limit: 1) {
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
