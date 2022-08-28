import { Button, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { InputField } from 'src/components'
import { useUser } from 'src/hooks'

interface CreatePostProps {

}

const CreatePost: NextPage<CreatePostProps> = () => {
  const user = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!user) {
      router.push('/auth?next=/create-post')
    }
  }, [user])

  return (
    <Container width='xl' mt={6} p={4} borderRadius='10px' bgColor={useColorModeValue('white', undefined)} shadow={useColorModeValue('lg', undefined)}>
      <Formik
        initialValues={{ title: '', content: '', creationDate: new Date() }}
        onSubmit={async values => {

        }}
      >
        {({ isSubmitting }) =>
          <Form>
            <InputField name='title' placeholder='' label='Title' />
            
            <Flex justify='center'>
              <Button
                type='submit'
                isLoading={isSubmitting}
                mt={4}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                colorScheme={useColorModeValue('teal', 'orange')}
              >
                Create
              </Button>
            </Flex>
          </Form>
        }
      </Formik>
    </Container>
  )
}

export default CreatePost