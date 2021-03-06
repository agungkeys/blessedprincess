import React, { Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  MenuIcon,
  XIcon,
  BookOpenIcon,
} from '@heroicons/react/outline';
import NextLink from '../../elements/NextLink';

const Navbar = () => {
  return (
      <Popover className="sticky top-0 z-10 relative bg-white w-full">
        <div className="mx-auto px-2 sm:px-6" style={{backgroundColor: "#ecd0ca"}} >
        {/* <div className="mx-auto px-2 sm:px-6" style={{backgroundColor: "#ecdedb"}} > */}
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NextLink href="/">
                {/* <span className="sr-only">Workflow</span> */}
                {/* <Image
                  src="/logo.svg"
                  alt=""
                  height={36}
                  width={130}
                /> */}
                <h1 className="text-3xl font-bold font-cursive text-center text-pink-800">Blessed Princess</h1>
              </NextLink>
            </div>
            <div className="mr-1 my-1 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-100">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <NextLink href="/blog" className="text-base font-medium text-gray-800 hover:text-pink-800 hover:underline">
                Blog
              </NextLink>
              <NextLink href="/about" className="ml-8 text-base font-medium text-gray-800 hover:text-pink-800 hover:underline">
                About
              </NextLink>
              <NextLink
                href="/contact"
                className="ml-8 text-base font-medium text-gray-800 hover:text-pink-800 hover:underline"
              >
                Contact
              </NextLink>
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
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    {/* <Image
                      className="h-16 w-auto"
                      src="/logo.svg"
                      alt="Workflow"
                      height={36}
                      width={130}
                    /> */}
                    <h1 className="text-2xl font-bold font-cursive text-center text-pink-800">Blessed Princess</h1>
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
                      <NextLink
                        href="/blog"
                        className="flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">Blog</span>
                      </NextLink>
                      <NextLink
                        href="/about"
                        className="flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">About</span>
                      </NextLink>
                      <NextLink
                        href="/contact"
                        className="flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                      </NextLink>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
  )
}

export default Navbar;