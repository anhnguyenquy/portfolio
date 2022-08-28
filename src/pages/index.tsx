import { ChevronRightIcon, DownloadIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Heading, Link, List, ListItem, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import thumbComroots from 'public/images/comroots.jpeg'
import thumbDebatersToolkit from 'public/images/debaters-toolkit.jpeg'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear, GridItem, NoUnderlineLink, Paragraph, ProfileImage, Section } from 'src/components'

const Home: NextPage = () => (
  <Container>
    <Box
      borderRadius='lg'
      mt={4}
      mb={6}
      p={3}
      textAlign='center'
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      Hi, I&apos;m a senior high school student from Vietnam!
    </Box>
    <Flex>
      <Box flexGrow={1}>
        <Heading as='h2' variant='page-title'>
          Anh Nguyen Quy
        </Heading>
        <Text>
          Communist Developer ( Marxist-Leninist / Full-stack )
        </Text>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign='center'>
        <Box
          borderColor='whiteAlpha.800'
          borderWidth={2}
          borderStyle='solid'
          w='100px'
          h='100px'
          display='inline-block'
          borderRadius='full'
          overflow='hidden'
        >
          <ProfileImage
            src='/images/avatar.jpg'
            alt='Profile Image'
            borderRadius='full'
            width='100%'
            height='100%'
          />
        </Box>
      </Box>
    </Flex>

    <Section delay={0.1}>
      <Heading as='h3' variant='section-title'>
        About
      </Heading>
      <Paragraph>
        I&apos;m a technology enthusiast and Marxist-Leninist from
        Hanoi, Vietnam. My primary fields of interest are full-stack software development,
        cybersecurity, and revolutionary class-based politics. Technologies that I&apos;m
        familiar with include React, Next.js, Express.js, REST, GraphQL, SQL, MongoDB, and Firebase.
        Currently, I&apos;m in my last year at&nbsp;
        <NextLink href='http://hn-ams.edu.vn' passHref scroll={false}>
          <Link>Hanoi-Amsterdam High School</Link>
        </NextLink>
        &nbsp;and about to apply for a BSc in Computer Science.
      </Paragraph>
      <Box textAlign='center' my={4}>
        <NextLink href='/resume' passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('teal', 'orange')}>
            More
          </Button>
        </NextLink>
      </Box>
    </Section>

    <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>
        Bio
      </Heading>
      <BioSection>
        <BioYear>2005</BioYear>
        Born in Hanoi, Vietnam
      </BioSection>
      <BioSection>
        <BioYear>2011</BioYear>
        Enrolled at&nbsp;
        <NextLink href='http://thucnghiem.edu.vn/gioi-thieu-chung_n58105_g763.aspx' passHref scroll={false}>
          <Link>Thuc Nghiem Primary School</Link>
        </NextLink>
      </BioSection>
      <BioSection>
        <BioYear>2016</BioYear>
        Enrolled at&nbsp;
        <NextLink href='https://aschool.edu.vn/page/thcs-archimedes-academy' passHref scroll={false}>
          <Link>Archimedes Academy Secondary School</Link>
        </NextLink>
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        Enrolled at&nbsp;
        <NextLink href='http://hn-ams.edu.vn' passHref scroll={false}>
          <Link>Hanoi-Amsterdam High School for the Gifted</Link>
        </NextLink>
      </BioSection>
    </Section>

    <Section delay={0.3}>
      <Heading as='h3' variant='section-title'>
        Interests
      </Heading>
      <Paragraph>
        Tennis,&nbsp;
        <Link href='https://github.com/anhnguyenquy' target='_blank'>
          Software Development
        </Link>,&nbsp;
        <Link href='https://www.offensive-security.com' target='_blank'>
          Cyber Security
        </Link>,&nbsp;
        <Link href='https://www.marxists.org' target='_blank'>
          Marxism
        </Link>
        , History, and Politics
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as='h3' variant='section-title'>
        @me
      </Heading>
      <List>
        <ListItem>
          <NoUnderlineLink href='tel:84-814-730-247' target='_blank'>
            <Button
              variant='ghost'
              colorScheme={useColorModeValue('teal', 'orange')}
              leftIcon={<PhoneIcon />}
            >
              +84 814 730 247
            </Button>
          </NoUnderlineLink>
        </ListItem>
        <ListItem>
          <NoUnderlineLink href='mailto:anhnguyenquy2407@gmail.com' target='_blank'>
            <Button
              variant='ghost'
              colorScheme={useColorModeValue('teal', 'orange')}
              leftIcon={<EmailIcon />}
            >
              anhnguyenquy2407@gmail.com
            </Button>
          </NoUnderlineLink>
        </ListItem>
        <ListItem>
          <NoUnderlineLink href='https://github.com/anhnguyenquy' target='_blank'>
            <Button
              variant='ghost'
              colorScheme={useColorModeValue('teal', 'orange')}
              leftIcon={<IoLogoGithub />}
            >
              @anhnguyenquy
            </Button>
          </NoUnderlineLink>
        </ListItem>
        <ListItem>
          <NoUnderlineLink href='https://www.linkedin.com/in/anh-nguyen-4366791b5' target='_blank'>
            <Button
              variant='ghost'
              colorScheme={useColorModeValue('teal', 'orange')}
              leftIcon={<IoLogoLinkedin />}
            >
              Anh Nguyen Quy
            </Button>
          </NoUnderlineLink>
        </ListItem>
      </List>

    </Section>

    <Section delay={0.3}>
      <Heading as='h3' variant='section-title'>
        Notable projects
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6} mt={6}>
        <GridItem
          href='https://frontend.comroots.ml'
          title='Comroots'
          thumbnail={thumbComroots}
        >
          a media platform for extracurricular activities and job opportunities
        </GridItem>
        <GridItem
          href='https://www.debaterstoolkit.com/'
          title="Debaters' toolkit"
          thumbnail={thumbDebatersToolkit}
        >
          an multi-platform application for the Vietnamese Debate Community
        </GridItem>
      </SimpleGrid>
    </Section>

    <Section delay={0.3}>
      <Heading as='h3' variant='section-title'>
        Resume
      </Heading>
      <NextLink href='/miscellaneous/Resume.pdf' passHref>
        <NoUnderlineLink download target='_blank'>
          <Button
            leftIcon={<DownloadIcon />}
            colorScheme={useColorModeValue('teal', 'orange')}
            mt={2}
          >
            Download
          </Button>
        </NoUnderlineLink>
      </NextLink>
    </Section>

    <Box textAlign='center' my={4}>
      <NextLink href='/posts' passHref scroll={false}>
        <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('teal', 'orange')}>
          Posts
        </Button>
      </NextLink>
    </Box>
  </Container>
)

export default Home