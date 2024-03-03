import { Box, Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
  readTime: number;
  content: string;
  title: string;
};

const ArticlePage = async ({ readTime, content, title }: Props) => {
  return (
    <Flex
      direction="column"
      minHeight="70vh"
      pt="20px"
      mb={8}
      w="full"
      bg="#F3E9D9"
    >
      <Box w="80%" mx="auto">
        <Heading mt={6}>{title}</Heading>
        <Text mt={2}>{readTime} min read</Text>
        {/* <Image my={3} w="50%" src={image} /> */}
        <Box
          my={3}
          lineHeight={7}
          className="article"
          textAlign="justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </Flex>
  );
};

export default ArticlePage;
