import { Box, Flex, Heading, Text, Image, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

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
            textAlign={{ base: 'center', md: 'left' }}
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
          <Text textAlign="center" fontSize={{ md: 'xl', base: 'md' }}>
            Many of us build successful public lives but come home to an ashamed
            private life where we find our greatest enemy, our own fleshly self.
            We believe the living and powerful word sown into our lives is the
            power unto salvation to all who believe - to save us from the inside
            out and transform our lives to live Christ fulfilling lives.
          </Text>
        </Box>
      </Flex>
      <Flex justify="center" align="center" w="full" bg="#F3E9D9">
        <Box w="100%" py="50px" textAlign="center">
          <Heading w="100%">Contact us</Heading>
          <Flex justify="center" mt={5}>
            <Icon
              as={FaWhatsapp}
              w="50px"
              mx="10px"
              h="50px"
              cursor="pointer"
              onClick={() =>
                window.open('https://api.whatsapp.com/send?phone=6594566907')
              }
            />
            <Icon
              as={MdOutlineEmail}
              mx="10px"
              w="50px"
              h="50px"
              cursor="pointer"
              onClick={() => window.open('mailto:sowerswheat777@gmail.com')}
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
