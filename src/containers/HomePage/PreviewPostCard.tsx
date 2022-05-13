import { getDateMeta } from 'lib/content'
import { BlogFrontmatter } from 'lib/frontmatters'
import { ViewsMeta } from 'modules/contents/ui/ViewsMeta'
import Link from 'next/link'
import { HStack } from 'ui/atoms/stack'
import { Card, ClampedDescription } from 'ui/card'
import { DateMeta } from 'ui/date/DateMeta'

export function PreviewPostCard(props: BlogFrontmatter) {
  const { slug, title, description } = props

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <Card className="gap-2">
          <div className="text-xl leading-tight font-bold">{title}</div>
          <ClampedDescription>{description}</ClampedDescription>
          <HStack alignItems="center" gap={6}>
            <DateMeta
              date={getDateMeta(props)}
              className="text-sm leading-none"
            />
            <ViewsMeta type="project" slug={slug} />
          </HStack>
        </Card>
      </a>
    </Link>
  )
}
