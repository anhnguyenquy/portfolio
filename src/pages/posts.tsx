import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'

interface PostsProps {

}

const Posts: NextPage<PostsProps> = () => {
  return (
    <Container textAlign='center'>
      <Text fontWeight='bold' mt={4}>Work In Progress</Text>
    </Container>
  )
}

export default Posts