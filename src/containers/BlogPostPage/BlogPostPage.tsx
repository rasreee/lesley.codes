import { ContentInfo } from 'lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { useRegisterContentView } from 'modules/contents/hooks'
import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
import { DynamicMeta, NotionAside, ReloadDevtool } from 'ui/components'

const components = {
  Head,
  Image,
  NotionAside,
  DynamicMeta,
}

const BlogPostPage: React.FC<ContentInfo> = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])

  useRegisterContentView({ type: 'blog', slug: frontmatter.slug })

  return (
    <>
      <ReloadDevtool />
      <section>
        <div className="container">
          <section className="lg:grid-cols-[auto,250px] lg:grid lg:gap-8">
            <article className="mdx mx-auto mt-4 w-full transition-colors dark:prose-invert">
              <Component
                components={
                  {
                    ...components,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </article>
          </section>
        </div>
      </section>
    </>
  )
}

export { BlogPostPage }
