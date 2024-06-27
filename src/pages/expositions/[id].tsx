/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import fs from 'fs/promises';
import { NextSeo } from 'next-seo';

import { calculateReadTime } from '~/lib/utils';

export const getStaticPaths = async () => {
  const articleFiles = await fs.readdir('src/lib/data/expositions');
  console.log(articleFiles);
  const paths = articleFiles.map((filename) => ({
    params: { id: filename.split('.html')[0] },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const title = params.id.replaceAll('-', ' ');
  const content = (
    await fs.readFile(`src/lib/data/expositions/${params.id}.html`)
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
