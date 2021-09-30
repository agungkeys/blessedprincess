import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MainLayout, CardBlog, CardSingleBlogLanding } from '../ui';
import { getPosts } from '../helpers/api';
import env from '../helpers/env';
import { isObjectEmpty } from '../helpers/utils';


function Home({ props }) {
  const { storePosts } = props;
  const [statePosts, setStatePosts] = useState([]);
  const [statePostOne, setStatePostOne] = useState({});

  useEffect(() => {
    if(storePosts){
      setStatePosts(storePosts);
    }
  },[storePosts])

  useEffect(() => {
    if(statePosts.length > 1){
      setStatePostOne(statePosts[0]);
    }
  }, [statePosts])
  return (
    <MainLayout>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {console.log("🚀 ~ file: index.js ~ line 12 ~ Home ~ statePosts", statePostOne)}
      <main className="w-full">

        {/* section list blog */}
        
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="pt-4 grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {statePosts && statePosts.length && statePosts.slice(0,4).map((item) => 
              {
                return (
                  <CardBlog
                    key={item.id}
                    title={item.title}
                    date={item.updatedAt}
                    link={item.slug ? `/blog/${item.slug}` : `#`}
                    image={item.poster ? item.poster.url : env.NO_IMAGE}
                    imageWidth={item.poster ? item.poster.width : env.NO_IMAGE_SIZE}
                    imageHeight={item.poster ? item.poster.height : env.NO_IMAGE_SIZE}
                  />
                )
              }
            ) || null}
          </div>
        </div>

        <div className="px-4 py-2 mx-auto max-w-screen-lg">
          <hr className="border border-pink-800" />
        </div>
        {!isObjectEmpty(statePostOne) && 
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <CardSingleBlogLanding 
              title={statePostOne.title}
              description={statePostOne.description}
              date={statePostOne.updatedAt}
              poster={statePostOne.poster}
              link={statePostOne.slug}
            />
          </div>
        || null}
      </main>
    </MainLayout>
  )
}

Home.getInitialProps = async (ctx) => {
  const storePosts = await getPosts();
    
  return {
    props: { storePosts }
  }

}

export default Home;
