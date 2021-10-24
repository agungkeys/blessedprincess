import React from 'react';
import { MainLayout, Title, CardBlog, MainHead } from '../ui';
import { getPosts } from '../helpers/api';
import seo from '../helpers/seo';

const slugSeo =  {
  TITLE: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  DESC: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  KEYWORDS:
    'Blog, Blessed Princess, Blogger',
  AUTHOR: 'Fatimah',
  OG_TITLE: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_DESC: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TYPE: 'website',
  OG_SITENAME: 'Blessed Princess',
  OG_IMAGE_TYPE: 'jpg',
  OG_IMAGE_WIDTH: '1200',
  OG_IMAGE_HEIGHT: '628',
  OG_IMAGE_ALT: 'BlessedPrincess',
  OG_TWITTER_CARD: 'Summary',
  OG_TWITTER_TITLE: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TWITTER_DESC: 'Blog - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TWITTER_SITE: '@fatimahfauzan93',
}
const seoData = { ...seo.DEFAULT, ...slugSeo }

function Blog({ props }) {
  const {query, storePosts} = props;
  return (
    <MainLayout>
      <MainHead seo={seoData} />
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
  const storePosts = await getPosts();
  // const storePages = await getPages();
    
  return {
    props: { query, storePosts }
  }
}

export default Blog;