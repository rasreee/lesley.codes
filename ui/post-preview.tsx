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
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">{title}</h4>
            <DateFormatter dateString={publishedAt} />
            <p className="w-32 text-left text-gray-500 md:text-right">{`${views?.count ?? '...'} views`}</p>
          </div>
          <div className="e">
            <p className={'text overflow-ellipsis line-clamp-3'}>{excerpt}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
