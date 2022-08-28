import { Box, Container, Flex, Heading, Link, List, ListIcon, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { BioSection, BioYear, Section } from 'src/components'

interface ResumeProps {

}

const Resume: NextPage<ResumeProps> = () => {
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

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Extra-curricular activities
        </Heading>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.facebook.com/puzzles.ams' passHref>
              <Link color='white' target='_blank'>
                Puzzles Ams Debate Club
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The competitive debate club of Hanoi-Amsterdam High School for the Gifted</Text>
          <Text fontSize='xs' mt='0.375rem'>Oct 2020 - Aug 2021, Debater</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Competed in debate tournaments nationally</ListItem>
            <ListItem>Participated in weekly training sessions</ListItem>
            <ListItem>Created a debate motion database with 197 motions in both English and Vietnamese with other club members</ListItem>
            <ListItem>Acted as a Plaintiff&apos;s Attorney in a Mock Trial event that attracted over 100 participants</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.facebook.com/mun.hnams/' passHref>
              <Link color='white' target='_blank'>
                Hanoi-Amsterdam Model UN Association
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The competitive MUN club of Hanoi-Amsterdam High School for the Gifted</Text>
          <Text fontSize='xs' mt='0.375rem'>Oct 2020 - Aug 2021, Member</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Participated in weekly training sessions</ListItem>
            <ListItem>Led the club in organizing a mock MUN conference for the United Nations Environment Program, participated in the writing of a detailed 7500-word Guidebook on the topic of Environmental Racism as well as chaired the Conference</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.hanoimun.org/' passHref>
              <Link color='white' target='_blank'>
                Hanoi Model United Nations Organizations
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>A professional student-led organization</Text>
          <Text fontSize='xs' mt='0.375rem'>2021, Crisis Director</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>1 of the 4 Crisis Directors of the Joint Historical Crisis Council (JHCC) featuring the American Revolution for HMUN 7th Session</ListItem>
            <ListItem>Participated in the writing of a comprehensive Guidebook</ListItem>
            <ListItem>Marked delegates&apos; applications for the Conference</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://ivmun.org/' passHref>
              <Link color='white' target='_blank'>
                International Vietnam Model United Nations Conference
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>One of the biggest and most prestigious MUN conferences in Vietnam alongside HMUN and VYMUN</Text>
          <Text fontSize='xs' mt='0.375rem'>2021, Crisis Director</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>1 of the 4 Crisis Directors of the United Nations Security Council (UNSC) on the topic of the Kashmir conflict for IVMUN 2021</ListItem>
            <ListItem>Participated in the writing of a comprehensive Guidebook</ListItem>
            <ListItem>Marked delegates&apos; applications for the Conference</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Ams Model United Nations Conference
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The annual MUN conference of Hanoi-Amsterdam Model UN Association</Text>
          <Text fontSize='xs' mt='0.375rem'>2021, Secretary-General</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Directly managed the following departments: Content, Event, and Media</ListItem>
            <ListItem>Organized 3 committees of the United Nations: The United Nations Educational, Scientific and Cultural Organization (UNESCO), the United Nations Environment Programme (UNEP), and the United Nations Security Council (UNSC)</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://gart6520.com/' passHref>
              <Link color='white' target='_blank'>
                Green Ams Robotics Team 6520
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The robotíc club of Hanoi-Amsterdam High School for the Gifted and Vietnam&apos;s first and only team competing in the FIRST Robotics Competition</Text>
          <Text fontSize='xs' mt='0.375rem'>Oct 2021- May 2022, Member of the Programming and Electronics Division</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Participated weekly training sessions and learned how to wire an FRC Robot as well as program its multiple hardware components using Java</ListItem>
            <ListItem>Participated in the club&apos;s Mock event where the club was split into 2 opposing teams who shall then compete in a simulation of an actual FRC game. Helped build the robot by wiring the Robot Control System and programmed the robot to be able to run automatically or manually under the control of a human using an Xbox Controller</ListItem>
            <ListItem>Participated in the Power Up Ams 2022 event. Helped prepare the curriculum and taught Python to 6th-8th grade kids in a 2-week online boot camp</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Others
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>Other participated events, projects and activities</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Helped build a 20-week curriculum and taught 6th-8th grade students micro:bit programming using Microsoft MakeCode</ListItem>
            <ListItem>Helped rebuild the website of the Vietnam National University (VNU) from a Wordpress website to a PHP Laravel application</ListItem>
            <ListItem>Tutored a 9th-grade student who successfully passed the high school entrance exam and got into Hanoi-Amsterdam High School for the Gifted</ListItem>
            <ListItem>Participated in Build On Vietnam 2022, a national hackathon for college students</ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Projects
        </Heading>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.debaterstoolkit.com/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                debaterstoolkit.com
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>An application which generates debate motions based on various criteria, calculate break chances for debate tournaments and helps adjudicators do timekeeping for various debate formats.</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Built the application with ReactJS, Firebase, and Node.js</ListItem>
            <ListItem>Hosted the app on Netlify and added HTTPS to the app with a TLS certificate from Let&apos;s Encrypt</ListItem>
            <ListItem>Added offline capabilities to the app by making it a Progressive Web App (PWA) in addition to being an online web-application</ListItem>
            <ListItem>Made the app available on native platforms i.e. Windows (using Electron) and Android (using Ionic and Capacitor)</ListItem>
            <ListItem>Gathered and translated over 7,300 debate motions and translated them into Vietnamese for the Vietnamese Debate Community</ListItem>
            <ListItem>The application has 200 monthly active users</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://frontend.comroots.ml/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                Comroots
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>A social media platform on which young people can find job offers in addition to clubs, internships, projects, and extracurricular activities in general</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Designed the UI using Figma</ListItem>
            <ListItem>Built the frontend with Next.js and deployed to Vercel</ListItem>
            <ListItem>Built the backend server with Express.js, GraphQL, PostgreSQL, Redis, and Firestore</ListItem>
            <ListItem>
              Made use of the following AWS services:
              <List>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  EC2
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  RDS
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  ElastiCache
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  S3
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  Simple Email Service
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  QuickSight
                </ListItem>
              </List>
            </ListItem>
            <ListItem>Deployed the server to an AWS EC2 instance using Dokku</ListItem>
            <ListItem>The application features spaces; each Space is a community where people can create and apply to job offers, club recruitment offers, etc. as well as make posts that are linked to a specific topic. For instance, s/CompSci would contain all the posts, job/internship offers, and recruitment offers for clubs/projects related to the field of Computer Science that people made. Spaces can be subscribed to and their posts can be shared, commented on, or voted on.</ListItem>
            <ListItem>A real-time chat feature implemented with Firestore is included.</ListItem>
            <ListItem>Visualized data generated by people&apos;s usage using AWS QuickSight</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            IOT Syringe Infusion Pump
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Helped build an IOT Syringe Infusion Pump in a team of 5 for the AI-JAM US 2021 Competition</ListItem>
            <ListItem>This syringe pump allows doctors to set, modify the flow, stop the infusion of the pump over the internet as per patient response. It also keeps track of all the commands used by doctors in a safety log for data inspection if needed.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            IOT Bracelet to assist blind people
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Helped build an IOT Bracelet to assist blind people in a team of 7 for the 45th INOVA International Invention Show</ListItem>
            <ListItem>The bracelet uses an ultrasonic distance sensor to detect nearby objects and alerts the wearer about them.</ListItem>
            <ListItem>The device also collects GPS data and heart rate/blood oxygen concentration from the wearer and uploads such data to a cloud server for statistics monitoring.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            IOT stroke-monitoring and alert device
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Helped build an IOT stroke-monitoring and alert device in a team of 6 for the 2021 Advanced Innovation Global Competition (AIGC) hosted in Singapore</ListItem>
            <ListItem>The bracelet uses an accelerometer and gyroscope sensor to measure the 3D coordinates of the wearer as well as a pulse-oximeter and heart-rate sensor to measure the oxygen level and heart-rate of the wearer.</ListItem>
            <ListItem>The data from the two sensors is displayed onto an OLED Screen and uploaded to an online Blynk server for constant monitoring.</ListItem>
            <ListItem>In the event where a stroke is determined to have happened, the device triggers buzzers into making noises to alert surrounding people as well as sends an SMS text and makes a phone call to a preset phone number using a SIM module to alert that person about the stroke.</ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Awards & Certificates
        </Heading>

        <Box fontSize='sm'>
          <Text fontWeight='bold'>Hanoi Municipal English 9th-grade Olympiad</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Second Prize</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Hanoi Model United Nations Mock #12</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Outstanding Delegate</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>AI-JAM US 2021 Competition</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Gold Award</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>2021 INOVA, 45th International Invention Show</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Outstanding Delegate</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Advanced Innovation Global Competition 2021</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Gold Award</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Hanoi Municipal English 12th-grade Olympiad</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Second Prize</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Udemy</Text>
          <NextLink href='https://www.udemy.com/certificate/UC-242b9dec-8445-4f73-b641-78be2dfbb8f8' passHref>
            <Link color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold' target='_blank'>Bash Shell Scripting Tutorial for Beginners</Link>
          </NextLink>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Coursera</Text>
          <NextLink href='https://coursera.org/share/e42a73394eeaca2f9405e1aa20c0225a' passHref>
            <Link color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold' target='_blank'>Introduction to Bash Shell Scripting</Link>
          </NextLink>
          <br />
          <NextLink href='https://coursera.org/share/26557c59373f840819df5075d81d7ed4' passHref>
            <Link color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold' target='_blank'>Python3 Programming</Link>
          </NextLink>
          <br />
          <NextLink href='https://coursera.org/share/d3e5a282d1153f868ef7ab9b7e596489' passHref>
            <Link color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold' target='_blank'>Python for Everybody</Link>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Skills
        </Heading>
        
        <Box fontSize='sm'>
          <Text fontWeight='bold'>Programming</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>JavaScript, TypeScript, Python, Java, C, Arduino, Bash, PHP</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Web, APIs & Databases</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>HTML, CSS, Tailwind, Firebase, MongoDB, SQL (PostgreSQL & MySQL), Redis, REST, GraphQL</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Frameworks</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>React, Next.js, Node.js, Express.js, Electron, React Native, Ionic (Capacitor)</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Tech</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Git, Docker, Dokku, SSH, VSCode, Vim, Postman, Insomnia, DataGrip, IntelliJ, PyCharm, CLion, MS Office</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Languages</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>English, Vietnamese</Text>
        </Box>
      </Section>

    </Container>
  )
}

export default Resume