import Head from 'next/head';
import { MainLayout } from '../ui';
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">

        {/* section heading landing */}
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-pink-100 p-1">
                <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="m286 151c-8.284 0-15 6.716-15 15v120c0 8.284 6.716 15 15 15s15-6.716 15-15v-120c0-8.284-6.716-15-15-15z"/>
                    <path d="m346 151c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15s15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"/>
                    <path d="m226 151c-8.284 0-15 6.716-15 15v45h-30v-45c0-8.284-6.716-15-15-15s-15 6.716-15 15v120c0 8.284 6.716 15 15 15s15-6.716 15-15v-45h30v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-120c0-8.284-6.716-15-15-15z"/>
                    <circle cx="346" cy="286" r="15"/>
                    <path d="m376 91h-240c-74.991 0-136 60.561-136 135 0 69.41 53.038 126.752 121 134.185v45.815c0 5.532 3.045 10.615 7.922 13.225 4.867 2.604 10.784 2.331 15.398-.744l86.222-57.481h145.458c74.99 0 136-60.561 136-135s-61.01-135-136-135zm0 240h-150c-2.961 0-5.856.877-8.32 2.519l-66.68 44.453v-31.972c0-8.284-6.716-15-15-15-58.449 0-106-47.103-106-105s47.551-105 106-105h240c58.448 0 106 47.103 106 105s-47.552 105-106 105z"/>
                  </g>
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Let&apos;s introduce my self<br className="hidden" />
                  <span className="inline-block text-pink-700">
                    Hallo...
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  blablabla blabla blabal blabl blablab bla 
                  blablabla blabla blabal blabl blablab bla 
                  blablabla blabla blabal blabl blablab bla 
                  blablabla blabla blabal blabl blablab bla 
                </p>
              </div>
              <div>
                <a
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-pink-700 hover:text-pink-800"
                >
                  About me
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <div className="mb-6 shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56">
                  <Image
                    className="rounded"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    width={222}
                    height={224}
                    objectFit='cover'
                    layout="responsive"
                    quality={100}
                  />
                </div>
                <div className="w-20 h-20 shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40">
                  <Image
                    className="rounded"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                    width={128}
                    height={128}
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              </div>
              <div className="px-3">
                <div className="w-40 h-40 shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80">
                  <Image
                    className="rounded"
                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                    width={256}
                    height={256}
                    objectFit='cover'
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </MainLayout>
  )
}
