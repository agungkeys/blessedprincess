import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { MainLayout, CardBlog, CardSingleBlogLanding } from '../ui';
import { getPages, getPosts } from '../helpers/api';
import env from '../helpers/env';
import { isObjectEmpty } from '../helpers/utils';
import Slider from "react-slick";


function Home({ props }) {
  const { storePosts, storePages } = props;
  const [statePosts, setStatePosts] = useState([]);
  const [statePostOne, setStatePostOne] = useState({});
  const [statePagesFirst, setStatePagesFirst] = useState([]);

  useEffect(() => {
    if(storePosts){
      setStatePosts(storePosts);
    }
  },[storePosts]);

  useEffect(() => {
    if(statePosts.length > 1){
      setStatePostOne(statePosts[0]);
    }
  }, [statePosts]);

  useEffect(() => {
    // find little notes
    if(storePages) {
      let res = storePages.find(dt => dt.id === 'ckucewo4ofsu80986ctx51qu5')
      setStatePagesFirst(res);
    }
  }, [storePages])

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      }
    ],
  };
  return (
    <MainLayout>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">

        {/* section list blog */}
        
        <div className="px-3 pt-6 mx-auto max-w-screen-lg">
          <div className="sm:mx-auto lg:max-w-full">
            {
              statePosts && !!statePosts.length && 
              <Slider {...settings}>
                {statePosts.slice(0, 8).map((item) => 
                  {
                    return (
                      <div key={item.id} className="p-2">
                        <CardBlog
                          title={item.title}
                          date={item.updatedAt}
                          link={item.slug ? `/${item.slug}` : `#`}
                          image={item.poster ? item.poster.url : env.NO_IMAGE}
                          imageWidth={item.poster ? item.poster.width : env.NO_IMAGE_SIZE}
                          imageHeight={item.poster ? item.poster.height : env.NO_IMAGE_SIZE}
                        />
                      </div>
                    )
                  }
                ) || null}
              </Slider>
            }
          </div>
        </div>

        <div className="px-4 py-2 mx-auto max-w-screen-lg">
          <hr className="border border-pink-800" />
        </div>

        {!isObjectEmpty(statePostOne) && 
          <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <CardSingleBlogLanding 
              title={statePostOne.title}
              description={statePostOne.shortDescription}
              date={statePostOne.updatedAt}
              poster={statePostOne.poster}
              link={statePostOne && statePostOne.slug ? `/${statePostOne.slug}` : `/`}
              type={1}
            />
          </div>
        || null}

        <div className="px-4 py-2 mx-auto max-w-screen-lg">
          <hr className="border border-pink-800" />
        </div>

        {!isObjectEmpty(statePagesFirst) && 
          <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <CardSingleBlogLanding 
              title={statePagesFirst.title}
              images={statePagesFirst.images}
              type={2}
            />
          </div>
        || null}

        <div className="px-4 py-2 mx-auto max-w-screen-lg">
          <hr className="border border-pink-800" />
        </div>

      </main>
    </MainLayout>
  )
}

Home.getInitialProps = async (ctx) => {
  const storePosts = await getPosts();
  const storePages = await getPages();
    
  return {
    props: { storePosts, storePages }
  }
}

export default Home;
