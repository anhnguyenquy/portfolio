import { Box, Button, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { InputField } from 'src/components'
import { useUser } from 'src/hooks'
import { auth } from 'src/lib'
import { formErrorMessage } from 'src/styles'

interface LoginProps {

}

const Login: NextPage<LoginProps> = () => {
  const user = useUser()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (user) {
      router.push(router.query.next as string ?? '/')
    }
  }, [user])

  return (
    <Container width='sm' mt={6} p={4} borderRadius='10px' bgColor={useColorModeValue('white', undefined)} shadow={useColorModeValue('lg', undefined)}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async values => {
          const { email, password } = values
          try {
            await signInWithEmailAndPassword(auth, email, password)
          }
          catch (e) {
            setErrorMessage(e.message)
          }
        }}
      >
        {({ isSubmitting }) =>
          <Form onChange={() => { setErrorMessage('') }}>
            <InputField name='email' placeholder='' label='Email' />
            <Box mt={4}>
              <InputField name='password' placeholder='' label='Password' type='password' />
            </Box>
            {
              errorMessage && (
                <Box style={formErrorMessage}>{errorMessage}</Box>
              )
            }
            <Flex justify='center'>
              <Button
                type='submit'
                isLoading={isSubmitting}
                mt={4}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                colorScheme={useColorModeValue('teal', 'orange')}
              >
                Login
              </Button>
            </Flex>
          </Form>
        }
      </Formik>
    </Container>
  )
}

export default Login