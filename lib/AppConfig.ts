const links = {
  appleTouchIcon: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/180.png',
  favIcon32: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/32.png',
  favIcon16: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/16.png',
  favIcon: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico',
  safariPinnedTab: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/512.svg',
  preview: 'https://uxmwcecuncwkkpikkgit.supabase.in/storage/v1/object/public/meta/preview.png'
}

const seo = {
  title: 'Lesley Chang',
  description:
    'I am a Product Engineer, meaning I am excited about being able to both build and take part in deciding in product direction!',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lesley.codes',
    site_name: 'Lesley Chang'
  },
  twitter: {
    handle: '@rasreee',
    site: '@rasreee',
    cardType: 'summary_large_image'
  }
}

export const AppConfig = { ...links, ...seo }
