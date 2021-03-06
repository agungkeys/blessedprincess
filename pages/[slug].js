import React, { useState, useEffect } from 'react';
import { MainLayout, Title, CardBlog, MainHead } from '../ui';
import Image from 'next/image';
import { getPost, getPosts } from '../helpers/api';
import { firstLetterWordUppercase, shuffleArray } from '../helpers/utils';
import seo from '../helpers/seo';
import {DiscussionEmbed} from "disqus-react"

function Slug({ props }) {
  const { query, storePost, storePosts } = props;
  const [ statePost, setStatePost ] = useState();

  useEffect(() => {
    if(storePost){
      setStatePost(storePost);
    }
  },[storePost]);

  const disqusShortname = "https-blessedprincess-my-id"
  const disqusConfig = {
    url: `https://${process.env.BASE_HOST}/${storePost && storePost.slug || ''}`,
    identifier: storePost && storePost.id || '', // Single post id
    title: storePost && storePost.title || '' // Single post title
  }
  const slugSeo =  {
    TITLE: storePost && storePost.title ? firstLetterWordUppercase(storePost.title) : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    DESC: storePost && storePost.title ? `${firstLetterWordUppercase(storePost.title)} - Blessed Princess - Official Blog by Fatimah Fauzan` : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    KEYWORDS:
      'Blessed Princess, Blogger',
    AUTHOR: 'Fatimah',
    OG_TITLE: storePost && storePost.title ? firstLetterWordUppercase(storePost.title) : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    OG_DESC:
      storePost && storePost.title ? `${firstLetterWordUppercase(storePost.title)} - Blessed Princess - Official Blog by Fatimah Fauzan` : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    OG_TYPE: 'website',
    OG_SITENAME: 'Blessed Princess',
    OG_IMAGE_TYPE: 'jpg',
    OG_IMAGE_WIDTH: '1200',
    OG_IMAGE_HEIGHT: '628',
    OG_IMAGE_ALT: 'BlessedPrincess',
    OG_TWITTER_CARD: 'Summary',
    OG_TWITTER_TITLE: storePost && storePost.title ? firstLetterWordUppercase(storePost.title) : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    OG_TWITTER_DESC:
      storePost && storePost.title ? `${firstLetterWordUppercase(storePost.title)} - Blessed Princess - Official Blog by Fatimah Fauzan` : `Blessed Princess - Official Blog by Fatimah Fauzan`,
    OG_TWITTER_SITE: '@fatimahfauzan93',
  }
  const seoData = { ...seo.DEFAULT, ...slugSeo }

  return (
    <MainLayout>
      <MainHead seo={seoData} />
      {statePost && 
        <>
          <div className="px-4 mx-auto max-w-screen-md">
            <Title title={firstLetterWordUppercase(statePost.title)} textAlign='text-center' date={statePost.updatedAt} />
            {statePost.poster && 
              <div className="block text-center">
                  <div className="inline-grid w-full">
                    <Image
                      className="rounded"
                      src={statePost.poster ? statePost.poster.url : env.NO_IMAGE}
                      alt={statePost.title || '-'}
                      width={statePost.poster ? statePost.poster.width : env.NO_IMAGE_SIZE}
                      height={statePost.poster ? statePost.poster.height : env.NO_IMAGE_SIZE}
                      objectFit="cover"
                      layout="responsive"
                      quality={100}
                    />
                  </div>
              </div>
            || null}
            <div className="mb-4 text-gray-700 font-serif text-justify html-string" dangerouslySetInnerHTML={{ __html: statePost.description.html }} />

            <div className="py-2 md:py-4 lg:py-6 mx-auto max-w-screen-lg">
              <hr className="border border-pink-800" />
            </div>

            <div className="py-6">
              <div className={`grid grid-cols-3 gap-4`}>
                {storePosts && shuffleArray(storePosts).slice(0, 3).map((item) => 
                  {
                    return (
                      <div key={item.id} className="">
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

              <div className='p-2'>
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </div>
        </>
      || null}
      
    </MainLayout>
  )
}

Slug.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const slug = query.slug;
  const storePost = await getPost(slug);
  const storePosts = await getPosts();
    
  return {
    props: { query, storePost, storePosts }
  }
}

export default Slug;