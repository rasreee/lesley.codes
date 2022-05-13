import { StaticImageData } from 'next/image'
import awesomeSolanaDevImageSrc from 'public/images/awesome-solana-dev.png'
import cmdKSearchModalGif from 'public/images/cmd-k-search.gif'
import jangitoriImageSrc from 'public/images/jangitori.png'

export type ContentTag = {
  type: 'technology'
  name: string
}

export type Project = {
  slug: string
  title: string
  description: string
  updatedAt: string
  tags: ContentTag[]
  gifSrc?: StaticImageData
  imageSrc?: StaticImageData | string
  websiteUrl?: string
  links: { github: string; codeSandbox?: string; npm?: string }
}

function toContentTag(name: string): ContentTag {
  return { type: 'technology', name }
}

export const projects: Project[] = [
  {
    slug: 'jangitori',
    title: 'Payroll Management Dashboard',
    description:
      'Payroll management dashboard built with Next.js, Typescript, MobX, and Emotion and deployed on Vercel. Being used to manage ~50 contract cleaners at a commercial cleaning company called iJAN in Georgia.',
    updatedAt: '2022-01-25',
    imageSrc: jangitoriImageSrc,
    // gifSrc: jangitoriGifSrc,
    websiteUrl: 'https://www.jangitori.co',
    links: { github: 'https://github.com/rasreee/jangitori.co' },
    tags: ['nextjs', 'typescript', 'emotion', 'react', 'postgresql'].map(
      toContentTag,
    ),
  },
  {
    slug: 'cmd-k-search-modal',
    title: '⌘K Search Modal React Component',
    gifSrc: cmdKSearchModalGif,
    imageSrc: '/images/cmd-k-search-modal.png',
    description:
      "Inspired by the UX searching on Tailwind's website, this was my recreation of it as a React component. Built using React, Emotion, and Typescript.",
    updatedAt: '2022-01-25',
    websiteUrl: 'https://codesandbox.io/s/k-search-modal-v1-dhjes',
    links: {
      github: 'https://github.com/rasreee/cmd-k-search-modal-react',
      codeSandbox: 'https://codesandbox.io/s/k-search-modal-v1-dhjes',
    },
    tags: ['typescript', 'react', 'emotion'].map(toContentTag),
  },
  {
    slug: 'pg-data-utils',
    title: 'PostgreSQL Data Utils (NPM Package)',
    description:
      'An NPM package for utility functions and types that is intended for handling data from PostgreSQL in Node.js applications. Written with Typescript and bundled with Rollup. Built with Typescript, and bundled with Rollup.',
    updatedAt: '2022-01-24',
    links: {
      github: 'https://github.com/rasreee/pg-data-utils',
      npm: 'https://www.npmjs.com/package/pg-data-utils',
    },
    tags: ['typescript', 'rollup', 'postgresql'].map(toContentTag),
  },
  {
    slug: 'awesome-solana-dev',
    title: 'AwesomeSolana.dev',
    imageSrc: awesomeSolanaDevImageSrc,
    description:
      'Website for curating "Awesome" Solana development resources, in particular open-source Github repos, real-world examples of coding on Solana, tutorials, and more. Built with Next.js, Typescript, and Emotion and deployed on Vercel.',
    updatedAt: '2022-12-25',
    websiteUrl: 'https://awesomesolana.dev',
    links: { github: 'https://github.com/rasreee/awesome-solana-dev' },
    tags: ['nextjs', 'typescript', 'emotion', 'react'].map(toContentTag),
  },
  {
    slug: 'rust-labs',
    title: 'Rust Labs',
    description:
      'Collection of programming exercises and tutorials to make learning Rust easier. Wrote detailed guides about setting up and using GDB to debug Rust programs, debugging with user input, output redirection, pointers and structures, and other eccentrics about the Rust programming language.',
    updatedAt: '2022-10-25',
    links: { github: 'https://github.com/rasreee/rust-labs' },
    tags: ['rust'].map(toContentTag),
  },
]
