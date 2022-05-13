import Layout from 'ui/layouts/Layout'

function getLayout(page: any) {
  return <Layout>{page}</Layout>
}

export type PageComponent = React.FC<any> & {
  getLayout: (page: JSX.Element) => JSX.Element
}

export function getPage(Component: React.ComponentType<any>): PageComponent {
  const Page = Component as PageComponent

  Page.getLayout = getLayout

  return Page
}
