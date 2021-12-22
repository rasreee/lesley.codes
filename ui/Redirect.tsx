import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface RedirectProps {
  to: string
}

export const Redirect: React.FC<RedirectProps> = ({ to }) => {
  const router = useRouter()

  useEffect(() => {
    router.push(to)
  }, [router, to])

  return null
}
