import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      mb={8}
      w="full"
    >
      <Flex flexDir={{ md: 'row', base: 'column' }}>
        <Flex
          bg="#F3E9D9"
          w={{ base: 'full', md: '60%' }}
          p={9}
          justify="center"
          align="center"
        >
          <Heading
            fontSize={{ md: '5xl', base: '4xl' }}
            lineHeight={{ md: 'xl', base: 'md' }}
            fontWeight="light"
          >
            Restoring initimacy in marriages through Biblical principles
          </Heading>
        </Flex>
        <Box>
          <Image src="/assets/madagascar.jpeg" />
        </Box>
      </Flex>
      <Flex justify="center" align="center" bg="white">
        <Box w="60%" py="50px">
          <Text textAlign="center">
            Many of us build successful public lives but come home to an ashamed
            private life where we find our greatest enemy, our own fleshly self.
            We believe the living and powerful word sown into our lives is the
            power unto salvation to all who believe - to save us from the inside
            out and transform our lives to live Christ fulfilling lives.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
