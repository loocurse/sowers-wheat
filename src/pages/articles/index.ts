/* eslint-disable no-console */
import fs from 'fs/promises';

import imageMap from '~/lib/data/image-map.json';
import Articles from '~/lib/pages/article';
import { calculateReadTime, getCrux } from '~/lib/utils';

export async function getStaticProps() {
  const path = 'src/lib/data/articles';
  const articleFiles = await fs.readdir(path);
  const articles = await Promise.all(
    articleFiles.map(async (filename) => {
      const content = (await fs.readFile(`${path}/${filename}`)).toString();
      const title = filename.split('.html')[0];
      return {
        title,
        image: imageMap[title],
        content,
        readTime: calculateReadTime(content),
        crux: getCrux(content),
      };
    })
  );
  return { props: { articles } };
}

export default Articles;
