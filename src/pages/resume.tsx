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
            <Text>9.0</Text>
          </Flex>
          <Flex align='center' mt={1}>
            <Text fontWeight='bold' minW='265px'>SAT</Text>
            <Text>1540 (750 EBRW, 790 Math)</Text>
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
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                Puzzles Ams Debate Club
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The competitive debate club of Hanoi-Amsterdam High School for the Gifted</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>Oct 2020 - Aug 2021, Debater</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Participated in weekly training sessions</ListItem>
            <ListItem>Competed in debate tournaments nationally</ListItem>
            <ListItem>Created a database with 1000 debate motions in both English and Vietnamese</ListItem>
            <ListItem>Acted as a Plaintiff’s Attorney in a Mock Trial event that attracted over 200 participants</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.facebook.com/mun.hnams/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                Hanoi-Amsterdam Model UN Association
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The competitive MUN club of Hanoi-Amsterdam High School for the Gifted</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>Oct 2020 - Aug 2021, Member</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Participated in weekly training sessions</ListItem>
            <ListItem>Participated in over 10 MUN conferences nationwide as either Delegate, Content Developer, Chair, Crisis Director, or Secretary-General</ListItem>
            <ListItem>
              Led the club in organizing a mock MUN conference by:
              <br />
              + Assigning and monitoring the tasks of the club’s 30 members over 2 months of preparation
              <br />
              + Planning the timeline and logistics of the conference
              <br />
              + Standardizing the research and delegate selection process
              <br />
              + Directing the writing of a detailed 7500-word Guidebook on the topic of Environmental Racism
              <br />
              + Chairing the conference’s sole committee: the United Nations Environment Programme Committee
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://www.hanoimun.org/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                Hanoi Model United Nations Organizations
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>A professional student-led organization</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>2021, Crisis Director</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>1 of 4 Crisis Directors of the Joint Historical Crisis Council (JHCC)</ListItem>
            <ListItem>Led JHCC’s staff members in preparing the committee’s content, marking delegates’ applications, and interviewing potential delegates</ListItem>
            <ListItem>Chief Writer of 2 comprehensive Guidebooks on the topic of the American Revolution, one for the British Cabinet and one for the American Cabinet. Each Guidebook is approximately 8500 words long.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://ivmun.org/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                International Vietnam Model United Nations Conference
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>One of the biggest and most prestigious MUN conferences in Vietnam alongside HMUN and VYMUN</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>2021, Crisis Director</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>1 of 4 Crisis Directors of the United Nations Security Council (UNSC)</ListItem>
            <ListItem>Led UNSC’s staff members in preparing the committee’s content, marking delegates’ applications, and interviewing potential delegates</ListItem>
            <ListItem>Chief Writer of a 6000-word Guidebook on the Kashmir conflict</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Ams Model United Nations Conference
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The annual MUN conference of Hanoi-Amsterdam Model UN Association</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>2021, Secretary-General</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Directly managed over 100 staff members in the following departments: Content, Human Resources, Logistics, Media, and Finance</ListItem>
            <ListItem>Organized the following 3 UN Committees for over 500 delegates: The United Nations Educational, Scientific and Cultural Organization (UNESCO), the United Nations Environment Programme (UNEP), and the United Nations Security Council (UNSC)</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://gart6520.com/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                Green Ams Robotics Team 6520
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>The robotíc club of Hanoi-Amsterdam High School for the Gifted and Vietnam&apos;s first and only team competing in the FIRST Robotics Competition</Text>
          <Text fontSize='xs' mt='0.375rem' fontWeight='semibold'>Oct 2021 - May 2022, Member of the Programming and Electronics Division</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Participated weekly training sessions and learned how to wire an FRC Robot as well as program its multiple hardware components using Java</ListItem>
            <ListItem>Participated in the club’s Mock event where the club was split into 2 opposing teams who then competed in a simulation of an actual FRC game. Helped build the robot by wiring the Robot Control System and programmed the robot to be able to run automatically or manually under the control of a human using an Xbox Controller</ListItem>
            <ListItem>Participated in the Power Up Ams 2022 event. Helped prepare the curriculum and taught Python to 200 6th-8th grade students in a 2-week online bootcamp</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            Others
          </Heading>
          <Text fontSize='sm' mt={1} fontStyle='italic'>Other participated events, projects and activities</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Helped rebuild the website of the Vietnam National University (VNU) from a Wordpress website to a PHP Laravel application</ListItem>
            <ListItem>Advanced to the Semi-Final round of Build On Vietnam 2022, a national hackathon for college students</ListItem>
            <ListItem>Helped build a 20-week curriculum and taught 50 6th-8th grade students micro:bit programming with Microsoft MakeCode</ListItem>
            <ListItem>Tutored 15 9th-graders student who all successfully passed the high school entrance exam and got into Hanoi-Amsterdam High School for the Gifted</ListItem>
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
          <Text fontSize='sm' mt={1}>
            Source code:&nbsp;
            <NextLink href='https://github.com/anhnguyenquy/debaters-toolkit' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                https://github.com/anhnguyenquy/debaters-toolkit
              </Link>
            </NextLink>
          </Text>
          <Text fontSize='sm' mt={1} fontStyle='italic'>An application which generates debate motions based on various criteria, calculates break chances for debate tournaments and helps adjudicators do timekeeping for various debate formats.</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Built the application with ReactJS and Firebase</ListItem>
            <ListItem>Hosted the app on Netlify and added HTTPS with a TLS certificate from Let’s Encrypt</ListItem>
            <ListItem>Added offline capabilities to the app by making it a Progressive Web App (PWA)</ListItem>
            <ListItem>Made the app available on native platforms i.e. Windows (using Electron) and Android (using Ionic and Capacitor)</ListItem>
            <ListItem>Gathered over 7,300 debate motions and translated them into Vietnamese for the Vietnamese Debate Community</ListItem>
            <ListItem>Added extensive documentation to help other developers contribute or rebuild the project from scratch</ListItem>
            <ListItem>The application has over 13000 monthly active users.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://gpt-3-chat.netlify.app/' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                GPT-3 AI Chat
              </Link>
            </NextLink>
          </Heading>
          <Text fontSize='sm' mt={1}>
            Source code:&nbsp;
            <br />
            + Frontend:&nbsp;
            <NextLink href='https://github.com/anhnguyenquy/gpt-3-chat-frontend' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                https://github.com/anhnguyenquy/gpt-3-chat-frontend
              </Link>
            </NextLink>
            <br />
            + Backend:&nbsp;
            <NextLink href='https://github.com/anhnguyenquy/gpt-3-chat-backend' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                https://github.com/anhnguyenquy/gpt-3-chat-backend
              </Link>
            </NextLink>
          </Text>
          <Text fontSize='sm' mt={1} fontStyle='italic'>Prototype for a web app that allows users to chat with OpenAI’s GPT-3</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Built the frontend with ReactJS, deployed it to Netlify, and added HTTPS with a TLS certificate from Let’s Encrypt</ListItem>
            <ListItem>Built the backend with Express.js to provide a REST API for the frontend. The backend serves as a middleman between the frontend and OpenAI’s API. Deployed the backend to Heroku.</ListItem>
            <ListItem>The application provides an authentic chatting experience with the user interface resembling Messenger’s and is therefore highly familiar while the AI is highly intelligent, capable of engaging in meaningful conversations and performing complex tasks e.g. writing essays, explaining code, checking the weather, summarizing historical events, etc.</ListItem>
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
          <Text fontSize='sm' mt={1}>
            Source code:&nbsp;
            <br />
            + Frontend:&nbsp;
            <NextLink href='https://github.com/anhnguyenquy/Build-On-Vietnam-2022-Frontend' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                https://github.com/anhnguyenquy/Build-On-Vietnam-2022-Frontend
              </Link>
            </NextLink>
            <br />
            + Backend:&nbsp;
            <NextLink href='https://github.com/anhnguyenquy/Build-On-Vietnam-2022-Backend' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                https://github.com/anhnguyenquy/Build-On-Vietnam-2022-Backend
              </Link>
            </NextLink>
          </Text>
          <Text fontSize='sm' mt={1} fontStyle='italic'>A social media platform on which young people can find job offers/internships in addition to clubs, projects, and other extracurricular activities</Text>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Designed the UI using Figma:<br />
              <NextLink href='https://www.figma.com/community/file/1168204272872176563' passHref>
                <Link color={useColorModeValue('black', 'white')} target='_blank'>
                  https://www.figma.com/community/file/1168204272872176563
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>Built the frontend with Next.js and deployed to Vercel</ListItem>
            <ListItem>Built the backend with Express.js, GraphQL, PostgreSQL, Redis, and Firestore</ListItem>
            <ListItem>
              Made use of the following AWS services:
              <List>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  Elastic Compute Cloud (EC2)
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  Relational Database Service (RDS)
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  ElastiCache/MemoryDB
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  Simple Storage Service (S3)
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  Simple Email Service (SES)
                </ListItem>
                <ListItem>
                  <ListIcon as={() => <>+&nbsp;&nbsp;</>} />
                  QuickSight
                </ListItem>
              </List>
            </ListItem>
            <ListItem>Deployed the server to an AWS EC2 instance using Dokku</ListItem>
            <ListItem>The application features Spaces; each Space is a community where people can create and apply to job offers, club recruitment offers, etc. as well as make posts that are linked to a specific topic. For instance, s/CompSci would contain posts, job/internship offers, and clubs/projects recruitment offers related to the field of Computer Science. Spaces can be subscribed to and their posts can be shared, commented on, or voted on.</ListItem>
            <ListItem>Implemented a real-time chat feature with Firestore</ListItem>
            <ListItem>Visualized data generated by people&apos;s usage using AWS QuickSight</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://drive.google.com/file/d/1eKHoO2DopkUVrH0CLtqvBbmBfEKjN6nf/view' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                IOT Syringe Infusion Pump
              </Link>
            </NextLink>
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Led a team of 5 in building an IOT Syringe Infusion Pump for the AI-JAM US 2021 Competition organized by the International Association for the Promotion of Advanced Innovation</ListItem>
            <ListItem>This syringe pump allows doctors to control and adjust the injection of drugs into patients over the Internet. It also keeps track of all the commands used by doctors in a safety log for data inspection if needed.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://drive.google.com/file/d/139NTPe6OdHZV2gij3365tBFjB6TEI1OA/view?usp=sharing' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                IOT Bracelet to assist blind people
              </Link>
            </NextLink>
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Led a team of 7 in building an IOT Bracelet to assist blind people for INOVA 2021, 45th International Invention Show organized by the World Invention Intellectual Property Associations</ListItem>
            <ListItem>The bracelet uses an ultrasonic distance sensor to detect nearby objects and alerts the wearer about them. It also collects GPS data, heart rate, and blood oxygen levels from the wearer and uploads such data to a cloud server for monitoring.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as='h2' mt='1.5rem' size='sm'>
            <NextLink href='https://drive.google.com/file/d/1pSnjQLgZ2PoyUsKzzDybHW9-CbbVZ0ZG/view?usp=sharing' passHref>
              <Link color={useColorModeValue('black', 'white')} target='_blank'>
                IOT stroke-monitoring and alert device
              </Link>
            </NextLink>
          </Heading>
          <UnorderedList mt={1} fontSize='xs'>
            <ListItem>Led a team of 6 in building an IOT stroke-monitoring and alert device for the 2021 Advanced Innovation Global Competition organized by the International Association for the Promotion of Advanced Innovation</ListItem>
            <ListItem>The bracelet uses an accelerometer and gyroscope sensor to measure the 3D coordinates of the wearer as well as a pulse-oximeter and heart-rate sensor to measure the blood oxygen level and heart-rate of the wearer.</ListItem>
            <ListItem>The data from the two sensors is displayed onto an OLED Screen and uploaded to an online Blynk server for constant monitoring.</ListItem>
            <ListItem>In the event where a stroke is determined to have happened, the device triggers buzzers into making noises to alert surrounding people as well as sends an SMS text and makes a call to a preset phone number using a SIM module to alert that person about the stroke.</ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Awards & Certificates
        </Heading>

        <Box fontSize='sm'>
          <Text fontWeight='bold'>English Municipal Academic Competition</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Second Prize in 9th and 11th grade</Text>
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
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>HTML, CSS, Tailwind, ChakraUI, REST, GraphQL, Firestore, MongoDB, SQL (PostgreSQL & MySQL), Redis</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Frameworks</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>React, Next.js, Node.js, Express.js, Electron, React Native, Ionic (Capacitor)</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Tech</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Linux (Debian), VSCode, Vim, IntelliJ, PyCharm, CLion, DataGrip, Postman, Insomnia, Git, Docker, Figma, Jira, Confluence, MS Office</Text>
        </Box>
        <Box fontSize='sm' mt={2}>
          <Text fontWeight='bold'>Cloud</Text>
          <Text color={useColorModeValue('gray.500', 'gray.400')} fontWeight='bold'>Amazon Web Services, Google Cloud Platform, Azure, DigitalOcean, Heroku, Dokku, Vercel, Netlify</Text>
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