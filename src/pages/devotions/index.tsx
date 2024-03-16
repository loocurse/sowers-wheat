/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Progress,
  Text,
} from '@chakra-ui/react';
import fs from 'fs/promises';
import { useRouter } from 'next/router';
import { walk } from 'node-os-walk';
import { useState } from 'react';

import { calculateReadTime } from '~/lib/utils';

export const getStaticProps = async () => {
  const rootPath = 'src/lib/data/devotions';
  const devos = {};
  for await (const [root, dirs, files] of walk(rootPath)) {
    for (const file of files) {
      const type = file.path.split('/')[file.path.split('/').length - 1];
      const id = file.name;
      if (!devos[type]) {
        devos[type] = {};
      }
      const content = (
        await fs.readFile(`${file.path}/${file.name}`)
      ).toString();
      devos[type][id] = {
        readTime: calculateReadTime(content),
        title: file.name.replaceAll('-', ' ').replace('.html', ''),
        link: `devotions/${type}/${id}`,
      };
    }
  }
  return { props: { devos } };
};

export default ({ devos }) => {
  const [toShow, setToShow] = useState(devos);
  const router = useRouter();
  const clickHandler = (content) => {
    if (content.link) {
      router.push(content.link);
    } else {
      setToShow(content);
    }
  };
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
        templateColumns={{ md: 'repeat(1, 1fr)', base: 'repeat(1, 1fr)' }}
        gap={3}
        mx={5}
        py={9}
      >
        {Object.entries(toShow)
          .sort(
            ([typea], [typeb]) => +typea.split(')')[0] - +typeb.split(')')[0]
          )
          .map(([type, content]) => {
            return (
              <GridItem>
                <Box
                  onClick={() => clickHandler(content)}
                  border="1px solid black"
                  borderRadius="4px"
                  px={4}
                  py={2}
                  my={1}
                  w="400px"
                  cursor="pointer"
                >
                  <Text fontWeight="bold">
                    {type.replace('.html', '').replaceAll('-', ' ')}
                  </Text>
                  {/* <Progress
                    mt={2}
                    colorScheme="green"
                    height="12px"
                    value={20}
                    borderRadius="4px"
                  /> */}
                </Box>
              </GridItem>
            );
          })}
      </Grid>
    </Flex>
  );
};
