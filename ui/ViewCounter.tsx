import fetcher from 'lib/fetcher'
import { Views } from 'models/views'
import { useEffect } from 'react'
import useSWR from 'swr'

export default function ViewCounter({ slug }) {
  const { data: views } = useSWR<Views>(`/api/views/${slug}`, fetcher)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      })

    registerView()
  }, [slug])

  return <span> {`${views?.count ?? '...'} views`}</span>
}
