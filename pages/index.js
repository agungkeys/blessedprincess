import Head from 'next/head';
import { MainLayout, SectionLanding, CardBlog } from '../ui';
import Image from 'next/image';

export default function Home() {
  const listBlog = [
    {
      id: 0,
      title: 'Diving to the deep',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
      date: '13 Jul 2021',
      link: '/blog/blog-description-tester',
      image: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      imageWidth: 1260,
      imageHeight: 750,
    },{
      id: 2,
      title: 'Diving to the deep',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
      date: '13 Jul 2021',
      link: '/blog/tester',
      image: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      imageWidth: 1260,
      imageHeight: 750,
    },{
      id: 3,
      title: 'Diving to the deep',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
      date: '13 Jul 2021',
      link: '/',
      image: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      imageWidth: 1260,
      imageHeight: 750,
    },{
      id: 4,
      title: 'Diving to the deep',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
      date: '13 Jul 2021',
      link: '/',
      image: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      imageWidth: 1260,
      imageHeight: 750,
    },{
      id: 5,
      title: 'Diving to the deep',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.',
      date: '13 Jul 2021',
      link: '/',
      image: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260',
      imageWidth: 1260,
      imageHeight: 750,
    }
  ]
  return (
    <MainLayout>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">

        {/* section heading landing */}
        <SectionLanding />

        {/* section list blog */}
        
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-12">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {listBlog && listBlog.map((item) => 
              {
                return (
                  <CardBlog
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    link={item.link}
                    image={item.image}
                    imageWidth={item.imageWidth}
                    imageHeight={item.imageHeight}
                  />
                )
                
              }
                

            )}
          </div>
        </div>

      </main>
    </MainLayout>
  )
}
