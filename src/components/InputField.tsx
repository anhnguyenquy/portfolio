import { Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react'
import { PropsOf } from '@chakra-ui/react'
import { RichTextEditorProps } from '@mantine/rte'
import autosize from 'autosize'
import { useField } from 'formik'
import dynamic from 'next/dynamic'
import { InputHTMLAttributes, TextareaHTMLAttributes, useEffect, useRef } from 'react'
import { RichText } from './RichText'

type InputFieldProps =

  InputHTMLAttributes<HTMLInputElement> & PropsOf<typeof Input> &
  TextareaHTMLAttributes<HTMLTextAreaElement> & PropsOf<typeof Textarea> &
  Partial<RichTextEditorProps>
  &
  {
    label: string
    name: string
    inputType?: 'input' | 'textarea' | 'rte'
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

type RichTextComponentProps = Partial<RichTextEditorProps> & {
  label: string
  name: string
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

const RichTextComponent = (props: RichTextComponentProps): JSX.Element => {
  const { label, name, ...rest } = props
  const [{ name: fieldName, value }, { error }, { setValue }] = useField<string>({ name })

  const handleChange = (value: string) => {
    setValue(value)
  }
  
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={fieldName}>{label}</FormLabel>
      <Box
        className='quill-container'
        sx={{
          '& .quill': {
            '& .ql-toolbar': {
              borderRadius: '5px 5px 0 0'
            },
            '& .ql-container': {
              borderRadius: '0 0 5px 5px',
              '& .ql-editor': {
                minHeight: '10rem',
              },
            }
          }
        }}
      >
        <RichText
          className='quill'
          value={value}
          onChange={handleChange}
          id={fieldName}
          {...rest}
        />
      </Box>
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
        inputType == 'rte' &&
        <RichTextComponent label={label} name={name} {...rest} />
      }
    </>
  )
}