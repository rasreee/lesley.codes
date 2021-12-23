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
import { H4, P } from './typography'

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
        <div className="w-full ml-6 h-full min-h-full flex flex-col items-start gap-2">
          <div>
            <div className="flex items-start">
              <H4 className="w-full text-lg align-top">{title}</H4>
              <P className="text-right w-32 text-base text-hint leading-tight pt-1">{`${views?.count ?? 0} views`}</P>
            </div>
          </div>

          <DateFormatter size="sm" pattern="LLL d" dateString={publishedAt} className="text-hint" />
          <p className={'text overflow-ellipsis line-clamp-2 pr-3'}>{excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
