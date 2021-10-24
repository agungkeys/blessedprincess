import { MainLayout, Title, MainHead} from '../ui';
import Image from 'next/image';
import seo from '../helpers/seo';
import env from '../helpers/env';
import { getPage } from '../helpers/api';

const slugSeo =  {
  TITLE: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  DESC: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  KEYWORDS:
    'Blog, Blessed Princess, Blogger',
  AUTHOR: 'Fatimah',
  OG_TITLE: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_DESC: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TYPE: 'website',
  OG_SITENAME: 'Blessed Princess',
  OG_IMAGE_TYPE: 'jpg',
  OG_IMAGE_WIDTH: '1200',
  OG_IMAGE_HEIGHT: '628',
  OG_IMAGE_ALT: 'BlessedPrincess',
  OG_TWITTER_CARD: 'Summary',
  OG_TWITTER_TITLE: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TWITTER_DESC: 'About - Blessed Princess - Official Blog by Fatimah Fauzan',
  OG_TWITTER_SITE: '@fatimahfauzan93',
}
const seoData = { ...seo.DEFAULT, ...slugSeo }

function About({ props }) {
  const { query, storePage } = props;

  return (
    <MainLayout>
      <MainHead seo={seoData} />
      {storePage && 
        <div className="px-4 mx-auto max-w-screen-md">
          <Title title='About' textAlign='text-center' />
          {storePage.poster && 
              <div className="block text-center">
                  <div className="inline-grid w-full">
                    <Image
                      className="rounded"
                      src={storePage.poster ? storePage.poster.url : env.NO_IMAGE}
                      alt={storePage.title || '-'}
                      width={storePage.poster ? storePage.poster.width : env.NO_IMAGE_SIZE}
                      height={storePage.poster ? storePage.poster.height : env.NO_IMAGE_SIZE}
                      objectFit="cover"
                      layout="responsive"
                      quality={100}
                    />
                  </div>
              </div>
            || null}
          
          <div className="mb-4 text-gray-700 font-serif text-justify html-string" dangerouslySetInnerHTML={{ __html: storePage.description.html }} />
        </div>
      || null}
    </MainLayout>
  )
}

About.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const storePage = await getPage('about');
  return {
    props: { query, storePage }
  }
}

export default About;