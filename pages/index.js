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


      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/agungkeys"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by akwebsite
        </a>
      </footer>
    </div>
  )
}
