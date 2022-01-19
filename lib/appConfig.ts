const links = {
  appleTouchIcon: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/180.png',
  favIcon32: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/32.png',
  favIcon16: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/16.png',
  favIcon: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico',
  safariPinnedTab: 'https://nextify.s3-eu-west-1.amazonaws.com/img/meta/512.svg',
  preview: 'https://uxmwcecuncwkkpikkgit.supabase.in/storage/v1/object/public/meta/preview.png'
};

export const WEBSITE_HOST_URL = 'https://lesley.codes';
export const WEBSITE_HOST_URLS = ['https://lesley.codes', 'https://www.lesley.codes'];

export const defaultSeo = {
  meta: {
    title: 'Lesley Chang',
    description:
      'Product Engineer @ Ampersand. Building Faktor, a payments engine for web3 on Solana.',
    type: 'website',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    robots: 'follow, index'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: WEBSITE_HOST_URL,
    site_name: 'Lesley Chang'
  },
  twitter: {
    handle: '@rasreee',
    site: '@rasreee',
    cardType: 'summary_large_image'
  }
};

export const AppConfig = { ...links, ...defaultSeo };
