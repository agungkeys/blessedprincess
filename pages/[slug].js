import React, { useState, useEffect } from 'react';
import { MainLayout, Title, CardBlog } from '../ui';
import { getPost, getPosts } from '../helpers/api';
import { firstLetterWordUppercase, shuffleArray } from '../helpers/utils';
import {DiscussionEmbed} from "disqus-react"

function Slug({ props }) {
  const { query, storePost, storePosts } = props;
  const [ statePost, setStatePost ] = useState();

  useEffect(() => {
    if(storePost){
      setStatePost(storePost);
    }
  },[storePost]);

  const disqusShortname = "blessed-9"
  const disqusConfig = {
    url: `https://${process.env.BASE_HOST}/${storePost.slug}`,
    identifier: storePost.id, // Single post id
    title: storePost.title // Single post title
  }

  return (
    <MainLayout>
      {statePost && 
        <>
          <div className="px-4 mx-auto max-w-screen-md">
            <Title title={firstLetterWordUppercase(statePost.title)} />
            <div className="mb-4 text-gray-700 font-serif html-string" dangerouslySetInnerHTML={{ __html: statePost.description.html }} />

            <div className="py-6">
              <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4`}>
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