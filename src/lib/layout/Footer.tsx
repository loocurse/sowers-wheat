import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" pb={9} color="white">
      <Text fontSize="sm">{new Date().getFullYear()} - Sowers wheat</Text>
    </Flex>
  );
};

export default Footer;
