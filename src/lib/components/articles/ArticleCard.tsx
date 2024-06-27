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
  linkBaseUrl?: string;
};

const ArticleCard = ({
  crux,
  title,
  imageSrc,
  readTime,
  linkBaseUrl = 'articles',
}: Props) => {
  return (
    <Link
      href={`${linkBaseUrl}/${title.replaceAll(' ', '-')}`}
      textDecoration="none"
    >
      <Card maxW="sm">
        <CardBody>
          {imageSrc && (
            <Image
              src={imageSrc}
              maxH="230px"
              objectFit="cover"
              w="100%"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          )}
          <Stack mt={imageSrc ? '6' : '2'} spacing="3">
            <Flex align="baseline">
              <Heading mr={3} size="md">
                {title}
              </Heading>
              <Text fontSize="small">{readTime} min read</Text>
            </Flex>

            {crux && <Text>{crux}...</Text>}
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
};

export default ArticleCard;
