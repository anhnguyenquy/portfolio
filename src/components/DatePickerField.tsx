import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { PropsOf } from '@chakra-ui/react'
import { DatePicker } from '@mantine/dates'
import { useField } from 'formik'
import { useRef } from 'react'

type DatePickerFieldProps = PropsOf<typeof DatePicker> & {
  label: string
  name: string
}

export const DatePickerField = (props: DatePickerFieldProps): JSX.Element => {
  const { label, name, ...rest } = props
  const [field, { error }, { setValue }] = useField({ name })
  const ref = useRef<HTMLInputElement>(null)

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <DatePicker
        value={field.value ? new Date(field.value) : null}
        onChange={(value) => { setValue((new Date(value)).toISOString()) }}
        ref={ref}
        zIndex={1401}
        dropdownPosition='flip'
        classNames={{
          dropdown: `${name}-datePicker-dropdown`,
          wrapper: `${name}-datePicker-wrapper`,
          yearPickerControlActive: `${name}-datePicker-yearPickerControlActive`,
          monthPickerControlActive: `${name}-datePicker-monthPickerControlActive`,
          day: `${name}-datePicker-day`,
        }}
        styles={{
          dropdown: { marginLeft: `${ref?.current?.clientWidth ? (ref.current.clientWidth - 300) / 2 : 0}px` },
          wrapper: {
            input: {
              '&:focus-within': {
                borderColor: '#ED8936',
                boxShadow: '0 0 0 1px #ED8936',
              }
            }
          },
          yearPickerControlActive: { backgroundColor: '#ED8936', '&:hover': { backgroundColor: '#ED8936' } },
          monthPickerControlActive: { backgroundColor: '#ED8936', '&:hover': { backgroundColor: '#ED8936' } },
          day: { '&[data-selected]': { backgroundColor: '#ED8936' } }
        }}
        id={field.name}
        {...props}
        label={null}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}