import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  Text,
  Link,
  Image,
  Flex,
} from '@chakra-ui/react';

type Props = {
  crux: string;
  title: string;
  imageSrc: string;
  readTime: number;
};

const ArticleCard = ({ crux, title, imageSrc, readTime }: Props) => {
  return (
    <Link href={`articles/${title.replaceAll(' ', '-')}`} textDecoration="none">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={imageSrc}
            maxH="230px"
            objectFit="cover"
            w="100%"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex align="baseline">
              <Heading mr={3} size="md">
                {title}
              </Heading>
              <Text fontSize="small">{readTime} min read</Text>
            </Flex>

            <Text>{crux}...</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
};

export default ArticleCard;
