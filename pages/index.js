import Head from 'next/head';
import { MainLayout, CardBlog, NextLink } from '../ui';
import Image from 'next/image';
import { getPosts } from './helpers/api';
import env from './helpers/env';
import { formatDate } from './helpers/utils';

function Home({ props }) {
  const { storePosts } = props;
  return (
    <MainLayout>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">

        {/* section list blog */}
        
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="pt-4 grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {storePosts && storePosts.slice(0,4).map((item) => 
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
            )}
          </div>
        </div>

        <div className="px-4 py-2 mx-auto max-w-screen-lg">
          <hr className="border border-pink-800" />
        </div>

        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {storePosts && 
            <div className="inline-block py-4 w-full text-center">
              <p className="mb-1 text-xs font-semibold text-gray-600 font-serif">
                {formatDate(storePosts[0].updatedAt)}
              </p>
              <NextLink href={storePosts[0].slug ? `/blog/${storePosts[0].slug}` : `#`}>
                <div className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-pink-800">
                  <span className="text-xl font-bold font-serif leading-4">{storePosts[0].title}</span>
                </div>
              </NextLink>
              <div className="block">
                <NextLink href={storePosts[0].slug ? `/blog/${storePosts[0].slug}` : `#`}>
                  <div className="inline-grid w-full max-w-screen-sm">
                    <Image
                      className="rounded"
                      src={storePosts[0].poster ? storePosts[0].poster.url : env.NO_IMAGE}
                      alt=""
                      width={storePosts[0].poster ? storePosts[0].poster.width : env.NO_IMAGE_SIZE}
                      height={storePosts[0].poster ? storePosts[0].poster.height : env.NO_IMAGE_SIZE}
                      objectFit="cover"
                      layout="responsive"
                      quality={100}
                    />
                  </div>
                </NextLink>
              </div>
              <div className="block pt-3 w-full mx-auto max-w-screen-lg">
                <div className="font-serif" dangerouslySetInnerHTML={{ __html: storePosts[0].description.html }} />
              </div>
            </div>
          || null
          }
        </div>


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
