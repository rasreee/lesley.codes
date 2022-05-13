import { css } from '@emotion/react'
import styled from '@emotion/styled'
import invariant from 'lib/invariant'
import { DynamicGrid } from 'ui/atoms/grid'
import { above, only } from 'ui/lib/breakpoints'
import { ArrowLink } from 'ui/links/ArrowLink'

export interface PagePreviewSectionProps<
  Item extends {} = {},
  IdKey extends keyof Item = keyof Item,
> {
  items: Item[]
  idKey: IdKey
  renderItem: (item: Item) => JSX.Element
  title: string
  pageHref: string
}

export function PagePreviewSection<Item extends {} = {}>({
  items,
  idKey,
  renderItem: RenderItem,
  title,
  pageHref,
}: PagePreviewSectionProps<Item>) {
  const getId = (item: Item): string => {
    const id = item[idKey as keyof Item]

    invariant(
      typeof id === 'string',
      `item idKey gave non-string value: ${typeof id}`,
    )

    return id
  }

  return (
    <section>
      <div className="container">
        <ContentPreviewContainer>
          <ContentPreviewHeader>
            <ContentPreviewTitle>{title}</ContentPreviewTitle>
          </ContentPreviewHeader>
          <DynamicGrid>
            {items.map((item) => (
              <div key={getId(item)} id={getId(item)}>
                <RenderItem {...item} />
              </div>
            ))}
          </DynamicGrid>
        </ContentPreviewContainer>
        <div className="flex items-center justify-end">
          <ArrowLink href={pageHref}>{`View ${title.toLowerCase()}`}</ArrowLink>
        </div>
      </div>
    </section>
  )
}

const ContentPreviewContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 0;
  ${only('tablet')} {
    gap: 0.875rem;
  }
  ${above('tablet')} {
    padding: 0.75rem 0;
    gap: 1rem;
  }
`

const ContentPreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContentPreviewTitle = styled.h3(
  ({ theme }) =>
    css`
      font-weight: ${theme.fontWeights.extrabold};
      font-size: ${theme.fontSizes['2xl']};
      ${above('mobile')} {
        font-size: ${theme.fontSizes['3xl']};
      }
    `,
)
