import fs from 'fs/promises';

import imageMap from '../../lib/data/image-map.json';
import Articles from '~/lib/pages/article';
import { calculateReadTime, getCrux } from '~/lib/utils';

export const getStaticProps = async () => {
  const rootPath = 'src/lib/data/articles';
  const articleFileNames = await fs.readdir(rootPath);
  const articles = await Promise.all(
    articleFileNames.map(async (filename) => {
      const content = (await fs.readFile(`${rootPath}/${filename}`)).toString();
      const title = filename.split('.html')[0];
      const link = encodeURI(title);
      const readTime = calculateReadTime(content);
      return {
        content,
        title,
        link,
        readTime,
        image: imageMap[title],
        crux: getCrux(content),
      };
    })
  );
  return { props: { articles } };
};

export default Articles;
