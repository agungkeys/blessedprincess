import env from './env';

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${env.CURRENT_API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPosts() {
  const data = await fetchAPI(
    `
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        shortDescription
        updatedAt
        poster {
          id
          width
          height
          url
        }
        description {
          html
        }
      }
    }
  `
)
  return data && data.posts
}
