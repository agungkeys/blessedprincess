import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  MenuIcon,
  XIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blessed Princess - Official Page by Fatimah</title>
        <meta name="description" content="Blessed Princess - Official Page by Fatimah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Popover className="relative bg-white w-full">
          <div className="mx-auto px-2 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="absolute top-2 w-auto h-14 md:h-14 lg:h-14"
                    src="/logo.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="mr-1 my-1 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-100">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
                <a href="#" className="ml-8 text-base font-medium text-gray-500 hover:text-gray-900">
                  About
                </a>
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-700 hover:bg-pink-800"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-16 w-auto"
                        src="/logo.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-100">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <nav className="grid gap-y-8">
                        <a
                          href=""
                          className="flex items-center rounded-md hover:bg-gray-50"
                        >
                          <BookOpenIcon className="flex-shrink-0 h-6 w-6 text-pink-700" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">Blog</span>
                        </a>
                        <a
                          href=""
                          className="flex items-center rounded-md hover:bg-gray-50"
                        >
                          <ChartBarIcon className="flex-shrink-0 h-6 w-6 text-pink-700" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-gray-900">About</span>
                        </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-700 hover:bg-pink-800"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

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
                  Let's introduce my self
                  <br className="hidden md:block" />
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
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

      </main>

    
    </div>
  )
}
