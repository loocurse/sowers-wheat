/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import fs from 'fs/promises';
import { NextSeo } from 'next-seo';
import { walk } from 'node-os-walk';

import { calculateReadTime } from '~/lib/utils';

export const getStaticPaths = async () => {
  const articleFiles = await fs.readdir('src/lib/data/articles');

  const paths = [] as any;

  for await (const [root, dirs, files] of walk('src/lib/data/devotions')) {
    for (const file of files) {
      const type = file.path.split('/')[file.path.split('/').length - 1];
      const id = file.name;
      // eslint-disable-next-line no-console
      console.log('getStaticPathsForDevotions', file.path, type, id);
      paths.push({ params: { id, type } });
    }
  }

  return { paths, fallback: false };
};

export async function getStaticProps({
  params,
}: {
  params: { id: string; type: string };
}) {
  const title = params.id.replaceAll('-', ' ').replace('.html', '');
  const content = (
    await fs.readFile(`src/lib/data/devotions/${params.type}/${params.id}`)
  ).toString();
  const article = {
    content,
    id: params.id,
    title,
    readTime: calculateReadTime(content),
  };

  return {
    props: {
      article,
    },
  };
}

export default function Article({
  article,
}: {
  article: { title: string; readTime: number; content: string };
}) {
  return (
    <Flex
      direction="column"
      minHeight="70vh"
      pt="20px"
      mb={8}
      w="full"
      bg="#F3E9D9"
    >
      <NextSeo title={article?.title} />
      <Box w="80%" mx="auto">
        <Heading mt={6}>{article?.title}</Heading>
        <Text mt={2}>{article?.readTime} min read</Text>
        {/* <Image my={3} w="50%" src={image} /> */}
        <Box
          my={3}
          lineHeight={7}
          className="article"
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: article?.content }}
        />
      </Box>
    </Flex>
  );
}
