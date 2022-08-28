import { FormControl, FormErrorMessage, FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react'
import { PropsOf } from '@chakra-ui/react'
import autosize from 'autosize'
import { useField } from 'formik'
import { InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useRef } from 'react'

type InputFieldProps =
  InputHTMLAttributes<HTMLInputElement> & PropsOf<typeof Input> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & PropsOf<typeof Textarea>
  & {
    label: string
    name: string
    inputType?: 'input' | 'textarea' | 'quill'
  }

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  size?: any
}

type TextAreaComponentProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  name: string
  size?: any
}

const InputComponent = (props: InputComponentProps): JSX.Element => {
  const { label, name, ...rest } = props
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} focusBorderColor={useColorModeValue('teal.400', 'orange.400')} borderWidth='2px' spellCheck={false} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

const TextAreaComponent = (props: TextAreaComponentProps): JSX.Element => {
  const { label, name, ...rest } = props
  const [field, { error }] = useField(props)
  const ref = useRef()
  useEffect(() => {
    const current = ref.current
    autosize(current)
    return () => {
      autosize.destroy(current)
    }
  }, [])
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Textarea {...field} {...props} id={field.name} ref={ref} focusBorderColor={useColorModeValue('teal.400', 'orange.400')} borderWidth='2px' spellCheck={false} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export const InputField = (props: InputFieldProps): JSX.Element => {
  const { label, name, inputType = 'input', onQuillChangeEffect, ...rest } = props
  return (
    <>
      {
        inputType == 'input' &&
        <InputComponent label={label} name={name} {...rest} />
      }
      {
        inputType == 'textarea' &&
        <TextAreaComponent label={label} name={name} {...rest} />
      }
      {
        inputType == 'quill' &&
        <></>
      }
    </>
  )
}