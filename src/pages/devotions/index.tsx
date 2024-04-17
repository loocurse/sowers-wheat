/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-continue */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import fs from 'fs/promises';
import { walk } from 'node-os-walk';
import path from 'path';
import { useEffect, useState } from 'react';

import imageMap from '../../lib/data/devotions-map.json';
import { calculateReadTime } from '~/lib/utils';

export const getStaticProps = async () => {
  const rootPath = 'src/lib/data/devotions';
  const devos = {};
  for await (const [root, dirs, files] of walk(rootPath)) {
    for (const file of files) {
      if (file.name.endsWith('.json')) continue;
      const id = file.name;
      const filePath = file.path.split(path.sep);
      const type =
        filePath[filePath.length - 1] === id
          ? filePath[filePath.length - 2]
          : filePath[filePath.length - 1];
      if (!devos[type]?.devotions) {
        devos[type] = {
          image: imageMap[type].image,
          devotions: {},
        };
      }
      const content = (
        await fs.readFile(`${file.path}/${file.name}`)
      ).toString();
      devos[type].devotions[id] = {
        readTime: calculateReadTime(content),
        title: file.name.replaceAll('-', ' ').replace('.html', ''),
        link: `devotions/${type}/${id}`,
      };
    }
  }
  return { props: { devos } };
};

export default ({ devos }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(JSON.parse(localStorage.getItem('progress') as any) || {});
  }, []);

  const progressClickHandler = (id, state) => {
    const updatedProgress = {
      ...progress,
      [id]: state,
    };
    localStorage.setItem('progress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
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
        py={2}
      >
        {Object.entries(devos)
          .sort(
            ([typea], [typeb]) => +typea.split(')')[0] - +typeb.split(')')[0]
          )
          .map(([type, content]): any => {
            return (
              <GridItem key={type}>
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={(content as any).image}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Accordion allowToggle>
                      <AccordionItem>
                        <AccordionButton
                          display="flex"
                          justifyItems="space-between"
                          alignItems="center"
                          p={0}
                          py={3}
                        >
                          <Heading fontSize="md">
                            {
                              type
                                .replace('.html', '')
                                .replaceAll('-', ' ')
                                .split(')')[1]
                            }
                          </Heading>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          {Object.entries((content as any).devotions)
                            .sort(
                              ([x, devo], [y, devo2]) =>
                                +(devo as any).title.split(')')[0] -
                                +(devo2 as any).title.split(')')[0]
                            )
                            .map(([title, devo]) => (
                              <>
                                <Link href={(devo as any).link} py={2}>
                                  <Flex py={2}>
                                    <Checkbox
                                      onChange={(e) =>
                                        progressClickHandler(
                                          (devo as any).link,
                                          (e.target as any).checked
                                        )
                                      }
                                      isChecked={progress[(devo as any)?.link]}
                                      mr={3}
                                      rounded="full"
                                      variant="circular"
                                    />
                                    <Text>
                                      {(devo as any).title.split(')')[1]}
                                    </Text>
                                  </Flex>
                                </Link>
                                <Divider />
                              </>
                            ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })}
      </Grid>
    </Flex>
  );
};
