import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaPaypal } from 'react-icons/fa';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Devotions', path: '/devotions' },
  { name: 'Articles', path: '/articles' },
  { name: 'Expositions', path: '/expositions' },
];

const Header = () => {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box as="header" px="20px" color="white">
      <Flex justify="space-between" align="center">
        <Flex align="center" justify="center" color="white" mt="20px">
          <Image src="/assets/logo.png" sizes="sm" w="60px" h="60px" />
          <Text fontWeight="bold">{`Sower's wheat`}</Text>
        </Flex>
        <Button mr="3" bgColor="brand.100" onClick={onOpen}>
          Donate
        </Button>
      </Flex>
      <Flex w="100%" justify="center">
        {routes.map((route) => (
          <Link mr="5" href={route.path} key={route.path}>
            <Text
              fontSize={{ md: 'lg', base: 'md' }}
              decoration={router.pathname === route.path ? 'underline' : ''}
            >
              {route.name.toUpperCase()}
            </Text>
          </Link>
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Donate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="paynow.png" my={5} w="200px" h="200px" mx="auto" />
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                or
              </AbsoluteCenter>
            </Box>
            <Box w="90%" mx="auto">
              <Button
                leftIcon={<Icon as={FaPaypal} />}
                w="100%"
                my={3}
                onClick={() =>
                  window.open(
                    'https://www.paypal.com/paypalme/sowerswheat?country.x=SG&locale.x=en_GB'
                  )
                }
              >
                Paypal
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
