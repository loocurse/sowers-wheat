import { Flex, Grid, GridItem } from '@chakra-ui/react';

import ArticleCard from '~/lib/components/articles/ArticleCard';

const Articles = ({
  articles,
}: {
  articles: {
    title: string;
    content: string;
    image: string;
    crux: string;
    readTime: number;
  }[];
}) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      mb={8}
      w="full"
      bg="#F3E9D9"
    >
      <Grid
        templateColumns={{ md: 'repeat(3, 1fr)', base: 'repeat(1, 1fr)' }}
        gap={3}
        mx={5}
        py={9}
      >
        {articles.map(({ crux, title, readTime, image }) => (
          <GridItem>
            <ArticleCard
              title={title}
              crux={crux}
              imageSrc={image}
              readTime={readTime}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Articles;
