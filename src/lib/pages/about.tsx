import { Box, Flex, Text, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      mb={8}
      w="full"
    >
      <Flex bg="#F3E9D9" w="full" p={9} justify="center" align="center">
        <Box w={{ md: '50%', base: 'full' }}>
          <Image
            src="/assets/about.jpeg"
            w={{ base: '90%', md: '40%' }}
            mx="auto"
            mb={4}
          />
          <Text mb={2}>
            Adrian is happily married to his wife Mae for more than 30 years and
            together they have a lovely adult daughter, Rachael. Both Adrian and
            Mae are PE Certified Facilitators.
          </Text>
          <Text mb={2}>
            Adrian Chua is the founder of Sower’s Wheat, a ministry with the
            burden to teach the full counsel of God’s Word, so as to equip and
            prepare the saints for the works in God’s ministry. He founded
            Sower’s Wheat in 1998 and since then, this ministry has published
            two books – Call of God and God’s Intended Intimacy, as well as many
            articles that offered exponential book and topical studies into the
            Word of God, including a series that gave a panoramic view of the
            whole New Testament. All his written works can be found in this
            website.
          </Text>
          <Text mb={2}>
            Prior to setting up Sower’s Wheat, Adrian served as a pastoral
            ministry worker in a Methodist church for 3 years, from 1994 to
            1996. In 1997, God called him out to live by faith and wait upon
            Him, Sower’s Wheat was birthed in the following year and this
            ministry has been operating by faith since then. By the Grace of
            God, the ministry has brought him to minister in many nations in
            Southeast Asia, China, Taiwan, South Africa, North America and
            Brazil. He is also a regular speaker for YWAM FMS (Family Ministry
            School) to teach on Intimacy in Marriage. Mae had worked full-time
            with the church for a season. Since leaving full-time employment,
            she had joined Adrian in his mission trips serving and supporting
            various ministries around the world. Adrian and Mae also mentored
            marriages and minister to families. Over the past years, the family
            had travelled together ministering in many nations, touching lives
            and bearing testimony to the faithfulness of God.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default About;
