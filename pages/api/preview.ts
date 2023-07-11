import { initializeApollo } from 'lib/apolloClient'
import GET_PAGE from '../graphql/get-page.graphql'
import { extractPage } from '../../lib/api'

export default async function preview(req, res) {
  const { secret, slug } = req.query

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // const post = await getPreviewPostBySlug(slug)
  const client = initializeApollo()
  const page = extractPage(
    await client.query({
      query: GET_PAGE,
      variables: {
        slug: slug,
        preview,
      },
    })
  )

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Draft Mode by setting the cookie
  res.setDraftMode({ enable: true })

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = `/${page.slug}`
  res.setHeader('Content-Type', 'text/html')
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  )
  res.end()
}
