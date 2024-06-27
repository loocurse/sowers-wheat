import fs from 'fs/promises';

import Exposition from '~/lib/pages/exposition';
import { calculateReadTime } from '~/lib/utils';

export const getStaticProps = async () => {
  const rootPath = 'src/lib/data/expositions';
  const articleFileNames = await fs.readdir(rootPath);
  const articles = await Promise.all(
    articleFileNames.map(async (filename) => {
      const content = (await fs.readFile(`${rootPath}/${filename}`)).toString();
      const title = filename.split('.html')[0].replaceAll('-', ' ');
      const link = filename.split('.html')[0];
      const readTime = calculateReadTime(content);
      return {
        content,
        title,
        link,
        readTime,
      };
    })
  );
  return { props: { articles } };
};

export default Exposition;
