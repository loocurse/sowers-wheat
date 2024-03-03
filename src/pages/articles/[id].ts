/* eslint-disable @typescript-eslint/no-unused-vars */
import fs from 'fs/promises';

import ArticlePage from '~/lib/pages/article/article';
import { calculateReadTime } from '~/lib/utils';

export const getStaticPaths = async () => {
  const articleFiles = await fs.readdir('src/lib/data/articles');
  const paths = articleFiles.map((filename) => ({
    params: { id: encodeURI(filename.split('.html')[0]) },
  }));
  return { paths, fallback: true };
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const title = decodeURI(params.id);
  const article = await fs.readFile(`src/lib/data/articles/${title}.html`);
  // eslint-disable-next-line no-console
  console.log('xxx', {
    content: article.toString(),
    title,
    readTime: calculateReadTime(article.toString()),
  });
  return {
    props: {
      content: 'article.toString()',
      title: '',
      readTime: 0,
    },
  };
}

export default ArticlePage;
