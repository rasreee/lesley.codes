import fetcher from 'lib/fetcher'
import { IPost } from 'models/post'
import { Views } from 'models/views'
import Link from 'next/link'
import useSWR from 'swr'

export default function BlogPost({ title, excerpt, slug }: Pick<IPost, 'title' | 'excerpt' | 'slug'>) {
  const { data: views } = useSWR<Views>(`/api/views/${slug}`, fetcher)

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">{title}</h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {`${views?.count ?? '...'} views`}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
