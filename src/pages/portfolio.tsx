import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Heading, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { NextPage } from 'next'
import { BioSection, BioYear, NoUnderlineLink, ProfileImage, Section } from 'src/components'
import NextLink from 'next/link'

interface PortfolioProps {

}

const Portfolio: NextPage<PortfolioProps> = () => {
  return (
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
        about my education, extracurriculars, and qualifications
      </Box>
      <Flex>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Anh Nguyen Quy
          </Heading>
          <Text>
            203 Nguyen Huy Tuong, Hanoi
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
          Contact Info
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
        </List>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Education
        </Heading>
        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Hanoi-Amsterdam High School for the Gifted
            <br />
            | English-specialized Class
          </Heading>
          <Text fontSize='sm' mt={2}>2020-2023</Text>
        </Box>
        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            GPA
          </Heading>
          <BioSection mt={2}>
            <BioYear>Grade 9</BioYear>
            &nbsp;&nbsp;9.2
          </BioSection>
          <BioSection mt={1}>
            <BioYear>Grade 10</BioYear>
            9.2
          </BioSection>
          <BioSection mt={1}>
            <BioYear>Grade 11</BioYear>
            9.5
          </BioSection>
        </Box>
        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Standardised Test Scores
          </Heading>
          <Flex align='center' mt={2}>
            <Text fontWeight='bold' minW='265px'>IELTS</Text>
            <Text>To be taken this year</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>SAT</Text>
            <Text>1540 (750 EVBRW, 790 Math)</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>AP Computer Science A</Text>
            <Text>5</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>AP Computer Science Principles</Text>
            <Text>5</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>AP Calculus BC</Text>
            <Text>5</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>AP Statistics</Text>
            <Text>5</Text>
          </Flex>
        </Box>

      </Section>
    </Container>
  )
}

export default Portfolio