import React from 'react';
import { MainLayout, Title, CardBlog } from '../ui';
import { getPosts } from '../helpers/api';

function Blog({ props }) {
  const {query, storePosts} = props;
  console.log("🚀 ~ file: blog.js ~ line 7 ~ Blog ~ storePosts", storePosts)
  console.log("🚀 ~ file: [slug].js ~ line 6 ~ Slug ~ query", query)
  return (
    <MainLayout>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Title title='Blog' />
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4`}>
            {storePosts && storePosts.length > 1 && storePosts.map((item) => 
              {
                return (
                  <div key={item.id} className="p-2">
                    <CardBlog
                      title={item.title}
                      date={item.updatedAt}
                      link={item.slug ? `/${item.slug}` : `#`}
                      image={item.poster ? item.poster.thumbUrl : env.NO_IMAGE}
                      imageWidth={item.poster ? 350: env.NO_IMAGE_SIZE}
                      imageHeight={item.poster ? 350 : env.NO_IMAGE_SIZE}
                      isCenter
                    />
                  </div>
                )
              }
            ) || null}
          </div>
      </div>
    </MainLayout>
  )
}

Blog.getInitialProps = async (ctx) => {
  const { query } = ctx
  console.log(ctx)
  const storePosts = await getPosts();
  // const storePages = await getPages();
    
  return {
    props: { query, storePosts }
  }
}

export default Blog;