import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

interface SocialLink {
  type: string
  url: string
}

export const socialLinks: SocialLink[] = [
  {
    type: 'Github',
    url: 'https://github.com/rasreee'
  },
  { type: 'Linkedin', url: 'https://linkedin.com/in/lesleyhchang' },
  { type: 'Twitter', url: 'https://twitter.com/rasreee' },
  { type: 'Twitch', url: 'https://twitch.tv/rasreee' }
]

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          {socialLinks.map((social) => (
            <ExternalLink key={social.type} href={social.url}>
              {social.type}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
