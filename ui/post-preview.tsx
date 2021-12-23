import Link from 'next/link'

type Props = {
  title: string
  image: string
  publishedAt: string
  excerpt: string
  slug: string
}

import classNames from 'classnames'
import fetcher from 'lib/fetcher'
import { Views } from 'models/views'
import Image from 'next/image'
import useSWR from 'swr'

import DateFormatter from './DateFormatter'

export default function PostPreview({ title, excerpt, publishedAt, image, slug }: Props) {
  const { data: views } = useSWR<Views>(`/api/views/${slug}`, fetcher)

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full flex items-center justify-center my-3">
        <Image
          src={image}
          height={180}
          width={140}
          alt={`Cover Image for ${title}`}
          className={classNames('shadow-sm', {
            'hover:shadow-lg transition-shadow duration-200': slug
          })}
        />
        <div className="w-full ml-6 h-full min-h-full flex flex-col justify-between  gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-start relative">
              <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">{title}</h4>
              <p className="py-1 text-right w-32 text-gray-500 text-base">{`${views?.count ?? 0} views`}</p>
            </div>
            <div className="flex items-center justify-between">
              <DateFormatter size="xs" pattern="LLL d" dateString={publishedAt} />
            </div>
          </div>
          <div className="">
            <p className={'text overflow-ellipsis line-clamp-2 pr-3'}>{excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
