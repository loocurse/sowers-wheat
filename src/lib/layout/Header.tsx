import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
];

const Header = () => {
  return (
    <Box as="header" px="20px" color="white">
      <Flex>
        <Flex align="center" justify="center" color="white" pt="20px">
          <Image src="/assets/logo.png" sizes="sm" w="60px" h="60px" />
          <Text>{`Sower's wheat`}</Text>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center">
        {routes.map((route) => (
          <Link mr="5" href={route.path} key={route.path}>
            <Text fontSize={{ md: 'lg', base: 'md' }}>
              {route.name.toUpperCase()}
            </Text>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Header;
