/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Sowers Wheat',
  titleTemplate: '%s | Sowers Wheat',
  defaultTitle: 'Sowers Wheat',
  description: 'Sowers wheat ministry',
  openGraph: {
    url: 'https://sowerswheat.com',
    title: 'Sowers Wheat',
    description: 'Sowers wheat ministry',
    images: [
      {
        url: 'public/favicon.ico',
        alt: 'Sowers Wheat',
      },
    ],
    site_name: 'Sowers Wheat',
  },
};

export default defaultSEOConfig;
