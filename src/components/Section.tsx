import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface SectionProps {
  children?: ReactNode
  delay?: number
}

export const Section = (props: SectionProps): JSX.Element => {
  const { children, delay = 0 } = props

  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transitionDuration='0.8s'
      transitionDelay={`${delay}s`}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}