import { AppConfig } from 'lib/AppConfig'
import Image from 'next/image'
import Link from 'next/link'

import Page from '../ui/Page'

export default function HomeRoute() {
  return (
    <Page>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start gap-6">
          <div className="flex flex-col gap-5 w-[60%]">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              {AppConfig.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-16">{AppConfig.description}</p>
          </div>
          <div className="relative mb-8 sm:mb-0">
            <Image
              alt="Lesley Chang"
              height={200}
              width={200}
              src="/avatar.png"
              className="rounded-full filter grayscale !min-h-[10rem] !min-w-[10rem]"
            />
          </div>
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Page>
  )
}
