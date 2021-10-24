import env from './env';

async function fetchAPI(query, { variables } = {}) {
  try{
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
    const json = await res.json();
    
    return json.data;

  }catch(err){
    if (err) {
      console.error(err)
      throw new Error('Failed to fetch API')
    }
  }
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
          thumbUrl: url(transformation: {image: {resize: {fit: crop, height: 350, width: 350}}})
        }
        description {
          html
        }
        featuredLanding
      }
    }
  `
)
  return data && data.posts
}

export async function getPost(slugData="") {
  const data = await fetchAPI(
    `
    query MyQuery($slug: String){
      post(where: {slug: $slug}) {
        id
        slug
        title
        poster {
          id
          width
          height
          url
          thumbUrl: url(transformation: {image: {resize: {fit: crop, height: 350, width: 350}}})
        }
        description {
          html
        }
        updatedAt
      }
    }
  `,
    {
      variables: {
        slug: slugData,
      }
    }
  )
  return data && data.post
}

export async function getPages() {
  const data = await fetchAPI(
    `
    query MyQuery {
      pages(orderBy: createdAt_DESC) {
        id
        slug
        title
        updatedAt
        images {
          id
          width
          height
          url
        }
        poster {
          id
          width
          height
          url
          thumbUrl: url(transformation: {image: {resize: {fit: crop, height: 350, width: 350}}})
        }
        description {
          html
        }
      }
    }
  `
)
  return data && data.pages
}
